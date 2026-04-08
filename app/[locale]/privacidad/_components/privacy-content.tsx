import { Section, Container } from "@/components/craft";

export function PrivacyContent() {
  return (
    <Section className="py-16 bg-white">
      <Container className="max-w-4xl px-6">
        <div className="prose prose-slate max-w-none">
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">
            Política de Privacidad
          </h1>
          <p className="text-sm text-muted-foreground mb-10">
            <strong>Última actualización:</strong> 8 de abril de 2026
          </p>

          {/* Section 1 */}
          <h2 className="text-xl font-bold text-foreground mt-10 mb-3">
            1. Introducción
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Cabana Data (&ldquo;nosotros&rdquo;, &ldquo;nuestra empresa&rdquo; o
            &ldquo;el Prestador&rdquo;) es una consultoría especializada en datos
            que ofrece servicios de estrategia, ingeniería de datos, desarrollo de
            aplicaciones y sistemas de inteligencia artificial. Nos comprometemos a
            proteger la privacidad y los datos personales de nuestros clientes,
            colaboradores, visitantes y cualquier persona con quien interactuemos en
            el ejercicio de nuestra actividad.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Esta Política de Privacidad describe cómo recopilamos, usamos,
            almacenamos y protegemos la información personal, de conformidad con el
            Reglamento General de Protección de Datos (RGPD/GDPR), la Ley de
            Privacidad del Consumidor de California (CCPA) y las leyes de protección
            de datos aplicables en cada jurisdicción donde operamos.
          </p>

          <hr className="my-8 border-border" />

          {/* Section 2 */}
          <h2 className="text-xl font-bold text-foreground mt-10 mb-3">
            2. Responsable del Tratamiento
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <tbody>
                {[
                  ["Razón social", "Cabana Data"],
                  [
                    "Sitio web",
                    <a
                      key="web"
                      href="https://cabanadata.com"
                      className="text-primary hover:underline"
                    >
                      https://cabanadata.com
                    </a>,
                  ],
                  [
                    "Contacto de privacidad",
                    <a
                      key="email"
                      href="mailto:privacy@cabanadata.com"
                      className="text-primary hover:underline"
                    >
                      privacy@cabanadata.com
                    </a>,
                  ],
                ].map(([field, value], i) => (
                  <tr key={i} className="border border-border">
                    <td className="px-4 py-2 font-semibold bg-muted/40 w-48">
                      {field}
                    </td>
                    <td className="px-4 py-2 text-muted-foreground">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <hr className="my-8 border-border" />

          {/* Section 3 */}
          <h2 className="text-xl font-bold text-foreground mt-10 mb-3">
            3. Datos que Recopilamos
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Recopilamos las siguientes categorías de datos personales:
          </p>

          <h3 className="text-base font-semibold text-foreground mt-6 mb-2">
            3.1 Datos proporcionados directamente por el usuario
          </h3>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Nombre y apellidos</li>
            <li>Correo electrónico corporativo o personal</li>
            <li>Número de teléfono</li>
            <li>Nombre de la empresa y cargo</li>
            <li>
              Información compartida en formularios de contacto, diagnósticos (p.
              ej., <em>Ruta IA</em>) o talleres
            </li>
          </ul>

          <h3 className="text-base font-semibold text-foreground mt-6 mb-2">
            3.2 Datos recopilados automáticamente al usar nuestro sitio web
          </h3>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Dirección IP</li>
            <li>Tipo de navegador y sistema operativo</li>
            <li>Páginas visitadas y tiempo de permanencia</li>
            <li>Datos de cookies y tecnologías de rastreo similares</li>
          </ul>

          <h3 className="text-base font-semibold text-foreground mt-6 mb-2">
            3.3 Datos de clientes en el contexto de nuestros servicios
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Cuando prestamos servicios de ingeniería de datos, integración de
            sistemas o implementación de IA, podemos acceder a datos empresariales
            del cliente. En estos casos, actuamos como{" "}
            <strong>Encargado del Tratamiento</strong> y nos regimos por el acuerdo
            de procesamiento de datos (DPA) suscrito con cada cliente.
          </p>

          <hr className="my-8 border-border" />

          {/* Section 4 */}
          <h2 className="text-xl font-bold text-foreground mt-10 mb-3">
            4. Finalidades del Tratamiento
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Utilizamos los datos personales para las siguientes finalidades:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              <strong className="text-foreground">Prestación de servicios:</strong>{" "}
              Ejecutar proyectos de consultoría, arquitectura de datos, desarrollo de
              aplicaciones y sistemas de IA.
            </li>
            <li>
              <strong className="text-foreground">Comunicación comercial:</strong>{" "}
              Responder consultas, enviar propuestas y dar seguimiento a proyectos.
            </li>
            <li>
              <strong className="text-foreground">Marketing y contenido:</strong>{" "}
              Enviar información relevante sobre nuestros servicios, siempre con el
              consentimiento previo del interesado.
            </li>
            <li>
              <strong className="text-foreground">
                Diagnósticos y evaluaciones:
              </strong>{" "}
              Procesar los resultados del diagnóstico <em>Ruta IA</em> y otras
              evaluaciones técnicas.
            </li>
            <li>
              <strong className="text-foreground">Mejora del sitio web:</strong>{" "}
              Analizar el uso de nuestro sitio para mejorar la experiencia del
              usuario.
            </li>
            <li>
              <strong className="text-foreground">Cumplimiento legal:</strong>{" "}
              Cumplir con obligaciones fiscales, contractuales y regulatorias.
            </li>
          </ul>

          <hr className="my-8 border-border" />

          {/* Section 5 */}
          <h2 className="text-xl font-bold text-foreground mt-10 mb-3">
            5. Base Legal del Tratamiento
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Procesamos datos personales bajo las siguientes bases legales:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-muted/60">
                  <th className="border border-border px-4 py-2 text-left font-semibold text-foreground">
                    Base Legal
                  </th>
                  <th className="border border-border px-4 py-2 text-left font-semibold text-foreground">
                    Ejemplos de uso
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Ejecución de un contrato", "Prestación de servicios contratados"],
                  ["Consentimiento", "Envío de comunicaciones de marketing"],
                  [
                    "Interés legítimo",
                    "Mejora de servicios y seguridad del sitio",
                  ],
                  [
                    "Obligación legal",
                    "Cumplimiento de normativas fiscales o regulatorias",
                  ],
                ].map(([base, example], i) => (
                  <tr key={i} className="border border-border">
                    <td className="px-4 py-2 font-medium text-foreground w-64">
                      {base}
                    </td>
                    <td className="px-4 py-2 text-muted-foreground">{example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <hr className="my-8 border-border" />

          {/* Section 6 */}
          <h2 className="text-xl font-bold text-foreground mt-10 mb-3">
            6. Transferencias Internacionales de Datos
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Cabana Data utiliza infraestructura basada en{" "}
            <strong>Google Cloud Platform (GCP)</strong>, incluyendo{" "}
            <strong>BigQuery</strong> y <strong>Dataform</strong>. Google LLC puede
            procesar datos en servidores ubicados fuera de tu país de residencia.
            Estas transferencias se realizan bajo mecanismos legales adecuados, como
            las Cláusulas Contractuales Tipo aprobadas por la Comisión Europea o el
            Marco de Privacidad de Datos UE-EE.UU.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-3">
            En el contexto de proyectos cliente, cualquier transferencia
            internacional de datos se documenta y acuerda explícitamente en el
            contrato de servicios correspondiente.
          </p>

          <hr className="my-8 border-border" />

          {/* Section 7 */}
          <h2 className="text-xl font-bold text-foreground mt-10 mb-3">
            7. Plazos de Conservación
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-muted/60">
                  <th className="border border-border px-4 py-2 text-left font-semibold text-foreground">
                    Tipo de dato
                  </th>
                  <th className="border border-border px-4 py-2 text-left font-semibold text-foreground">
                    Plazo de conservación
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Datos de contacto y comunicaciones",
                    "3 años desde el último contacto",
                  ],
                  [
                    "Datos contractuales y de facturación",
                    "5-7 años (según legislación fiscal aplicable)",
                  ],
                  ["Datos de navegación y cookies", "Hasta 13 meses"],
                  [
                    "Datos de diagnósticos y proyectos",
                    "Según lo acordado en el contrato de servicios",
                  ],
                ].map(([tipo, plazo], i) => (
                  <tr key={i} className="border border-border">
                    <td className="px-4 py-2 text-foreground w-72">{tipo}</td>
                    <td className="px-4 py-2 text-muted-foreground">{plazo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Una vez vencido el plazo, los datos se eliminan o anonimizan de forma
            segura.
          </p>

          <hr className="my-8 border-border" />

          {/* Section 8 */}
          <h2 className="text-xl font-bold text-foreground mt-10 mb-3">
            8. Cookies y Tecnologías de Rastreo
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Nuestro sitio web utiliza cookies propias y de terceros para:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>
              Garantizar el correcto funcionamiento del sitio (cookies esenciales)
            </li>
            <li>
              Analizar el tráfico y comportamiento de usuarios (cookies analíticas)
            </li>
            <li>Personalizar la experiencia (cookies de preferencias)</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Puedes gestionar o revocar tu consentimiento de cookies en cualquier
            momento a través de la configuración de tu navegador o del panel de
            preferencias de cookies disponible en nuestro sitio.
          </p>

          <hr className="my-8 border-border" />

          {/* Section 9 */}
          <h2 className="text-xl font-bold text-foreground mt-10 mb-3">
            9. Compartición de Datos con Terceros
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            No vendemos ni alquilamos datos personales a terceros. Podemos compartir
            datos con:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              <strong className="text-foreground">
                Proveedores de tecnología:
              </strong>{" "}
              Google Cloud Platform, herramientas de analítica y plataformas de
              desarrollo utilizadas en la prestación de servicios.
            </li>
            <li>
              <strong className="text-foreground">Partners certificados:</strong>{" "}
              Socios tecnológicos vinculados contractualmente al cumplimiento de esta
              política.
            </li>
            <li>
              <strong className="text-foreground">
                Autoridades competentes:
              </strong>{" "}
              Cuando así lo exija la ley o una orden judicial.
            </li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-3">
            Todos los terceros con acceso a datos personales están obligados
            contractualmente a mantener niveles de seguridad y confidencialidad
            equivalentes a los nuestros.
          </p>

          <hr className="my-8 border-border" />

          {/* Section 10 */}
          <h2 className="text-xl font-bold text-foreground mt-10 mb-3">
            10. Seguridad de los Datos
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Implementamos medidas técnicas y organizativas apropiadas para proteger
            los datos personales, incluyendo:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Cifrado de datos en tránsito y en reposo</li>
            <li>Control de acceso basado en roles (RBAC)</li>
            <li>Auditorías de acceso y trazabilidad de operaciones</li>
            <li>Evaluaciones de seguridad y pruebas de vulnerabilidad periódicas</li>
          </ul>
        </div>
      </Container>
    </Section>
  );
}
