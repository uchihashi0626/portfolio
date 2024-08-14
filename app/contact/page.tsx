import ContactForm from "@/components/ContactForm";

export default function Page() {
  return (
    <div className="">
      <p className="text-center text-base mb-12">
        ご質問、ご相談は下記のフォームよりお問い合わせください。
        <br />
        内容確認後、担当者より通常3営業日以内にご連絡いたします。
      </p>
      <div className="flex justify-center">
        <ContactForm />
      </div>
    </div>
  );
}
