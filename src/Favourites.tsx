interface NameProps {
  id: number;
  name: string;
  sex: "f" | "m";
}

interface FavProps {
  favourites: NameProps[];
  setFavourites: React.Dispatch<React.SetStateAction<NameProps[]>>;
}

function Favourites({ favourites, setFavourites }: FavProps): JSX.Element {
  return (
    <div className="fav-container">
      {favourites.map((data: NameProps, index: number) => (
        <p
          className={data.sex}
          key="{index}"
          onClick={() =>
            setFavourites(favourites.filter((name) => name !== data))
          }
        >
          {data.name}
        </p>
      ))}
    </div>
  );
}

export default Favourites;
