export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
    <div className="prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-foreground prose-blockquote:border-cabana-green prose-blockquote:bg-section-light prose-blockquote:py-1 prose-blockquote:rounded-r-md prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white max-w-none">
      {children}
    </div>
  )
}