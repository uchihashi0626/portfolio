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
    <div className="grid lg:grid-cols-3 py-4 gap-4 mx-36">
      {data.contents.map((blog) => (
        <div className="flex flex-col h-full" key={blog.id}>
          <Link href={`blog/${blog.id}`}>
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>{blog.title}</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
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
