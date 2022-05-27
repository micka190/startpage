import AppPanel from "./components/AppPanel";
import DarkModeWrapper from "./components/DarkModeWrapper";

import ComicsSection from "./components/ComicsSection";
import Comic from "./comic";
import FavoritesSection from "./components/FavoritesSection";

const GradientTrim = () => (
  <div className=" py-1 bg-gradient-to-r from-blue-500 to-rose-600 via-indigo-600" />
);

export default () => {
  const config = {
    nightTime: 18, // The hour when dark mode should automatically be enabled (24-hour system).
    myAnimeListUsername: "micka190",
    comics: [
      new Comic("Blue Chair", "https://www.webtoons.com/en/slice-of-life/bluechair/list?title_no=199"),
      new Comic("Loading Artist", "https://loadingartist.com/"),
      new Comic("Poorly Drawn Lines", "https://poorlydrawnlines.com/"),
      new Comic("Great duke of hell", "https://www.webtoons.com/en/comedy/love-advice/list?title_no=1498"),
      new Comic("False knees", "https://www.falseknees.com"),
      new Comic("Marble Gate", "https://marblegate.webcomic.ws/comics/"),
      new Comic("Swords", "https://swordscomic.com/comic"),
      new Comic("Weekly Roll", "https://www.webtoons.com/en/challenge/the-weekly-roll/list?title_no=358889"),
    ]
  };

  return (
    <DarkModeWrapper nightTime={config.nightTime}>
      <div className="w-full h-screen p-5 flex justify-center bg-slate-200 dark:bg-slate-900">
        <AppPanel>
          <GradientTrim />
          <FavoritesSection myAnimeListUsername={config.myAnimeListUsername}/>
          <hr className="m-2 border-slate-300 dark:border-slate-600" />
          <ComicsSection comics={config.comics} />
        </AppPanel>
      </div>
    </DarkModeWrapper>
  );
};
