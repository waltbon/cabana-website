import type { MDXComponents } from 'mdx/types'
import { cn } from './components/craft'

const components: MDXComponents = {
  // h1: ({ children }) => (
  //   <h1 className={cn('font-light text-5xl pb-4 pt-8 max-w-lg')}>{children}</h1>
  // ),
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