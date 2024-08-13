import Image from "next/image";
import { formatDate } from "@/lib/utils";

type Props = {
  date: string;
};

export default function Date({ date }: Props) {
  return <span>{formatDate(date)}</span>;
}
