import type { MDXComponents } from 'mdx/types'
import { cn } from './components/craft'

const components: MDXComponents = {
  // Post pages already render the post title as <h1> in the hero section
  // (app/[locale]/posts/[slug]/page.tsx). A leading "# ..." in MDX body
  // content must not also become an <h1> — demote to <h2> so each page
  // keeps exactly one <h1>.
  h1: ({ children }) => (
    <h2 className={cn('text-3xl font-semibold pb-4 pt-8')}>{children}</h2>
  ),
  // h2: ({ children }) => (
  //   <h2 className={cn('text-3xl font-semibold pb-4 pt-8 max-w-lg')}>{children}</h2>
  // ),
  // h3: ({ children }) => (
  //   <h3 className={cn('font-bold text-2xl pb-2 pt-4')}>{children}</h3>
  // ),
  // p: ({ children }) => (
  //   <p className={cn('pb-2 text-base text-justify')}>{children}</p>
  // ),
  // hr: ({ children }) => (
  //   <hr className={cn('mb-6 mt-4')}>{children}</hr>
  // ),
}

export function useMDXComponents(): MDXComponents {
  return components
}