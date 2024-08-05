import React from "react";
import Image from "next/image";
import { News } from "@/lib/microcms";
import Category from "@/components/Category";
import Date from "@/components/Date";
import Link from "next/link";

type Props = {
  news: News[];
};

export default function NewsList({ news }: Props) {
  if (news.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <ul>
      {news.map((article) => (
        <li key={article.id}>
          <Link
            href={`/news/${article.id}`}
            className="flex items-center gap-10 py-6"
          >
            <Image src="/no-image.png" alt="noimage" width={200} height={200} />
            <dl className="text-neutral-600">
              <dt className="text-xl font-bold">{article.title} </dt>

              <dd className="flex space-x-8 items-center mt-4">
                <Category category={article.category} />
                <Date date={article.publishedAt ?? article.createdAt} />
              </dd>
            </dl>
          </Link>
        </li>
      ))}
    </ul>
  );
}
