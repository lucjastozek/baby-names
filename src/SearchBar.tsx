interface SearchBarProps {
  inpVal: string;
  setInpVal: React.Dispatch<React.SetStateAction<string>>;
}
function SearchBar({ inpVal, setInpVal }: SearchBarProps): JSX.Element {
  return (
    <input
      type="text"
      value={inpVal}
      onChange={(event) => setInpVal(event.target.value)}
      placeholder="Search for a name"
    />
  );
}

export default SearchBar;
