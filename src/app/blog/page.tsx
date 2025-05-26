import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'
import { Post } from 'contentlayer/generated'

export default function BlogPage() {
  const posts = allPosts.sort(
    (a: Post, b: Post) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.url} className="mb-4">
            <Link href={post.url} className="text-blue-600 hover:underline text-xl font-semibold">
              {post.title}
            </Link>
            <p className="text-gray-600">{post.description}</p>
            <time className="text-gray-400 text-sm">{new Date(post.date).toLocaleDateString()}</time>
          </li>
        ))}
      </ul>
    </main>
  )
}
