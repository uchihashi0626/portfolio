import Image from "next/image";
import styles from "./index.module.css";

type Props = {
  date: string;
};

export default function Date({ date }: Props) {
  return <span>{date}</span>;
}
