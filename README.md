# Tesorería PROMUF — Portal de Transparencia Financiera

Herramienta del **Tesorero de ASOPROMUF** (Asociación Civil de Profesionales de la Música del Estado Falcón) para llevar el **plan de cuentas**, registrar movimientos y mantener la **base de datos contable en Google Sheets** con transparencia pública.

Elaborado conforme a:

- Acta Constitutiva y Estatutos Sociales PROMUF (29/07/2026)
- Reglamento Interno del Comité de Contraloría v1.0
- Reglamento Interno del Comité Técnico v2.0
- Reglamento Interno del Comité Disciplinario

## Estructura

| Archivo | Descripción |
|---|---|
| `index.html` | Dashboard del Tesorero (saldos por fondo, plan de cuentas, registro de movimientos, export CSV, conexión a Google Sheets publicado). |
| `plan_de_cuentas.csv` | Catálogo de 165 cuentas (fuente de verdad). Se importa a la pestaña *PlanDeCuentas* de la hoja. |
| `plan_de_cuentas.md` | Documento del plan de cuentas con notas de aplicación. |
| `data/movimientos_template.csv` | Plantilla de movimientos para la pestaña *Movimientos*. |
| `data/fondos.csv` | Los 4 fondos del gremio para la pestaña *Fondos*. |
| `data/socios_template.csv` | Registro de agremiados para la pestaña *Socios*. |
| `data/conciliacion_template.csv` | Plantilla de conciliación bancaria trimestral. |

## Base de datos en Google Sheets (cuenta: tesoreropromuf@gmail.com)

1. En **docs.google.com/spreadsheets** crea la hoja **"Tesoreria PROMUF"**.
2. Crea 5 pestañas: `PlanDeCuentas`, `Movimientos`, `Fondos`, `Socios`, `Conciliacion`.
3. En cada pestaña: **Archivo → Importar → Subir** y sube el CSV correspondiente (con *Sustituir hoja de cálculo* o *Agregar a la hoja*).
4. **Archivo → Compartir → Publicar en la web** → elige cada pestaña con formato **CSV** y copia la URL de cada una.
5. En el dashboard: botón **⚙ Config** → pega las URLs → **Guardar y conectar**.

### Enlace corto para el grupo de WhatsApp

Las URLs publicadas son largas, por eso el enlace corto sale del archivo `config.json`:

1. Abre `config.json` en GitHub (el repo → archivo → lápiz ✏️) y pega tus URLs publicadas:

```json
{
  "mov": "https://docs.google.com/spreadsheets/d/e/2PACX-…/pub?gid=0&single=true&output=csv",
  "fondos": "https://docs.google.com/spreadsheets/d/e/2PACX-…/pub?gid=1&single=true&output=csv",
  "conc": "https://docs.google.com/spreadsheets/d/e/2PACX-…/pub?gid=2&single=true&output=csv"
}
```

2. Commit the change (botón verde *Commit changes*).
3. En el dashboard pulsa **🔗 Copiar enlace**: te copia el enlace corto `https://tesorero-promuf.github.io/promuf-transparencia/?pub=1` listo para pegar en el grupo. Quien lo abra ve la versión pública de solo lectura.

### Flujo diario del Tesorero

1. Registrar el movimiento en el dashboard (fecha, fondo, cuenta del plan, moneda, monto, concepto, soporte).
2. **Exportar CSV** (o Copiar CSV) y pegar las filas al final de la pestaña *Movimientos* de la hoja.
3. La hoja es la base de datos oficial; el dashboard lee la versión publicada (solo lectura).

## Obligaciones del Tesorero (Art. 15 Estatutos)

- Sistema de contabilidad en todas las transacciones (a) — depósito de recaudación en **máx. 48 h** (i).
- Custodia de ingresos, depósitos, valores y uso de fondos (b).
- Firma conjunta con Presidente/Vicepresidente de cheques y documentos (c).
- **Balance de comprobación y conciliación bancaria trimestrales** + informe mensual si lo pide la Junta Directiva (e).
- Estado financiero anual ante la Asamblea Ordinaria (g).
- Entrega bajo inventario al cambiar la Junta Directiva (h).
- Rendición de eventos en **máx. 15 días hábiles** ante el Comité de Contraloría (Art. 10 R.CC).

## Reglas contables claves

- **4 fondos**: Cuotas de Membresía (F1), Salud y Emergencias (F2), Autogestión Gremial (F3), Ahorro y Operaciones (F4) — auditados trimestralmente por el Comité de Contraloría.
- **Fondo de Salud**: mínimo **50%** en moneda extranjera o USDT (Art. 6.d).
- **Cuotas**: indexadas al dólar **USDT** (Art. 6.c).
- **Eventos (Art. 6-A)**: 1º honorarios de músicos 100% (sin retenciones indebidas), 2º gastos operativos con factura/recibo legalizado, 3º excedente al Fondo de Autogestión.
- **Multimoneda**: Bs / USD / USDT, con composición monetaria reportada en cada Asamblea Ordinaria (Art. 6.e).
- **Tabulador**: indexado a tasa BCV; el Comité Técnico lo actualiza cada 3 meses (enero, abril, julio, octubre) o ante variación ≥20% del tipo de cambio.