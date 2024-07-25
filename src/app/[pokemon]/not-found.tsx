import Link from 'next/link'
 
export default async function NotFound({ params }: { params: { pokemon?: string } }) {
  return (
    <div>
      <h2>Not Found: {params?.pokemon || "🛑"}</h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/blog">all posts</Link>
      </p>
    </div>
  )
}