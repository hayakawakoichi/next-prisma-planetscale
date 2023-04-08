import { useEffect, useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  useEffect(() => {
    fetch("/api/author")
      .then((res) => res.json())
      .then(console.log);
  }, []);

  const onSubmit = () => {
    console.log("onSubmit");
    fetch("/api/author", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    })
      .then((res) => res.json())
      .then(console.log);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-6xl font-bold">PlanetScale Sample App</h1>
        <p className="mt-4 text-2xl font-light">
          This is a sample app using PlanetScale{" "}
        </p>
        <form
          className="bg-white p-6 rounded-lg shadow-md mt-4"
          onSubmit={onSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              名前
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="名前を入力してください"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              送信
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
