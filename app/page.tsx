import ButtonLink from "@/components/ui/ButtonLink";
import NewsList from "@/components/NewsList";
import Hero from "@/components/Hero";
import ThreeModel from "@/components/ThreeModel";
import { getNewsList } from "@/lib/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";

export default async function Home() {
  const data = await getNewsList({ limit: TOP_NEWS_LIMIT });
  //const sliceData_tutorial = data_tutorial.contents.slice(0, 2);
  //const sliceData_tutorial: News = [];

  return (
    <div>
      {/* <div className="bg-[url('/img-mv.jpg')] w-full text-white py-20">
        <h1 className="text-4xl font-bold text-center py-24 text-b text-white">
          Hi, I'm Ryoto.
          <br />
          I'm majoring in HCI at Meiji Univ.
        </h1>
      </div> */}
      <Hero title="Hi, I'm Ryoto." sub="I'm majoring in HCI at Meiji Univ." />

      <section className="flex justify-center mt-[-30px] ">
        <div className="bg-neutral-50 p-12 rounded-lg pb-24 relative w-[840px]">
          <h2 className="text-2xl">News</h2>
          <NewsList news={data.contents} />
          <div className="absolute bottom-8  md:right-12">
            <ButtonLink href="/news">もっとみる 　→</ButtonLink>
          </div>
        </div>
      </section>
      <div className="h-[500px] w-full flex justify-center">
        <ThreeModel />
      </div>
    </div>
  );
}
