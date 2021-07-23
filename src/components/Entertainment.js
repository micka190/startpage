import { LinkButton } from './Buttons';
import MediaSidebar from './MediaSidebar';
import { ShowTile, ShowTileData } from './Tiles';

const fetchMalData = async () => {
  const username = 'micka190';
  const url = `https://api.jikan.moe/v3/user/${username}/animelist/watching`;
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    const anime = data.anime
      .map(
        (a) =>
          new ShowTileData(
            a.title,
            a.url,
            a.image_url,
            a.total_episodes,
            a.watched_episodes
          )
      );
    const emptyTiles = Array(5 - (anime.length % 5)).fill(null);
    return anime.concat(emptyTiles);
  } else {
    throw response;
  }
}

const Entertainment = ({ shows }) => {
  return (
    <div className="flex gap-3">
      <div>
        <MediaSidebar />
      </div>
      <div className="flex flex-col gap-3 p-3 rounded bg-white col-span-4">
        <div className="flex justify-between">
          <h1 className="text-2xl text-gray-500">Currently watching</h1>
          <LinkButton href="https://myanimelist.net/animelist/micka190">
            Open list
          </LinkButton>
        </div>
        <div className="grid grid-cols-5 gap-3">
          {shows
            .sort((a, b) => {
              if (a === null) {
                return 1;
              } else if (b === null) {
                return -1;
              } else {
                return b.watched - a.watched
              }
            })
            .map((show, index) => (
              <ShowTile data={show} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Entertainment;
export { fetchMalData };