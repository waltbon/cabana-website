export function JsonLd({ schemas }: { schemas: Record<string, unknown>[] }) {
  return schemas.map((schema) => (
    <script
      key={String(schema["@type"])}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  ));
}
