interface Props {
  title: string;
  decs: string;
}

function TitlePage({ title, decs }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p>
       {decs}
      </p>
    </div>
  );
}

export default TitlePage;
