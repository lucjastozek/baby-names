import names from "./babyNamesData";
import NameBlock from "./Name";
import "./styles.css";
import { useState } from "react";
import SearchBar from "./SearchBar";
import Favourites from "./Favourites";

interface NameProps {
  id: number;
  name: string;
  sex: "f" | "m";
}

function App(): JSX.Element {
  const [inpVal, setInpVal] = useState("");
  const [favourites, setFavourites] = useState<NameProps[]>([]);
  const [sex, setSex] = useState<"" | "f" | "m">("");

  function compareFn(a: NameProps, b: NameProps) {
    if (a.name < b.name) {
      return -1;
    } else {
      return 1;
    }
  }

  return (
    <>
      <div className="top-bar">
        <SearchBar inpVal={inpVal} setInpVal={setInpVal} />
        <button onClick={() => setSex("")}>All</button>
        <button onClick={() => setSex("f")}>F</button>
        <button onClick={() => setSex("m")}>M</button>
      </div>
      <p>Favourites: </p>
      {favourites.length > 0 ? (
        <Favourites favourites={favourites} setFavourites={setFavourites} />
      ) : (
        <p>Click a name to add it to favourites</p>
      )}

      <div className="name-container">
        {names
          .sort(compareFn)
          .filter(
            (data: NameProps) =>
              data.name.toLowerCase().includes(inpVal.toLowerCase()) &&
              !favourites.includes(data) &&
              data.sex.includes(sex)
          )
          .map((data: NameProps, index: number) => (
            <NameBlock
              name={data}
              key={index}
              favourites={favourites}
              setFavourites={setFavourites}
            />
          ))}
      </div>
    </>
  );
}

export default App;
