type Props = {
  title: string;
  sub: string;
};

export default function Hero({ title, sub }: Props) {
  return (
    <div className="bg-no-repeat w-full bg-center  py-8">
      <h1 className="text-3xl leading-relaxed font-medium text-center py-10 text-neutral-800">
        {title}
        <br />
        {sub}
      </h1>
    </div>
  );
}
