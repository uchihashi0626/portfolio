import type { Category } from "@/lib/microcms";
import styles from "./index.module.css";

type Props = {
  category: Category;
};
export default function Category({ category }: Props) {
  return (
    <span className="bg-neutral-200 py-2 px-2 rounded">{category.name}</span>
  );
}
