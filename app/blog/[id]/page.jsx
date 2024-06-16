import { client } from "@/lib/client";

export default async function BlogId(context) {
  const id = context.params.id;
  const data = await client.get({
    endpoint: "portfolio",
    contentId: id,
  });

  return (
    <main className="max-w-4xl mx-auto mt-10 px-4">
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
      <p className="text-sm text-gray-500 mb-8">{data.publishedAt}</p>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: `${data.body}` }}
      ></div>
    </main>
  );
}

export const generateStaticParams = async () => {
  const data = await client.get({ endpoint: "portfolio" });

  // `paths` を返すときは、それぞれのパスを `params` オブジェクト内で包む必要があります。
  const paths = data.contents.map((content) => {
    return { params: { id: content.id } }; // ここで `id` をキーとするオブジェクトを作成
  });

  return paths; // 単純な配列として `paths` を返します
};

// import NotFound from "@/app/not-found";

// interface TBlog {
//   id: string;
//   title: string;
//   content: string;
// }

// export const dynamicParams = false;

// export async function generateStaticParams() {
//   const res = await fetch("http://localhost:3000/api/blog/");

//   const blogData = await res.json();

//   console.log(blogData);

//   return blogData.map((blog: TBlog) => ({
//     id: blog.id,
//   }));
// }

// const getBlogArticle = async (id: string) => {
//   const res = await fetch("http://localhost:3000/api/blog/${id}");

//   const blogArticle = await res.json();

//   // if(res.status === 404){
//   //   return "NotFound"
//   // }

//   return blogArticle;
// };

// const BlogArticlePage = async ({ params }: { params: { id: string } }) => {
//   const blogArtcile = await getBlogArticle(params.id);

//   // if(blogArtcile === "NotFound"){
//   //   return <NotFound />
//   // }

//   return (
//     <div className="container mx-auto py-5">
//       <h2 className="text-[50px]">{blogArtcile.title}</h2>
//       <p>{blogArtcile.content}</p>
//     </div>
//   );
// };

// export default BlogArticlePage;
