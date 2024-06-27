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

export default async function Home() {
  const data = await client.get({
    endpoint: "portfolio",
  });

  console.log(data); // デバッグ用に追加

  return (
    <div>
      <h1 className="text-4xl text-center py-24 text-b text-blue-700">
        Hi, I'm Ryoto.
        <br />
        I'm majoring in HCI at Meiji Univ.
      </h1>
      <div className="grid lg:grid-cols-3 px-4 py-4 gap-4 mx-36">
        {data.contents.map((blog) => {
          // bodyの中のimgタグをパースして画像URLを抽出
          const parsedBody = parse(blog.body);
          let imgUrl = "";
          if (Array.isArray(parsedBody)) {
            parsedBody.forEach((node) => {
              if (
                node.type === "figure" &&
                node.props.children &&
                Array.isArray(node.props.children)
              ) {
                node.props.children.forEach((child) => {
                  if (child.type === "img") {
                    imgUrl = child.props.src;
                  }
                });
              }
            });
          }

          return (
            <div className="flex flex-col h-full" key={blog.id}>
              <Link href={`blog/${blog.id}`}>
                <Card className="flex flex-col h-full min-h-[300px] hover:shadow-lg">
                  <CardHeader>
                    {imgUrl ? (
                      <Image
                        src={imgUrl}
                        width={300}
                        height={200}
                        alt="サムネイル画像"
                      />
                    ) : (
                      <p>画像が見つかりません</p>
                    )}
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-2xl">{blog.title}</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <p>Card Footer</p>
                  </CardFooter>
                </Card>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
