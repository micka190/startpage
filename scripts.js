const CONFIGS = {
	MALUser: 'micka190'
};

const favoritesButton = document.getElementById('favorites-button');
const comicsButton = document.getElementById('comics-button');
const entertainmentButton = document.getElementById('entertainment-button');
const favorites = document.getElementById('favorites');
const comics = document.getElementById('comics');
const entertainment = document.getElementById('entertainment');

favoritesButton.addEventListener('click', () => {
  favorites.classList.remove('hidden');
  comics.classList.add('hidden');
  entertainment.classList.add('hidden');
  favoritesButton.classList.add('tab-button-active');
  comicsButton.classList.remove('tab-button-active');
  entertainmentButton.classList.remove('tab-button-active');
});

comicsButton.addEventListener('click', () => {
  favorites.classList.add('hidden');
  comics.classList.remove('hidden');
  entertainment.classList.add('hidden');
  favoritesButton.classList.remove('tab-button-active');
  comicsButton.classList.add('tab-button-active');
  entertainmentButton.classList.remove('tab-button-active');
});

entertainmentButton.addEventListener('click', () => {
  favorites.classList.add('hidden');
  comics.classList.add('hidden');
  entertainment.classList.remove('hidden');
  favoritesButton.classList.remove('tab-button-active');
  comicsButton.classList.remove('tab-button-active');
  entertainmentButton.classList.add('tab-button-active');
});

const openAllComicsButton = document.getElementById('open-all-comics-button');
openAllComicsButton.addEventListener('click', () => {
  for (const comic of document.getElementById('comics').getElementsByTagName('a')) {
    window.open(comic.href, '_blank');
  }

});

async function createMALTiles() {
  try {
    const response = await fetch(`https://api.jikan.moe/v3/user/${CONFIGS.MALUser}/animelist/watching`);
		if (response.ok) {
			const data = await response.json();
			data.anime.sort((a) => a.watched);

      const count = Math.min(data.anime.length, 10);
      const root = document.getElementById('mal-watching');

      for (let i = 0; i < count; ++i) {
        const tile = document.createElement('a');
        const image = document.createElement('img');
        const title = document.createElement('p');
        const episodes = document.createElement('p');

        tile.append(image);
        tile.append(title);
        tile.append(episodes);
        root.append(tile);

        tile.href = data.anime[i].url;
        tile.classList.add('mal-tile');
				image.src = data.anime[i].image_url;
        title.innerHTML = data.anime[i].title;
        title.classList.add('truncate', 'text-gray-800');
        episodes.innerHTML = `${data.anime[i].watched_episodes}/${data.anime[i].total_episodes}`;
        episodes.classList.add('text-teal-500', 'text-xs')
			}
		} else {
			throw response;
		}
  }
  catch (e) {
    console.error(e);
  }
}

createMALTiles();