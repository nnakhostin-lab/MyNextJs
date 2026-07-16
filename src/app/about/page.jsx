import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1>this is About page</h1>
      <Link href="/product"> go to product</Link>
    </div> 
  );
}
