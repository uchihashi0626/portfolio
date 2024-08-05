"use client";
import { Button } from "@/components/ui/button";
import { client } from "@/lib/client";
import Link from "next/link";
import { PortfolioItem } from "@/types/portfolio";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import parse from "html-react-parser";
import ButtonLink from "@/components/ui/ButtonLink";
import { News } from "@/lib/microcms";
import NewsList from "@/components/NewsList";
import Hero from "@/components/Hero";
import ThreeModel from "@/components/ThreeModel";

type Category = {
  name: string;
};

const data_tutorial: { contents: News[] } = {
  contents: [
    {
      id: "1",
      title: "渋谷にオフィスを移転しました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/05/19",
      createdAt: "2023/05/19",
    },
    {
      id: "2",
      title: "当社CEOが業界リーダーTOP30に選出されました",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/05/19",
      createdAt: "2023/05/19",
    },
    {
      id: "3",
      title: "テストの記事です",
      category: {
        name: "更新情報",
      },
      publishedAt: "2023/04/19",
      createdAt: "2023/04/19",
    },
  ],
};

export default async function Home() {
  // const data = await client.get({
  //   endpoint: "portfolio",
  // });
  //console.log(data);

  const sliceData_tutorial = data_tutorial.contents.slice(0, 2);
  //const sliceData_tutorial: News = [];

  return (
    <div>
      {/* <div className="bg-[url('/img-mv.jpg')] w-full text-white py-20">
        <h1 className="text-4xl font-bold text-center py-24 text-b text-white">
          Hi, I'm Ryoto.
          <br />
          I'm majoring in HCI at Meiji Univ.
        </h1>
      </div> */}
      <Hero title="Hi, I'm Ryoto." sub="I'm majoring in HCI at Meiji Univ." />

      <section className="flex justify-center mt-[-30px] ">
        <div className="bg-neutral-50 p-12 rounded-lg pb-24 relative w-[840px]">
          <h2 className="text-2xl">News</h2>
          <NewsList news={sliceData_tutorial} />
          <div className="absolute bottom-8  md:right-12">
            <ButtonLink href="/news">もっとみる 　→</ButtonLink>
          </div>
        </div>
      </section>
      <div className="h-[500px] w-1/2">
        <ThreeModel />
      </div>
      {/* <div className="grid lg:grid-cols-3 px-4 py-4 gap-4 mx-36">
        {data.contents.map((blog) => (
          <div className="flex flex-col h-full" key={blog.id}>
            <Link href={`blog/${blog.id}`}>
              <Card className="flex flex-col h-full max-h-[400px] hover:shadow-lg">
                <CardHeader>
                  <Image
                    src={blog.img}
                    width={300}
                    height={200}
                    alt="サムネイル画像"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-2xl ">{blog.title}</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            </Link>
          </div>
        ))}
      </div> */}
    </div>
  );
}

// export const generateStaticParams = async () => {
//   const data = await client.get({ endpoint: "portfolio" });
//   console.log(data);
//   return {
//     props: {
//       portfolio: data.contents,
//     },
//   };
// };

// export default function Home({ portfolio }) {
//   return (
//     <div>
//       {portfolio.map((portfolio) => (
//         <li key={portfolio.id}>
//           <Link href={`portfolio/${portfolio.id}`}>
//             <a href="">{portfolio.title}</a>
//           </Link>
//         </li>
//       ))}
//     </div>
//   );
//   console.log("テスト");
// }
