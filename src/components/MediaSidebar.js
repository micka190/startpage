import CrunchyrollLogo from '../images/websites/crunchyroll.png';
import NetflixLogo from '../images/websites/netflix.png';
import FunimationLogo from '../images/websites/funimation.jpg';
import { MediaTile, TileData } from './Tiles';

const MediaSidebar = () => {
  const tiles = [
    new TileData(
      'Crunchyroll',
      'https://www.crunchyroll.com/',
      CrunchyrollLogo,
      'bg-yellow-crunchyroll'
    ),
    new TileData(
      'Netflix',
      'https://www.netflix.com/',
      NetflixLogo,
      'bg-black'
    ),
    new TileData(
      'Funimation',
      'https://www.funimation.com/shows/',
      FunimationLogo,
      'bg-purple-funimation'
    ),
  ];

  return (
    <div className="flex flex-col gap-3 p-3 rounded bg-white">
      {tiles.map((tile, index) => (
        <MediaTile data={tile} key={index} />
      ))}
    </div>
  );
};

export default MediaSidebar;
