import type { PropsWithChildren } from "react";

type FooterProps = {} & PropsWithChildren;

export default function Footer({ children }: FooterProps) {
  return (
    <footer className="w-full bg-brand relative z-10 shadow-xl shadow-gray-200 py-24 px-6">
      <div className="w-full max-w-4xl mx-auto">
        <ul>
          <li className="text-white text-2xl font-bold list-none">
            Link di prova
          </li>
          <li className="text-blue-200 mt-2">Altro link</li>
        </ul>
      </div>
    </footer>
  );
}
