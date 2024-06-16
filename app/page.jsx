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

export default async function Home() {
  const data = await client.get({
    endpoint: "portfolio",
  });

  return (
    <div>
      <h1>Blog</h1>
      {data.contents.map((blog) => (
        <div key={blog.id}>
          <Link href={`blog/${blog.id}`}>
            <Card>
              <CardHeader>
                <CardTitle>{blog.title}</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </Link>
        </div>
      ))}
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
