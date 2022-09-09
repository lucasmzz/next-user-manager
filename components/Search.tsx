import { NextComponentType, NextPageContext } from "next";

interface Props {
  term: string;
  onSearchTermChange: (term: string) => void;
}

const Search: NextComponentType<NextPageContext, {}, Props> = ({
  term,
  onSearchTermChange,
}) => {
  return (
    <div className="bg-slate-200 p-5 rounded-md">
      <input
        className="w-full px-5 py-3"
        type="text"
        placeholder="Search users"
        value={term}
        onChange={(e) => onSearchTermChange(e.target.value)}
      />
    </div>
  );
};

export default Search;
