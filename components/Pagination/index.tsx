import { NEWS_LIST_LIMIT } from "@/app/_constants";
import Link from "next/link";

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
};

export default function Pagination({
  totalCount,
  current = 1,
  basePath = "/news",
}: Props) {
  const pages = Array.from(
    { length: Math.ceil(totalCount / NEWS_LIST_LIMIT) },
    (_, i) => i + 1
  );
  return (
    <nav>
      <ul className="flex mt-12 space-x-4 justify-center">
        {pages.map((p) => (
          <li className="" key={p}>
            {/* <Link href={`/news/p/${p}`} className="">
              {p}
            </Link> */}
            {current !== p ? (
              <Link
                href={`${basePath}/p/${p}`}
                className="py-2 px-3 rounded hover:bg-neutral-200"
              >
                {p}
              </Link>
            ) : (
              <span className="bg-neutral-900 text-white py-2 px-3 rounded">
                {p}
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
