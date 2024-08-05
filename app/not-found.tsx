export default function NotFound() {
  return (
    <div className=" py-40 px-20">
      <dl>
        <dt className="text-3xl text-center font-bold mb-6">
          ページが見つかりませんでした
        </dt>
        <dd className="text-lg text-center">
          あなたがアクセスしようとしたページは存在しません。
          <br />
          URLを再度ご確認ください。
        </dd>
      </dl>
    </div>
  );
}
