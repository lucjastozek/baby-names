import names from "./babyNamesData";
import Name from "./Name";
import "./styles.css";

interface NameProps {
  id: number;
  name: string;
  sex: "f" | "m";
}

function App(): JSX.Element {
  function compareFn(a: NameProps, b: NameProps) {
    if (a.name < b.name) {
      return -1;
    } else {
      return 1;
    }
  }

  return (
    <div className="name-container">
      {names.sort(compareFn).map((data: NameProps, index: number) => (
        <Name name={data.name} id={data.id} sex={data.sex} key={index} />
      ))}
    </div>
  );
}

export default App;
