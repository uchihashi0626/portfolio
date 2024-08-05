type Props = {
  children: React.ReactNode;
};

export default function Sheet({ children }: Props) {
  return (
    <div className="bg-neutral-50 p-12 rounded-lg center pb-24 relative w-[840px]">
      {children}
    </div>
  );
}
