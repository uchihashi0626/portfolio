import { getCategoryDetail, getNewsList } from "@/lib/microcms";
import NewsList from "@/components/NewsList";
import { notFound } from "next/navigation";
import Category from "@/components/Category";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import Pagination from "@/components/Pagination";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const category = await getCategoryDetail(params.id).catch(notFound);

  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    filters: `category[equals]${category.id}`,
  });

  //   return <div>{JSON.stringify(news)}</div>;
  //   return <NewsList news={news} />;
  return (
    <div>
      <p>
        <Category category={category} />
        の一覧
      </p>
      <NewsList news={news} />
      <Pagination
        totalCount={totalCount}
        basePath={`/news/category/${category.id}`}
      />
    </div>
  );
}
