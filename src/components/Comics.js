import BlueChairLogo from '../images/comics/bluechair.jpg';
import D20MonkeyLogo from '../images/comics/d20monkey.png';
import FalseKneesLogo from '../images/comics/falseknees.jpg';
import FoxGirlsAreBetterLogo from '../images/comics/foxgirlsarebetter.jpg';
import GoblinsLogo from '../images/comics/goblins.png';
import LoadingArtistLogo from '../images/comics/loadingartist.png';
import LoveAdviceFromTheGreatDukeOfHellLogo from '../images/comics/loveadvicefromthegreatdukeofhell.png';
import MarblegateLogo from '../images/comics/marblegate.png';
import MyGirlfriendIsAnOrcWarlordLogo from '../images/comics/mygirlfriendisanorcwarlord.jpg';
import OglafLogo from '../images/comics/oglaf.png';
import PoorlyDrawnLinesLogo from '../images/comics/poorlydrawnlines.png';
import SoloLevelingLogo from '../images/comics/sololeveling.jpg';
import SwordsLogo from '../images/comics/swords.png';
import TheWeeklyRollLogo from '../images/comics/theweeklyroll.jpg';
import WinterMoonLogo from '../images/comics/wintermoon.png';
import { Button } from './Buttons';
import { ComicTile, TileData } from './Tiles';

const Comics = () => {
  const darkBackground = 'bg-black';

  const comics = [
    new TileData(
      'BlueChair',
      'https://www.webtoons.com/en/slice-of-life/bluechair/list?title_no=199',
      BlueChairLogo
    ),
    new TileData(
      'D20Monkey',
      'http://www.d20monkey.com/',
      D20MonkeyLogo,
      darkBackground
    ),
    new TileData('FalseKnees', 'https://www.falseknees.com/', FalseKneesLogo),
    new TileData(
      'FoxGirlsAreBetter',
      'https://www.webtoons.com/en/challenge/fox-girls-are-better/list?title_no=201808',
      FoxGirlsAreBetterLogo
    ),
    new TileData('Goblins', 'https://www.goblinscomic.org/', GoblinsLogo),
    new TileData(
      'LoadingArtist',
      'https://loadingartist.com/',
      LoadingArtistLogo
    ),
    new TileData(
      'LoveAdviceFromTheGreatDukeOfHell',
      'https://www.webtoons.com/en/comedy/love-advice/list?title_no=1498',
      LoveAdviceFromTheGreatDukeOfHellLogo
    ),
    new TileData(
      'Marblegate',
      'http://marblegate.webcomic.ws/comics/',
      MarblegateLogo,
      darkBackground
    ),
    new TileData(
      'MyGirlfriendIsAnOrcWarlord',
      'https://www.webtoons.com/en/challenge/my-girlfriend-is-an-orc-warlord/list?title_no=440298',
      MyGirlfriendIsAnOrcWarlordLogo
    ),
    new TileData('Oglaf', 'https://www.oglaf.com/', OglafLogo),
    new TileData(
      'PoorlyDrawnLines',
      'http://www.poorlydrawnlines.com/',
      PoorlyDrawnLinesLogo
    ),
    new TileData(
      'SoloLeveling',
      'https://sololeveling.net/',
      SoloLevelingLogo
    ),
    new TileData('Swords', 'https://swordscomic.com/comic/', SwordsLogo, darkBackground),
    new TileData(
      'TheWeeklyRoll',
      'https://www.webtoons.com/en/challenge/the-weekly-roll/list?title_no=358889',
      TheWeeklyRollLogo
    ),
    new TileData(
      'WinterMoon',
      'https://www.webtoons.com/en/fantasy/winter-moon/list?title_no=1093',
      WinterMoonLogo
    ),
  ];

  const onOpenAllClicked = () => {
    for (const comic of comics) {
      window.open(comic.url, '_blank');
    }
  };

  return (
    <div className="flex flex-col gap-3 bg-white rounded shadow p-3">
      <div className="flex items-center justify-end">
        <Button onClick={onOpenAllClicked}>Open all</Button>
      </div>
      <div className="grid grid-cols-5 gap-3">
        {comics.map((comicTile, index) => (
          <ComicTile data={comicTile} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Comics;
