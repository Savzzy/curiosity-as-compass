import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { Post } from 'contentlayer/generated'
import { MDXContent } from '@/components/mdx-content'

export async function generateStaticParams() {
  return allPosts.map((post: Post) => ({
    slug: post._raw.flattenedPath,
  }))
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((p: Post) => p._raw.flattenedPath === params.slug)
  if (!post) {
    notFound()
  }

  return (
    <article className="prose max-w-none p-8 mx-auto">
      <h1>{post.title}</h1>
      <time className="block mb-4">{new Date(post.date).toLocaleDateString()}</time>
      <div className="mt-8">
        <MDXContent code={post.body.code} />
      </div>
    </article>
  )
}
