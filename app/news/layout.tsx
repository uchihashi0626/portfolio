import Sheet from "@/components/Sheet";
import Hero from "@/components/Hero";

type Props = {
  children: React.ReactNode;
};

export const revalidate = 60;

export default function NewsLayout({ children }: Props) {
  return (
    <>
      <Hero title="News" sub="ニュース" />
      <div className="flex justify-center mt-[-30px]">
        <Sheet>{children}</Sheet>
      </div>
    </>
  );
}
