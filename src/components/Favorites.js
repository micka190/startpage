import RedditLogo from '../images/websites/reddit.svg';
import YouTubeLogo from '../images/websites/youtube.png';
import ProtonMailLogo from '../images/websites/protonmail.png';
import GitHubLogo from '../images/websites/github.png';
import { TileData, BigTile, SmallTile } from './Tiles';

const Favorites = () => {
  const reddit = new TileData(
    'Reddit',
    'https://www.reddit.com/',
    RedditLogo,
    'bg-red-reddit'
  );
  const youtube = new TileData(
    'YouTube',
    'https://www.youtube.com/feed/subscriptions',
    YouTubeLogo,
    'bg-red-youtube'
  );
  const protonmail = new TileData(
    'ProtonMail',
    'https://beta.protonmail.com/',
    ProtonMailLogo,
    'bg-gray-proton'
  );
  const github = new TileData(
    'GitHub',
    'https://github.com/',
    GitHubLogo,
    'bg-gray-github'
  );

  return (
    <div className="flex gap-3 bg-white rounded shadow p-3">
      <BigTile data={reddit} />
      <BigTile data={youtube} />
      <div className="flex flex-col gap-3">
        <SmallTile data={protonmail} />
        <SmallTile data={github} />
      </div>
    </div>
  );
};
export default Favorites;
