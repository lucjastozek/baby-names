interface NameProps {
  id: number;
  name: string;
  sex: "f" | "m";
}
interface NameBlockProps {
  name: NameProps;
  favourites: NameProps[];
  setFavourites: React.Dispatch<React.SetStateAction<NameProps[]>>;
  key: number;
}
function NameBlock({
  name,
  favourites,
  setFavourites,
}: NameBlockProps): JSX.Element {
  return (
    <p
      className={name.sex}
      id="{key}"
      onClick={() => setFavourites([...favourites, name])}
    >
      {name.name}
    </p>
  );
}

export default NameBlock;
