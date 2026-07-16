export async function generateStaticParams() {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts")
  let posts = await res.json();

  let ids= posts.map(
    (post)=>(
      {slug:post.id.toString()}
    )
  )
  
  return ids
}

export default async function postdetail({params}){
  let {slug} = await  params;
  let resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  let post = await resp.json();
  
  return(
    <div>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  )
  
}