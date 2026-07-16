import Link from "next/link"



export  default async function blog(){
  let resp = await fetch("https://jsonplaceholder.typicode.com/posts")

  if (!resp.ok) 
  return(
    <div>
      دریافت نشد.
    </div>
  )
  let posts = await resp.json()
  return(
    <div>
      <ul>
        {
          posts.map(
            (post)=>(
              <li key={post.id}>
                <Link href={`/blog/${post.id}`}>{post.id}-- {post.title}</Link>
              </li>
            )
          )
        }
      </ul>
    </div>
  )
} 