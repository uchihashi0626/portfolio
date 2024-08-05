type Props = {
  title: string;
  sub: string;
};

export default function Hero({ title, sub }: Props) {
  return (
    <div className="bg-[url('/img-mv.jpg')] w-full text-white py-20">
      <h1 className="text-4xl font-bold text-center py-24 text-b text-white">
        {title}
        <br />
        {sub}
      </h1>
    </div>
  );
}
