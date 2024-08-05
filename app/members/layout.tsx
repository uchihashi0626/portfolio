import Sheet from "@/components/Sheet";
import Hero from "@/components/Hero";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Members" sub="メンバー" />
      <div className="flex justify-center mt-[-30px]">
        <Sheet>{children}</Sheet>
      </div>
    </>
  );
}
