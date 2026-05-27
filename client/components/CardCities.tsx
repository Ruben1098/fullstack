import type { PropsWithChildren } from "react";

type CardProps = {
  city?: string;
  children?: string;
  isVisited?: boolean;
  url?: string;
} & PropsWithChildren;

export default function Card({ city, url, isVisited, children }: CardProps) {
  const visited = isVisited ? "✅ Visitata" : "❌ Non visitata";
  {
    return (
      <div className="bg-gray-800 text-white rounded-2xl overflow-hidden shadow-xl shadow-black/30 flex flex-col">
        <img src={url} alt={city} className="w-full h-48 object-cover" />

        <div className="p-6">
          <h2 className="font-bold text-2xl mb-2">{city}</h2>
          <p className="text-gray-300">{children}</p>
          <span>{visited}</span>
        </div>
      </div>
    );
  }
}
