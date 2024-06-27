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

export default async function Home() {
  const data = await client.get({
    endpoint: "portfolio",
  });
  //console.log(data);

  return (
    <div>
      <h1 className="text-4xl text-center py-24 text-b text-blue-700">
        Hi, I'm Ryoto.
        <br />
        I'm majoring in HCI at Meiji Univ.
      </h1>
      <div className="grid lg:grid-cols-3 px-4 py-4 gap-4 mx-36">
        {data.contents.map((blog) => (
          <div className="flex flex-col h-full" key={blog.id}>
            <Link href={`blog/${blog.id}`}>
              <Card className="flex flex-col h-full min-h-[400px] hover:shadow-lg">
                <CardHeader>
                  <Image
                    src={blog.img}
                    width={300}
                    height={200}
                    alt="サムネイル画像"
                  />
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
        ))}
      </div>
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
