/**
 * API Tesorería PROMUF — recibe movimientos del dashboard y los
 * escribe automáticamente en la pestaña "Movimientos" de la hoja
 * "Tesoreria PROMUF".
 *
 * BLINDAJE (versión 2):
 * - Token de acceso: solo se aceptan movimientos que traigan el
 *   token correcto en el campo "token" del JSON.
 * - Validación de campos: fecha, monto, tipo, cuenta, moneda y fondo
 *   se validan antes de escribir; cualquier dato inválido se rechaza.
 *
 * CÓMO INSTALAR / ACTUALIZAR:
 * 1. Abre la hoja "Tesoreria PROMUF" → Extensiones → Apps Script.
 * 2. Pega este código completo (borra lo que tenga por defecto).
 * 3. Guarda (Ctrl+S).
 * 4. IMPORTANTE (solo la primera vez): selecciona la función
 *    "autorizar" → ▶ Ejecutar → Acepta los permisos.
 * 5. Implementar → Administrar implementaciones → lápiz ✏️ en la
 *    "Aplicación web" → Versión: "Nueva versión" → Implementar.
 *    (Mantienes la misma URL; no hace falta crear una nueva.)
 * 6. En el dashboard: ⚙ Config → "Token API" → pega el token que
 *    tienes en config.json (campo "api_token").
 */

var NOMBRE_HOJA = 'Movimientos';
var TOKEN = 'pf-6c7f9c2a12b0dd6c95ca6ec8ba7306a4';

function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents);
    if (!body || body.token !== TOKEN) {
      return responder({ ok: false, error: 'Token inválido' });
    }
    var val = validar(body);
    if (!val.ok) {
      return responder(val);
    }
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sh = ss.getSheetByName(NOMBRE_HOJA);
    if (!sh) {
      return responder({ ok: false, error: 'Pestaña ' + NOMBRE_HOJA + ' no encontrada' });
    }
    var fila = [
      body.fecha,
      body.cuenta,
      body.cuenta_nombre || '',
      body.fondo,
      body.moneda,
      Number(body.monto),
      body.tipo,
      body.concepto || '',
      body.evento || '',
      body.agremiado || '',
      body.soporte || '',
      body.usuario || 'dashboard',
      'Registrado',
      body.notas || ''
    ];
    sh.appendRow(fila);
    return responder({ ok: true, fila: sh.getLastRow() });
  } catch (err) {
    return responder({ ok: false, error: String(err) });
  }
}

function doGet(e) {
  return responder({ ok: true, msg: 'API Tesorería PROMUF activa' });
}

/**
 * AUTORIZACIÓN (solo una vez):
 * Selecciona esta función en el editor y pulsa ▶ Ejecutar (Run).
 * Acepta: Elegir cuenta → Revisar permisos → Avanzado →
 * "Ir a ... (no seguro)" → Permitir.
 * Sin esto, la API responde PERMISSION_DENIED.
 */
function autorizar() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  return 'OK: ' + (ss ? ss.getName() : 'sin acceso');
}

function validar(body) {
  var okFecha = /^\d{4}-\d{2}-\d{2}$/.test(body.fecha || '');
  var monto = Number(body.monto);
  var okMonto = isFinite(monto) && monto > 0;
  var okTipo = ['Ingreso', 'Egreso'].indexOf(body.tipo) !== -1;
  var okCuenta = /^\d+\.\d+\.\d+\.\d+$/.test(body.cuenta || '');
  var okMoneda = ['Bs', 'USD', 'USDT'].indexOf(body.moneda) !== -1;
  var okFondo = ['General', 'Membresia', 'Salud', 'Autogestion', 'Ahorro', 'Operaciones'].indexOf(body.fondo) !== -1;
  var okConcepto = String(body.concepto || '').trim().length >= 3;
  var errores = [];
  if (!okFecha) errores.push('fecha (formato AAAA-MM-DD)');
  if (!okMonto) errores.push('monto (número mayor a 0)');
  if (!okTipo) errores.push('tipo (Ingreso/Egreso)');
  if (!okCuenta) errores.push('cuenta (código del plan, ej. 4.1.01.02)');
  if (!okMoneda) errores.push('moneda (Bs/USD/USDT)');
  if (!okFondo) errores.push('fondo (General/Membresia/Salud/Autogestion/Ahorro/Operaciones)');
  if (!okConcepto) errores.push('concepto (mínimo 3 caracteres)');
  if (errores.length) {
    return { ok: false, error: 'Campos inválidos: ' + errores.join(', ') };
  }
  return { ok: true };
}

function responder(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}