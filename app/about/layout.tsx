import Sheet from "@/components/Sheet";
import Hero from "@/components/Hero";

type Props = {
  children: React.ReactNode;
};

export const revalidate = 60;

export default function AboutLayout({ children }: Props) {
  return (
    <>
      <Hero title="" sub="About" />
      <div className="flex justify-center mt-[-30px]">{children}</div>
    </>
  );
}
