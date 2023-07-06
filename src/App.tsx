import names from "./babyNamesData";
import Name from "./Name";
import "./styles.css";
import { useState } from "react";
import SearchBar from "./SearchBar";

interface NameProps {
  id: number;
  name: string;
  sex: "f" | "m";
}

function App(): JSX.Element {
  const [inpVal, setInpVal] = useState("");

  function compareFn(a: NameProps, b: NameProps) {
    if (a.name < b.name) {
      return -1;
    } else {
      return 1;
    }
  }

  return (
    <>
      <SearchBar inpVal={inpVal} setInpVal={setInpVal} />
      <div className="name-container">
        {names
          .sort(compareFn)
          .filter((data: NameProps) =>
            data.name.toLowerCase().includes(inpVal.toLowerCase())
          )
          .map((data: NameProps, index: number) => (
            <Name name={data.name} id={data.id} sex={data.sex} key={index} />
          ))}
      </div>
    </>
  );
}

export default App;
