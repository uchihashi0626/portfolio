export default async function fetchComponent() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const posts = await res.json();
  return (
    <div>
      {posts.map((post: { id: number; title: string }) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
        </div>
      ))}
    </div>
  );
}
