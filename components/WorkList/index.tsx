import React from "react";
import Image from "next/image";
import { News } from "@/lib/microcms";
import Category from "@/components/Category";
import Date from "@/components/Date";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  news: News[];
};

export default function WorkList({ news }: Props) {
  if (news.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
      {news.map((article) => (
        <li key={article.id}>
          <Card className="w-[400px] h-[400px] relative rounded-md hover:bg-blue-50 ">
            <Link href={`/news/${article.id}`} className=" ">
              <CardHeader>
                <div className="-mx-6 -mt-6 h-[200px] relative ">
                  {article.thumbnail ? (
                    <Image
                      src={article.thumbnail.url}
                      alt=""
                      className="rounded-md"
                      fill
                      objectFit="cover"
                    />
                  ) : (
                    <Image
                      className="rounded-md"
                      src="/no-image.png"
                      alt="No Image"
                      fill
                      objectFit="cover"
                    />
                  )}
                </div>
              </CardHeader>
              <CardContent className="">
                <CardTitle className="line-clamp-2 leading-normal font-medium text-xl">
                  {article.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {article.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="">
                <p className="text-right w-full absolute right-6 bottom-6">
                  くわしく見る<span className="ml-2 text-sm">→</span>
                </p>
              </CardFooter>
            </Link>
          </Card>
        </li>
      ))}
    </ul>
  );
}
