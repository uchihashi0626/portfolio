import Image from "next/image";
import type { News } from "@/lib/microcms";
import Date from "../Date";
import Category from "../Category";
import Link from "next/link";

type Props = {
  data: News;
};

export default function Article({ data }: Props) {
  return (
    <main className="space-y-12">
      <h1 className="text-2xl font-bold">{data.title}</h1>
      <p className="">{data.description}</p>
      <div className="flex items-center space-x-12">
        <Link href={`/news/category/${data.category.id}`}>
          <Category category={data.category} />
        </Link>
        <Date date={data.publishedAt ?? data.createdAt} />
      </div>
      {data.thumbnail && (
        <Image
          src={data.thumbnail.url}
          alt=""
          className=""
          width={data.thumbnail.width}
          height={data.thumbnail.height}
        />
      )}
      <div
        className="leading-loose"
        dangerouslySetInnerHTML={{
          __html: data.content,
        }}
      />
    </main>
  );
}
