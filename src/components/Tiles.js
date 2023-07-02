import Lemmy from "../images/lemmy.png";
import YouTube from "../images/youtube.png";
import MyAnimeList from "../images/myanimelist.png";
import ProtonMail from "../images/protonmail.png";
import ProtonDrive from "../images/protondrive.png";
import ProtonCalendar from "../images/protoncalendar.png";
import GitHub from "../images/github.png";

const Tile = ({ link, gradient, children, height = "h-96", width = "w-96" }) => {
  return (
    <a
      className={`
        rounded-md shadow-md 
        ${width} ${height} 
        p-5 flex items-center justify-center 
        bg-gradient-to-tl ${gradient}
        `}
      href={link}
    >
      {children}
    </a>
  );
};

const LemmyTile = () => (
  <Tile gradient={"to-green-600 from-emerald-600"} link="https://www.lemmy.world/">
    <img src={Lemmy} alt="Lemmy logo" />
  </Tile>
)

const YouTubeTile = () => (
  <Tile gradient={"to-red-500 via-red-600 from-red-700"} link="https://www.youtube.com/feed/subscriptions">
    <img src={YouTube} alt="YouTube logo" />
  </Tile>
);

const MyAnimeListTile = ({ username = "" }) => (
  <Tile gradient={"to-blue-500 from-blue-600"} link={`https://myanimelist.net/animelist/${username}?status=1`}>
    <img src={MyAnimeList} alt="MyAnimeList logo" />
  </Tile>
);

const ProtonMailTile = () => (
  <Tile
    link="https://mail.proton.me/"
    gradient={"to-blue-600 via-indigo-600 from-purple-700"}
    height="h-48"
    width="w-full"
  >
    <img src={ProtonMail} className="w-96" />
  </Tile>
);

const ProtonDriveTile = () => (
  <Tile gradient={"to-rose-500 via-purple-600 from-blue-500"} height="h-full" link="https://drive.proton.me/">
    <img src={ProtonDrive} />
  </Tile>
);

const ProtonCalendarTile = () => (
  <Tile gradient={"to-teal-600 from-blue-500"} height="h-full" link="https://calendar.proton.me/">
    <img src={ProtonCalendar} />
  </Tile>
);

const GitHubTile = () => (
  <Tile gradient={"to-slate-900 from-black"} height="h-full" link="https://github.com/">
    <img src={GitHub} />
  </Tile>
);

export {
  Tile,
  LemmyTile,
  YouTubeTile,
  MyAnimeListTile,
  ProtonMailTile,
  ProtonDriveTile,
  ProtonCalendarTile,
  GitHubTile,
};
