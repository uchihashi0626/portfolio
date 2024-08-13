import { notFound } from "next/navigation";
import Article from "@/components/Article";
import { getNewsDetail } from "@/lib/microcms";
import React from "react";
import ButtonLink from "@/components/ui/ButtonLink";

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    dk?: string;
  };
};

export default async function Page({ params, searchParams }: Props) {
  //   return <div>{JSON.stringify(props)}</div>;
  const data = await getNewsDetail(params.slug, {
    draftKey: searchParams.dk,
  }).catch(notFound);

  return (
    <div className="">
      <Article data={data} />
      <div className=" flex justify-center mt-12  ">
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </div>
  );
}
