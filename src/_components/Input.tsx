import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Input = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <div className="flex w-full flex-row gap-2">
      <input
        name="search"
        id="search"
        className="outline-none w-10/12 ring-0 border border-black px-2 py-1 flex flex-col rounded-md"
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
        className="bg-black text-white p-1 rounded-full aspect-square w-8 flex items-center justify-center"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "ffffff" }} />
      </a>
    </div>
  );
};

export default Input;
