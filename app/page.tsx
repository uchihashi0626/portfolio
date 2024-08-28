import ButtonLink from "@/components/ui/ButtonLink";
import NewsList from "@/components/NewsList";
import Hero from "@/components/Hero";
import ThreeModel from "@/components/ThreeModel";
import { getNewsList } from "@/lib/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import WorkList from "@/components/WorkList";
import { ReactTyped } from "react-typed";
export const revalidate = 60;
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
      <div>
        <Hero title="Hi, I'm Ryoto." sub="I'm majoring in HCI at Meiji Univ." />
      </div>

      <section className="flex justify-center mt-[-30px] ">
        <div className="bg-white p-12 rounded-lg pb-24 relative w-[1400px]">
          {/* <h2 className="text-2xl">Work</h2> */}
          {/* <NewsList news={data.contents} />
          <div className="absolute bottom-8  md:right-12">
            <ButtonLink href="/news">もっとみる 　→</ButtonLink>
          </div> */}
          <WorkList news={data.contents} />
        </div>
      </section>

      <div className="h-[500px] w-full flex justify-center">
        <ThreeModel />
      </div>
    </div>
  );
}
