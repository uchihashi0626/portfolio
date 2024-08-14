"use client";

import { createContactData } from "@/app/_actions/contact";
import { useFormState } from "react-dom";

const initialState = {
  status: "",
  message: "",
};

export default function ContactForm() {
  const [state, formAction] = useFormState(createContactData, initialState);
  console.log(state);
  if (state.status === "success") {
    return (
      <p className="">
        お問い合わせいただき、ありがとうございます。
        <br />
        お返事まで今しばらくお待ちください。
      </p>
    );
  }
  return (
    <form className=" mx-auto w-full" action={formAction}>
      <div className="flex justify-start items-center w-full flex-col space-y-6">
        <div className="flex w-full space-x-12">
          <div className="flex py-2 flex-col flex-1 ">
            <label className="text-sm" htmlFor="lastname">
              姓
            </label>
            <input
              className="border p-2 rounded leading-6 w-full outline-none"
              type="text"
              id="lastname"
              name="lastname"
            />
          </div>
          <div className="flex py-2 flex-col flex-1 ">
            <label className="text-sm" htmlFor="firstname">
              名
            </label>
            <input
              className="border p-2 rounded leading-6 w-full outline-none"
              type="text"
              id="firstname"
              name="firstname"
            />
          </div>
        </div>
        <div className="flex py-2 flex-col flex-1 w-full">
          <label className="text-sm" htmlFor="company">
            会社名
          </label>
          <input
            className="border p-2 rounded leading-6 w-full outline-none"
            type="text"
            id="company"
            name="company"
          />
        </div>
        <div className="flex py-2 flex-col flex-1 w-full">
          <label className="text-sm" htmlFor="email">
            メールアドレス
          </label>
          <input
            className="border p-2 rounded leading-6 w-full outline-none"
            type="text"
            id="email"
            name="email"
          />
        </div>
        <div className="flex py-2 flex-col flex-1 w-full">
          <label className="text-sm" htmlFor="message">
            メッセージ
          </label>
          <textarea
            className="border p-2 rounded leading-6 w-full outline-none"
            id="message"
            name="message"
          />
        </div>
        <div className="flex justify-center">
          {state.status === "error" && <p className="">{state.message}</p>}
          <input
            type="submit"
            value="送信する"
            className="bg-neutral-900 text-white py-5 px-10 rounded w-[200px] hover:opacity-80"
          />
        </div>
      </div>
    </form>
  );
}
