import { useState } from "react";
import {BsSearch} from 'react-icons/bs'
const Input = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <div className="flex w-full flex-row gap-2">
      <input
        name="search"
        id="search"
        className="outline-none ring-0 border border-black px-2 py-1 grow flex flex-col rounded-md"
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            window.location.href = `/news?q=${search}`;
          }
        }}
      />
      <a
        href={`/news?q=${search}`}
        className={
          typeof search !== "undefined" && search.length > 0
            ? "bg-black text-white p-1 rounded-full aspect-square w-9 flex items-center justify-center"
            : "hidden"
        }
      >
        <BsSearch client:load/>
      </a>
    </div>
  );
};

export default Input;
