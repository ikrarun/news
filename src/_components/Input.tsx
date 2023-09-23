import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toast, { Toaster } from "react-hot-toast";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Input = ({ data,page }: { data: string | null , page:number }) => {
  const [search, setSearch] = useState<string>(data ? data : "");
  const notify = () => {
    toast.dismiss();
    toast.error("Please input something to search", {
      position: "bottom-left",
    });
  };

  return (
    <div className="flex text-gray-800 w-full flex-row gap-2">
      <Toaster />
      <input
        name="search"
        id="search"
        className="outline-none grow placeholder:text-gray-500 ring-0 border border-gray-800 px-2 py-1 flex flex-col rounded-md"
        type="text"
        placeholder="eg. Daily"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && search.trim().length > 0) {
            window.location.href = `/news?q=${search}&page=${page}`;
          } else if(e.key === "Enter" && !(search.trim().length > 0)) {
            notify();
          }
        }}
      />
      <button
        onClick={() => {
          if (search.trim().length > 0) {
            window.location.href = `/news?q=${search}&page=${page}`;
          } else {
            notify();
          }
        }}
        className="bg-base text-white p-1 rounded-full aspect-square w-8 flex items-center justify-center"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "ffffff" }} />
      </button>
    </div>
  );
};

export default Input;
