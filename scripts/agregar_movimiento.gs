/**
 * API Tesorería PROMUF — recibe movimientos del dashboard y los
 * escribe automáticamente en la pestaña "Movimientos" de la hoja
 * "Tesoreria PROMUF".
 *
 * CÓMO INSTALAR:
 * 1. Abre la hoja "Tesoreria PROMUF" → Extensiones → Apps Script.
 * 2. Pega este código completo (borra lo que tenga por defecto).
 * 3. Botón "Implementar" → "Nueva implementación" → tipo: "Aplicación web".
 *    - Ejecutar como: Yo (tu correo tesoreropromuf@gmail.com)
 *    - Quién tiene acceso: Cualquier persona
 * 4. Copia la URL de la aplicación web y pégala en el dashboard
 *    (⚙ Config → "URL API Apps Script") o en config.json ("api").
 */

var NOMBRE_HOJA = 'Movimientos';

function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sh = ss.getSheetByName(NOMBRE_HOJA);
    if (!sh) {
      return responder({ ok: false, error: 'Pestaña ' + NOMBRE_HOJA + ' no encontrada' });
    }
    var fila = [
      body.fecha || new Date().toISOString().slice(0, 10),
      body.cuenta || '',
      body.cuenta_nombre || '',
      body.fondo || 'General',
      body.moneda || 'USD',
      Number(body.monto) || 0,
      body.tipo || 'Ingreso',
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

function responder(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}