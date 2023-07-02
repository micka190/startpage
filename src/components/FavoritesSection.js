import {
  LemmyTile,
  YouTubeTile,
  MyAnimeListTile,
  ProtonMailTile,
  ProtonCalendarTile,
  ProtonDriveTile,
  GitHubTile,
} from "./Tiles";

const FavoritesSection = ({ myAnimeListUsername = "" }) => (
  <div className="p-3 grid grid-cols-3 grid-rows-4 gap-3">
    <div className="row-span-2">
      <LemmyTile />
    </div>
    <div className="row-span-2">
      <YouTubeTile />
    </div>
    <div className="row-span-2">
      <MyAnimeListTile username={myAnimeListUsername} />
    </div>
    {/* "mt-[-.4rem] to fix the alignment issue caused by subgrid's "gap-3" */}
    <div className="row-span-2 col-span-2 mt-[-.4rem]">
      <div className="grid grid-cols-2 grid-rows-2 gap-3">
        <div className="col-span-2">
          <ProtonMailTile />
        </div>
        <ProtonDriveTile />
        <ProtonCalendarTile />
      </div>
    </div>
    {/* "mt-[-.4rem] to fix the alignment issue caused by subgrid's "gap-3" */}
    <div className="row-span-2 mt-[-.4rem]">
      <GitHubTile />
    </div>
  </div>
);

export default FavoritesSection;
