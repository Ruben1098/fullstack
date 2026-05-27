import { useState, useEffect } from "react";

interface DemoProps {}

function handleChange(e) {
  console.log(e.target.value);
}

export default function Contatore({}: DemoProps) {
  const [count, setcount] = useState(0);

  useEffect(() => {
    console.log("Count: ", count);

    return () => {
      console.log("pulito");
    };
  }, [count]);

  return (
    <div className="flex flex-col items-center gap-4">
      <p>Il conteggio è {count}</p>
      <div className="flex gap-4">
        <button
          className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
          onClick={() => setcount(count - 1)}
        >
          Diminuisci
        </button>

        <button
          className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
          onClick={() => setcount(count + 1)}
        >
          Aumenta
        </button>
        <input
          className="border-b-2 border-black outline-none"
          type="text"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
