interface NameProps {
  id: number;
  name: string;
  sex: string;
  key: number;
}
function Name({ id, name, sex, key }: NameProps): JSX.Element {
  return (
    <p className={sex} id="{key}">
      {name}
    </p>
  );
}

export default Name;
