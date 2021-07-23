class TileData {
  constructor(name, url, logo, background = 'bg-white') {
    this.name = name;
    this.url = url;
    this.logo = logo;
    this.background = background;
  }
}

class ShowTileData {
  constructor(title, url, imageUrl, episodes, watched) {
    this.title = title;
    this.url = url;
    this.imageUrl = imageUrl;
    this.episodes = episodes;
    this.watched = watched;
  }
}

const style = `
flex flex-grow
justify-center items-center
rounded
`;

const Tile = ({
  data: { background, url, logo, name },
  style,
  imageStyle = '',
}) => (
  <a className={`${style} ${background}`} href={url}>
    <img src={logo} alt={name} className={imageStyle} />
  </a>
);

const BigTile = ({ data }) => <Tile data={data} style={`${style} h-96 w-96`} />;

const SmallTile = ({ data }) => (
  <Tile data={data} style={`${style} w-48`} imageStyle="h-14" />
);

const ComicTile = ({ data }) => (
  <Tile data={data} style={`${style} w-56 h-56`} imageStyle="max-h-56" />
);

const MediaTile = ({ data }) => (
  <Tile data={data} style={`${style} p-3 w-48 h-48`} imageStyle="max-h-48" />
);

const ShowTile = ({ data }) => (
  <>
  {data ? (
    <a
      href={data.url}
      className={`
        w-56 flex flex-col justify-center items-center rounded border
      `}
    >
      <img src={data.imageUrl} alt={data.title} className="h-80 rounded-t" />
      <div className="w-full p-3 flex flex-col justify-start gap-1">
        <span className="truncate">{data.title}</span>
        <span className="text-blue-600">
          {data.watched}/{data.episodes}
        </span>
      </div>
    </a>
  ) : (
    <div className="h-full bg-gray-100 rounded border"></div>
    )}
  </>
)

export {
  BigTile,
  ComicTile,
  MediaTile,
  ShowTile,
  ShowTileData,
  SmallTile,
  TileData,
};
