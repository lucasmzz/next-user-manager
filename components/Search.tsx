import { NextComponentType, NextPageContext } from "next";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

interface Props {
  term: string;
  filterFavourites: boolean;
  onSearchTermChange: (term: string) => void;
  onFilterFavouritesChange: (status: boolean) => void;
}

const Search: NextComponentType<NextPageContext, {}, Props> = ({
  term,
  filterFavourites,
  onSearchTermChange,
  onFilterFavouritesChange,
}) => {
  const handleFavouritesFilterChange = () => {
    onFilterFavouritesChange(!filterFavourites);
  };

  return (
    <div className="bg-slate-200 p-5 rounded-md flex text-center">
      <input
        className="w-full px-5 py-3"
        type="text"
        placeholder="Search users"
        value={term}
        onChange={(e) => onSearchTermChange(e.target.value)}
      />
      <div className="flex items-center pl-3 text-2xl">
        <span>
          <a
            className={`cursor-pointer ${
              filterFavourites && "text-yellow-500"
            }`}
            onClick={() => handleFavouritesFilterChange()}
          >
            <i>{filterFavourites ? <AiFillStar /> : <AiOutlineStar />}</i>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Search;
