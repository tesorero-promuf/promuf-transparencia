# Plan de Cuentas — Tesorería PROMUF (ASOPROMUF)

Plan de cuentas de la Asociación Civil de Profesionales de la Música del Estado Falcón (PROMUF), basado en el Acta Constitutiva, los Estatutos y los Reglamentos Internos (Comité Técnico, Comité de Contraloría y Comité Disciplinario).

- **Total de cuentas:** 168
- **Grupos:** Activo, Pasivo, Patrimonio, Ingresos, Gastos, Cuentas de Orden
- **Dimensiones por cuenta:** grupo, tipo, naturaleza (Deudora/Acreedora), moneda, fondo

## Estructura

| Grupo | Rango de códigos | Cuentas |
|---|---|---|
| Activo | 1.x | 44 |
| Pasivo | 2.x | 19 |
| Patrimonio | 3.x | 17 |
| Ingresos | 4.x | 37 |
| Gastos | 5.x | 40 |
| Cuentas de Orden | 6.x | 11 |

**Total: 168 cuentas**

## ACTIVO

| Código | Cuenta | Tipo | Nat. | Moneda | Fondo | Descripción |
|---|---|---|---|---|---|---|
| 1.0.00.00 | ACTIVO | AC | D | Mixta | NA | Total de recursos económicos de la asociación. |
| 1.1.00.00 | ACTIVO CORRIENTE | AC | D | Mixta | NA | Bienes y derechos realizables en menos de un año. |
| 1.1.01.00 | DISPONIBILIDADES | AC | D | Mixta | NA | Caja, bancos y valores de inmediata realización. |
| 1.1.01.01 | Caja Bs | AC | D | Bs | General | Efectivo en bolívares físico custodiado por el Tesorero. |
| 1.1.01.02 | Caja USD | AC | D | USD | General | Efectivo en divisas (dólares físicos) bajo custodia. |
| 1.1.01.03 | Banco Bs - Cuenta Corriente ASOPROMUF | AC | D | Bs | General | Cuenta corriente bancaria en bolívares a nombre de la asociación. |
| 1.1.01.04 | Banco USD - Cuenta Moneda Extranjera | AC | D | USD | General | Cuenta bancaria en moneda extranjera de la asociación. |
| 1.1.01.05 | Pago Móvil (Bs) | AC | D | Bs | General | Recaudaciones vía pago móvil en bolívares. |
| 1.1.01.06 | Zelle (USD) | AC | D | USD | General | Recaudaciones vía Zelle en dólares. |
| 1.1.01.07 | Binance - USDT | AC | D | USDT | General | Billetera cripto para resguardo multimoneda (Art. 6.d). |
| 1.1.01.08 | Zinli / Tarjeta Prepagada (USD) | AC | D | USD | General | Billetera/tarjeta prepagada en dólares. |
| 1.1.02.00 | CUENTAS POR COBRAR | AC | D | Mixta | NA | Derechos a cobrar por concepto de cuotas, avances y anticipos. |
| 1.1.02.01 | Cuotas de membresía por cobrar | AC | D | USDT | Membresia | Cuotas mensuales de agremiados pendientes de cobro (indexadas a USDT). |
| 1.1.02.02 | Aportes por cobrar a asociados | AC | D | USDT | General | Aportes extraordinarios acordados en Asamblea pendientes de cobro. |
| 1.1.02.03 | Anticipos a proveedores y contratistas | AC | D | Mixta | General | Anticipos entregados por servicios o bienes por recibir. |
| 1.1.02.04 | Avances a rendir (viáticos) | AC | D | Mixta | General | Fondos entregados para gastos que deben rendirse con soportes. |
| 1.1.02.05 | Otras cuentas por cobrar | AC | D | Mixta | General | Otros derechos a cobrar no clasificados. |
| 1.1.03.00 | INVENTARIOS Y MATERIALES | AC | D | Mixta | NA | Existencias de materiales e insumos de la asociación. |
| 1.1.03.01 | Materiales e insumos musicales | AC | D | Mixta | General | Cuerdas, accesorios e insumos de mantenimiento. |
| 1.1.03.02 | Material didáctico y publicaciones | AC | D | Mixta | General | Libros, revistas y materiales gráficos para venta o distribución. |
| 1.1.03.03 | Instrumentos y equipos para la venta | AC | D | Mixta | General | Instrumentos/equipos adquiridos para comercialización (Art. 2 Estatutos). |
| 1.1.04.00 | FONDOS CON DESTINACIÓN ESPECÍFICA | AC | D | Mixta | NA | Los cuatro fondos del gremio (Art. 5 Reglamento Contraloría). Cada fondo es un subconjunto contable independiente. |
| 1.1.04.01 | Fondo Cuotas de Membresía - Bs | AC | D | Bs | Membresia | Recaudaciones de cuotas en bolívares por aplicar a fines del fondo. |
| 1.1.04.02 | Fondo Cuotas de Membresía - USD/USDT | AC | D | USD | Membresia | Recaudaciones de cuotas en divisas/crypto por aplicar a fines del fondo. |
| 1.1.04.03 | Fondo de Salud y Emergencias - Bs | AC | D | Bs | Salud | Recursos en bolívares del Fondo de Salud y Bienestar Social. |
| 1.1.04.04 | Fondo de Salud y Emergencias - USD/USDT | AC | D | USD | Salud | Resguardo en divisas/crypto del Fondo de Salud. Al menos 50% debe estar aquí (Art. 6.d Estatutos / Reglamento Contraloría Art. 5.2). |
| 1.1.04.05 | Fondo de Autogestión Gremial - Bs | AC | D | Bs | Autogestion | Excedentes de eventos propios de PROMUF en bolívares (Art. 6-A). |
| 1.1.04.06 | Fondo de Autogestión Gremial - USD/USDT | AC | D | USD | Autogestion | Excedentes de eventos propios en divisas/crypto. |
| 1.1.04.07 | Fondo de Ahorro - Bs | AC | D | Bs | Ahorro | Reservas de ahorro del gremio en bolívares. |
| 1.1.04.08 | Fondo de Ahorro - USD/USDT | AC | D | USD | Ahorro | Reservas de ahorro en divisas/crypto. |
| 1.2.00.00 | ACTIVO NO CORRIENTE | ANC | D | Mixta | NA | Bienes y derechos de permanencia mayor a un año. |
| 1.2.01.00 | PROPIEDAD PLANTA Y EQUIPO | ANC | D | Mixta | NA | Infraestructura y equipamiento institucional. |
| 1.2.01.01 | Equipos de sonido e iluminación | ANC | D | Mixta | General | Tarimas, sistemas de sonido e iluminación de propiedad del gremio. |
| 1.2.01.02 | Instrumentos musicales institucionales | ANC | D | Mixta | General | Instrumentos propiedad de la asociación. |
| 1.2.01.03 | Mobiliario y equipos de oficina | ANC | D | Mixta | General | Mobiliario de la sede y oficinas. |
| 1.2.01.04 | Equipos de computación | ANC | D | Mixta | General | Computadores y periféricos. |
| 1.2.02.00 | (-) DEPRECIACIÓN ACUMULADA | ANC | A | Mixta | NA | Depreciación acumulada de los activos fijos (cuenta acreedora). |
| 1.2.02.01 | (-) Depreciación acumulada de equipos | ANC | A | Mixta | General | Depreciación acumulada de equipos e infraestructura. |
| 1.2.03.00 | OTROS ACTIVOS NO CORRIENTES | ANC | D | Mixta | NA | Otros activos de largo plazo. |
| 1.2.03.01 | Depósitos y fianzas entregadas | ANC | D | Mixta | General | Depósitos en garantía por arrendamientos o servicios. |
| 1.2.03.02 | Derechos y marcas (SAPI) | ANC | D | Mixta | General | Registros de propiedad intelectual y marca ante el SAPI. |
| 1.2.03.03 | Criptoactivos de reserva | ANC | D | USDT | Ahorro | Reservas cripto de largo plazo del Fondo de Ahorro (Art. 6 Resguardo Patrimonial). |
| 1.1.04.09 | Fondo de Operaciones - Bs | AC | D | Bs | Operaciones | Recursos para la operación diaria del gremio en bolívares. |
| 1.1.04.10 | Fondo de Operaciones - USD/USDT | AC | D | USD | Operaciones | Recursos operativos en divisas/crypto. |

## PASIVO

| Código | Cuenta | Tipo | Nat. | Moneda | Fondo | Descripción |
|---|---|---|---|---|---|---|
| 2.0.00.00 | PASIVO | PC | A | Mixta | NA | Obligaciones de la asociación con terceros. |
| 2.1.00.00 | PASIVO CORRIENTE | PC | A | Mixta | NA | Obligaciones exigibles en menos de un año. |
| 2.1.01.00 | CUENTAS Y DOCUMENTOS POR PAGAR | PC | A | Mixta | NA | Deudas con proveedores, contratistas y agremiados. |
| 2.1.01.01 | Proveedores por pagar | PC | A | Mixta | General | Facturas de proveedores pendientes de pago. |
| 2.1.01.02 | Honorarios de músicos por pagar | PC | A | Mixta | Autogestion | Honorarios de músicos devengados pendientes de pago (se pagan 100% y primero). |
| 2.1.01.03 | Contratistas y staff técnico por pagar | PC | A | Mixta | Autogestion | Staff técnico (sonido, luces, tarimas) pendiente de pago. |
| 2.1.01.04 | Aportes y cuotas por devolver | PC | A | Mixta | General | Reintegros a agremiados o terceros por pagar. |
| 2.1.02.00 | OBLIGACIONES FISCALES Y LEGALES | PC | A | Mixta | NA | Obligaciones tributarias y tasas. |
| 2.1.02.01 | ISLR por pagar | PC | A | Bs | General | Impuesto sobre la renta retenido o por declarar. |
| 2.1.02.02 | IGTF por pagar | PC | A | Bs | General | Impuesto a las Grandes Transacciones Financieras. |
| 2.1.02.03 | IVA / Retenciones por pagar | PC | A | Bs | General | Retenciones de IVA por enterar. |
| 2.1.02.04 | Tasas y contribuciones por pagar | PC | A | Mixta | General | Tasas municipales y otros tributos. |
| 2.1.03.00 | OBLIGACIONES LABORALES | PC | A | Mixta | NA | Obligaciones con el personal de la asociación. |
| 2.1.03.01 | Prestaciones sociales por pagar | PC | A | Mixta | General | Prestaciones sociales acumuladas del personal. |
| 2.1.03.02 | Vacaciones y utilidades por pagar | PC | A | Mixta | General | Beneficios laborales por pagar. |
| 2.2.00.00 | PASIVO NO CORRIENTE | PNC | A | Mixta | NA | Obligaciones de largo plazo. |
| 2.2.01.00 | PRÉSTAMOS POR PAGAR | PNC | A | Mixta | General | Préstamos a largo plazo. |
| 2.2.01.01 | Préstamos bancarios por pagar | PNC | A | Mixta | General | Deuda bancaria de largo plazo. |
| 2.2.01.02 | Préstamos de terceros por pagar | PNC | A | Mixta | General | Deuda con personas naturales o jurídicas. |

## PATRIMONIO

| Código | Cuenta | Tipo | Nat. | Moneda | Fondo | Descripción |
|---|---|---|---|---|---|---|
| 3.0.00.00 | PATRIMONIO | P | A | Mixta | NA | Patrimonio social y resultados acumulados del gremio. |
| 3.1.00.00 | FONDO SOCIAL | P | A | Mixta | NA | Aportes fundacionales y patrimonio inicial. |
| 3.1.01.00 | Aporte fundacional de los miembros fundadores | P | A | Mixta | General | Aportes iniciales de los 7 fundadores. |
| 3.1.02.00 | Donaciones patrimoniales capitalizadas | P | A | Mixta | General | Donaciones destinadas a capitalizarse. |
| 3.2.00.00 | RESULTADOS | P | A | Mixta | NA | Resultados acumulados y del ejercicio. |
| 3.2.01.00 | Excedente (déficit) del ejercicio | P | A | Mixta | NA | Resultado del ejercicio en curso. Sin fines de lucro: los excedentes se reinvierten en el objeto social. |
| 3.2.02.00 | Excedentes acumulados de ejercicios anteriores | P | A | Mixta | NA | Resultados de ejercicios previos pendientes de aplicación. |
| 3.3.00.00 | FONDOS PATRIMONIALES RESTRINGIDOS | P | A | Mixta | NA | Contrapartida patrimonial de los fondos con destinación específica (Art. 4 Reglamento Contraloría: destinos cerrados). |
| 3.3.01.00 | Fondo patrimonial Cuotas de Membresía | P | A | Mixta | Membresia | Contrapartida del Fondo de Cuotas de Membresía. |
| 3.3.02.00 | Fondo patrimonial Salud y Emergencias | P | A | Mixta | Salud | Contrapartida del Fondo de Salud y Emergencias. |
| 3.3.03.00 | Fondo patrimonial Autogestión Gremial | P | A | Mixta | Autogestion | Contrapartida del Fondo de Autogestión Gremial. |
| 3.3.04.00 | Fondo patrimonial Ahorro | P | A | Mixta | Ahorro | Contrapartida del Fondo de Ahorro. |
| 3.4.00.00 | RESERVAS | P | A | Mixta | NA | Reservas constituidas por disposición estatutaria o de Asamblea. |
| 3.4.01.00 | Reserva multimoneda (Fondo de Salud) | P | A | USD | Salud | Reserva equivalente al 50% del Fondo de Salud en moneda extranjera o USDT (Art. 6.d / Reglamento Contraloría Art. 5.2). |
| 3.4.02.00 | Reserva de contingencia | P | A | Mixta | Operaciones | Reserva para imprevistos operativos (Fondo de Operaciones). |
| 3.4.03.00 | Reserva de reinversión en el objeto social | P | A | Mixta | General | Excedentes comprometidos para reinversión (talleres, eventos, bienestar). |
| 3.3.05.00 | Fondo patrimonial Operaciones | P | A | Mixta | Operaciones | Contrapartida del Fondo de Operaciones. |

## INGRESOS

| Código | Cuenta | Tipo | Nat. | Moneda | Fondo | Descripción |
|---|---|---|---|---|---|---|
| 4.0.00.00 | INGRESOS | I | A | Mixta | NA | Recursos que incrementan el patrimonio del gremio. |
| 4.1.00.00 | INGRESOS POR CUOTAS Y APORTES | I | A | Mixta | NA | Cuotas y aportes de los agremiados (Art. 5 y 6 Estatutos). |
| 4.1.01.00 | Cuotas de membresía | I | A | USDT | Membresia | Cuotas de los asociados indexadas al dólar USDT (Art. 6.c / Reglamento Contraloría Art. 5.3). |
| 4.1.01.01 | Cuota de inscripción (ingreso) | I | A | USDT | Membresia | Pago único de ingreso al gremio. |
| 4.1.01.02 | Cuota mensual de membresía | I | A | USDT | Membresia | Cuota mensual de funcionamiento (Art. 19.3 Estatutos). |
| 4.1.01.03 | Cuotas extraordinarias | I | A | USDT | Membresia | Cuotas especiales aprobadas en Asamblea. |
| 4.1.02.00 | Aportes de asociados | I | A | Mixta | General | Aportes voluntarios o acordados de los agremiados. |
| 4.1.03.00 | Reintegros y recuperaciones | I | A | Mixta | General | Reintegros de gastos y recuperación de fondos. |
| 4.2.00.00 | INGRESOS POR ACTIVIDADES DE AUTOGESTIÓN | I | A | Mixta | NA | Ingresos de eventos y actividades propias de PROMUF (Art. 6-A y Art. 2 Estatutos). |
| 4.2.01.00 | Eventos propios de PROMUF | I | A | Mixta | Autogestion | Eventos organizados o producidos por el gremio. |
| 4.2.01.01 | Taquilla y entradas | I | A | Mixta | Autogestion | Venta de entradas a eventos propios. |
| 4.2.01.02 | Patrocinios de eventos | I | A | Mixta | Autogestion | Patrocinios de empresas para eventos propios. |
| 4.2.01.03 | Alquiler de espacios en eventos | I | A | Mixta | Autogestion | Venta de stands, espacios publicitarios o mesas. |
| 4.2.01.04 | Servicios de producción y sonido | I | A | Mixta | Autogestion | Producción, sonido e iluminación a terceros. |
| 4.2.02.00 | Academia PROMUF y formación | I | A | Mixta | Autogestion | Talleres, cursos y certificaciones formativas (Art. 2.d Estatutos). |
| 4.2.02.01 | Inscripciones a talleres y cursos | I | A | Mixta | Autogestion | Inscripciones a la Academia PROMUF. |
| 4.2.02.02 | Certificaciones y constancias | I | A | Mixta | Autogestion | Emisión de certificados de formación. |
| 4.2.03.00 | Avales y sellos de certificación | I | A | Mixta | Autogestion | Certificaciones del Comité Técnico (Sello de Calidad PROMUF). |
| 4.2.03.01 | Sello de Calidad PROMUF | I | A | USD | Autogestion | Emisión del Sello de Calidad (Art. 6 Reglamento Comité Técnico). |
| 4.2.03.02 | Certificaciones de idoneidad | I | A | USD | Autogestion | Evaluación y certificación de músicos, agrupaciones y staff. |
| 4.2.03.03 | Avales gremiales | I | A | USD | Autogestion | Aval institucional a agrupaciones y directorio comercial (Art. 2.c Estatutos). |
| 4.2.04.00 | Publicidad y marketing | I | A | Mixta | Autogestion | Publicidad en canales del gremio (Instagram, Telegram, web, eventos). |
| 4.2.05.00 | Comercialización de materiales e instrumentos | I | A | Mixta | Autogestion | Venta de libros, discos, materiales e instrumentos (Art. 2 Estatutos). |
| 4.3.00.00 | DONACIONES Y SUBSIDIOS | I | A | Mixta | NA | Donaciones y subsidios recibidos (Art. 5 Estatutos). |
| 4.3.01.00 | Donaciones de personas naturales | I | A | Mixta | General | Donaciones de personas naturales. |
| 4.3.02.00 | Donaciones de personas jurídicas | I | A | Mixta | General | Donaciones de empresas y organizaciones privadas. |
| 4.3.03.00 | Donaciones de entes públicos | I | A | Mixta | General | Donaciones de alcaldías, gobernación, ministerios e instituciones públicas. |
| 4.3.04.00 | Subsidios y patrocinios institucionales | I | A | Mixta | General | Subsidios recibidos de organismos públicos o privados. |
| 4.3.05.00 | Donaciones en especie | I | A | Mixta | General | Donaciones de bienes o servicios valorizadas. |
| 4.4.00.00 | INGRESOS FINANCIEROS | I | A | Mixta | NA | Rendimientos y ganancias financieras. |
| 4.4.01.00 | Intereses bancarios | I | A | Mixta | General | Intereses generados por cuentas y depósitos. |
| 4.4.02.00 | Diferencias de cambio favorables | I | A | Mixta | General | Ganancias por variación del tipo de cambio. |
| 4.4.03.00 | Ganancia por revalorización de activos multimoneda | I | A | Mixta | General | Revalorización de activos en divisas/crypto. |
| 4.5.00.00 | OTROS INGRESOS | I | A | Mixta | NA | Otros ingresos no operativos. |
| 4.5.01.00 | Recuperación de cuentas incobrables | I | A | Mixta | General | Cobros de cuotas previamente incobrables. |
| 4.5.02.00 | Venta de activos | I | A | Mixta | General | Ingresos por venta de activos fijos. |
| 4.5.03.00 | Indemnizaciones y reintegros por daños | I | A | Mixta | General | Pagos por daños a equipos o materiales. |

## GASTOS

| Código | Cuenta | Tipo | Nat. | Moneda | Fondo | Descripción |
|---|---|---|---|---|---|---|
| 5.0.00.00 | GASTOS | G | D | Mixta | NA | Recursos que reducen el patrimonio del gremio. |
| 5.1.00.00 | GASTOS OPERATIVOS Y ADMINISTRATIVOS | G | D | Mixta | NA | Gastos de funcionamiento ordinario de la asociación. |
| 5.1.01.00 | Honorarios y sueldos administrativos | G | D | Mixta | General | Remuneraciones del personal y asesores de la asociación. |
| 5.1.02.00 | Arrendamiento y sede | G | D | Mixta | General | Alquiler de la sede, local o salas de ensayo. |
| 5.1.03.00 | Servicios básicos | G | D | Bs | General | Agua, luz, teléfono e internet. |
| 5.1.04.00 | Materiales de oficina y papelería | G | D | Mixta | General | Papelería, tintas y útiles de oficina. |
| 5.1.05.00 | Mantenimiento de equipos e instalaciones | G | D | Mixta | General | Mantenimiento de equipos, instrumentos y sede. |
| 5.1.06.00 | Transporte y movilización | G | D | Mixta | General | Traslados y flete de equipos. |
| 5.1.07.00 | Comunicaciones y plataformas digitales | G | D | USD | General | Dominios, hosting, aplicaciones, Google Workspace, bots. |
| 5.1.08.00 | Gastos bancarios y comisiones | G | D | Mixta | General | Comisiones bancarias, IGTF y costos de plataformas de pago. |
| 5.1.09.00 | Seguros | G | D | Mixta | General | Pólizas de seguros de la asociación. |
| 5.1.10.00 | Registro, legal y notaría | G | D | Mixta | General | Protocolización, registro, notaría y asesoría legal. |
| 5.2.00.00 | GASTOS DE EVENTOS Y AUTOGESTIÓN | G | D | Mixta | NA | Gastos de eventos y actividades de autogestión (Art. 6-A). |
| 5.2.01.00 | Honorarios de músicos | G | D | Mixta | Autogestion | Honorarios de los músicos participantes (100%, se pagan primero). |
| 5.2.02.00 | Staff técnico | G | D | Mixta | Autogestion | Sonidistas, técnicos de luces, stage managers y montaje. |
| 5.2.03.00 | Producción y logística | G | D | Mixta | Autogestion | Alquiler de tarimas, sonido, iluminación y logística. |
| 5.2.04.00 | Promoción y publicidad de eventos | G | D | Mixta | Autogestion | Material gráfico, pauta y difusión de eventos. |
| 5.2.05.00 | Viáticos y dietas | G | D | Mixta | Autogestion | Alimentación y alojamiento durante eventos y giras. |
| 5.2.06.00 | Alquiler de espacios | G | D | Mixta | Autogestion | Alquiler de espacios para eventos. |
| 5.2.07.00 | Otros gastos del evento | G | D | Mixta | Autogestion | Otros costos directos del evento con factura o recibo legalizado. |
| 5.3.00.00 | GASTOS DE BIENESTAR SOCIAL | G | D | Mixta | NA | Gastos del Fondo de Salud, Emergencias y Bienestar Social (Art. 2.b Estatutos). |
| 5.3.01.00 | Cobertura médica de agremiados | G | D | Mixta | Salud | Cobertura médica inmediata de los músicos agremiados. |
| 5.3.02.00 | Cobertura médica del grupo familiar | G | D | Mixta | Salud | Cobertura médica del cónyuge, hijos y padres del agremiado. |
| 5.3.03.00 | Ayudas de emergencia | G | D | Mixta | Salud | Apoyos económicos de emergencia aprobados. |
| 5.3.04.00 | Gastos funerarios | G | D | Mixta | Salud | Apoyo en gastos funerarios de agremiados y familiares directos. |
| 5.3.05.00 | Programas de bienestar social | G | D | Mixta | General | Conciertos benéficos, orquestas infantiles e inclusión musical (Art. 17 Estatutos). |
| 5.4.00.00 | GASTOS DE FORMACIÓN | G | D | Mixta | NA | Gastos de la Academia PROMUF y capacitación (Art. 2.d Estatutos). |
| 5.4.01.00 | Honorarios de instructores | G | D | Mixta | Autogestion | Pago a facilitadores de talleres y cursos. |
| 5.4.02.00 | Materiales didácticos | G | D | Mixta | Autogestion | Materiales para talleres y cursos. |
| 5.4.03.00 | Certificación y trámites SAPI | G | D | Mixta | Autogestion | Trámites de propiedad intelectual ante el SAPI y certificaciones. |
| 5.4.04.00 | Infraestructura de formación | G | D | Mixta | Autogestion | Espacios y equipos para actividades formativas. |
| 5.5.00.00 | GASTOS FINANCIEROS | G | D | Mixta | NA | Gastos de carácter financiero. |
| 5.5.01.00 | Comisiones y cargos bancarios | G | D | Mixta | General | Comisiones de bancos, Zelle, Binance y plataformas. |
| 5.5.02.00 | Pérdidas por diferencia de cambio | G | D | Mixta | General | Pérdidas por variación del tipo de cambio. |
| 5.5.03.00 | Intereses pagados | G | D | Mixta | General | Intereses por préstamos u obligaciones. |
| 5.6.00.00 | OTROS GASTOS | G | D | Mixta | NA | Otros egresos no operativos. |
| 5.6.01.00 | Gastos de representación | G | D | Mixta | General | Atender relaciones institucionales del gremio. |
| 5.6.02.00 | Donaciones otorgadas | G | D | Mixta | General | Donaciones que realiza la asociación a otras organizaciones. |
| 5.6.03.00 | Gastos extraordinarios y pérdidas | G | D | Mixta | General | Pérdidas, robos, daños y gastos no recurrentes. |
| 5.6.04.00 | Multas y sanciones administrativas | G | D | Mixta | General | Multas de órganos públicos o administrativas. |

## CUENTAS DE ORDEN

| Código | Cuenta | Tipo | Nat. | Moneda | Fondo | Descripción |
|---|---|---|---|---|---|---|
| 6.0.00.00 | CUENTAS DE ORDEN | CO | A | Mixta | NA | Registros de control y memoria sin efecto en el patrimonio. |
| 6.1.00.00 | AVALES Y SELLOS EMITIDOS | CO | A | Mixta | NA | Control de avales y sellos entregados (Comité Técnico). |
| 6.1.01.00 | Avales gremiales otorgados | CO | A | USD | Autogestion | Registro de avales otorgados a agrupaciones. |
| 6.1.02.00 | Sellos de Calidad PROMUF emitidos | CO | A | USD | Autogestion | Registro de sellos de calidad emitidos. |
| 6.1.03.00 | Constancias de validación de suplentes | CO | A | Mixta | Autogestion | Registro de validaciones de suplentes emitidas (Art. 14 Reglamento Comité Técnico). |
| 6.2.00.00 | COMPROMISOS Y CONTRATOS | CO | A | Mixta | NA | Compromisos contractuales firmados por la asociación. |
| 6.2.01.00 | Contratos de eventos firmados | CO | A | Mixta | Autogestion | Contratos de presentaciones y eventos. |
| 6.2.02.00 | Convenios y alianzas | CO | A | Mixta | General | Convenios con instituciones públicas o privadas. |
| 6.3.00.00 | BIENES EN CUSTODIA Y COMODATO | CO | A | Mixta | NA | Bienes de terceros en poder de la asociación. |
| 6.3.01.00 | Bienes recibidos en comodato | CO | A | Mixta | General | Equipos recibidos en préstamo de uso. |
| 6.3.02.00 | Documentación bajo custodia | CO | A | Mixta | General | Actas, libros y documentos resguardados por el Tesorero (Art. 15.b Estatutos). |

## Notas de aplicación

1. **Fondos con destinación específica (Art. 5 R.CC):** cada fondo es un subconjunto contable independiente; sus saldos no pueden destinarse a otros fines (destinos cerrados).
2. **Fondo de Ahorro (F4) y Fondo de Operaciones (F5):** son fondos independientes entre sí; cada uno tiene sus propias cuentas de disponibilidad y patrimoniales.
3. **Orden de pagos en eventos (Art. 6-A Estatutos):** 1º honorarios de músicos 100%, 2º gastos operativos con factura o recibo legalizado, 3º excedente al Fondo de Autogestión Gremial.
4. **Fondo de Salud (Art. 6.d / R.CC 5.2):** al menos 50% debe estar resguardado en moneda extranjera o USDT.
5. **Cuotas (Art. 6.c / R.CC 5.3):** indexadas a USDT; la cuota de membresía no puede superar la cuota mínima de cotización del CNP (salvo Asamblea).
6. **Transparencia (R.CC 4.1, 11, 12):** rendición de eventos en máximo 15 días hábiles (Art. 10 R.CC) y publicación en el Dashboard Público.
7. **Custodia (Art. 15.b Estatutos):** el Tesorero resguarda actas, libros y documentos; entrega bajo inventario al cesar en el cargo.
8. **Conciliación bancaria (Art. 15.e):** obligatoria cada trimestre.
