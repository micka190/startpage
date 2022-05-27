import ComicLink from "./ComicLink";

const ComicsSection = ({ comics = [] }) => {
  const onOpenAllClicked = () => {
    for (const comic of comics) {
      window.open(comic.link, "_blank");
    }
  };

  return (
    <div className="p-3 space-y-10">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl text-slate-600 dark:text-slate-400">Comics</h1>
        <button
          className="px-3 py-2 font-semibold rounded text-white bg-blue-600 hover:bg-blue-700"
          onClick={onOpenAllClicked}
        >
          Open all
        </button>
      </div>
      <div className="w-full grid grid-cols-4 gap-3 font-semibold uppercase text-center rounded-md">
        {comics.map((comic, index) => (
          <ComicLink key={index} link={comic.link}>
            {comic.name}
          </ComicLink>
        ))}
      </div>
    </div>
  );
};

export default ComicsSection;
