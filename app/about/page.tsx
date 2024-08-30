import ContactForm from "@/components/ContactForm";

export default function Page() {
  return (
    <div className="">
      <p className="text-center text-base mb-12">
        内橋 亮人 / Ryoto Uchihashi
        <br />
        明治大学大学院修士2年在学中。インタラクションデザインを専門に研究を行っている。
      </p>
      <div className="flex space-x-20">
        <h3 className="text-2xl">Education</h3>
        <ul className="">
          <li className="pb-6">
            <strong>明治大学 大学院</strong>
            <p>
              2023.03 - 現在 / 先端数理科学研究科 先端メディアサイエンス専攻
              渡邊恵太研究室
            </p>
          </li>
          <li>
            <strong>明治大学</strong>
            <p>2019.04 - 2023.03 / 総合数理学部 先端メディアサイエンス学科</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
