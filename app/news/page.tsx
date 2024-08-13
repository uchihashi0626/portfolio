import React from "react";
import { getNewsList } from "@/lib/microcms";
import NewsList from "@/components/NewsList";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import Pagination from "@/components/Pagination";
import SearchField from "@/components/SearchField";

export default async function Page() {
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });

  //   return <div>{JSON.stringify(news)}</div>;
  return (
    <div>
      <SearchField />
      <NewsList news={news} />
      <Pagination totalCount={totalCount} />
    </div>
  );
}
