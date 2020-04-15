const CONFIGS = {
	MALUser: 'micka190'
};

const createElement = (tag, classList = [], innerHTML = null) => {
	const element = document.createElement(tag);
	element.classList.add(...classList);
	if (innerHTML) {
		element.innerHTML = innerHTML;
	}
	return element;
};

const handleColor = (color, card) => {
	if (color.startsWith('#')) {
		card.style.backgroundColor = color;
	} else {
		card.classList.add(...color.split(' '));
	}
};

const createTiles = (root, cols, tiles) => {
	for (const tile of tiles) {
		const col = createElement('div', ['col', `s${cols}`]);
		const link = createElement('a');
		const card = createElement('div', [
			'card',
			'z-depth-2',
			'hoverable',
			!tile.title ? 'valign-wrapper' : null,
			tile.dark ? 'white-text' : null
		]);
		const cardImage = createElement('div', ['card-image']);
		const image = createElement('img');
		const cardContent = createElement('div', ['card-content']);

		root.appendChild(col);
		col.appendChild(link);
		link.appendChild(card);
		card.appendChild(cardImage);
		card.appendChild(cardContent);
		cardImage.appendChild(image);

		link.href = tile.href;
		image.src = tile.src;

		if (tile.title) {
			const title = createElement('span', ['card-title'], tile.title);
			cardContent.appendChild(title);
		}

		if (tile.color) {
			handleColor(tile.color, card);
		}
	}
};

const createIconTiles = (root, tiles) => {
	for (const tile of tiles) {
		const col = createElement('div', ['col', `s${tile.cols}`]);
		const link = createElement('a');
		const card = createElement('div', ['card', 'z-depth-2', 'hoverable', tile.dark ? 'white-text' : null]);
		const cardContent = createElement('div', ['card-content']);

		root.appendChild(col);
		col.appendChild(link);
		link.appendChild(card);
		card.appendChild(cardContent);

		link.href = tile.href;

		const icon = createElement('h1', ['mdi', tile.icon]);
		cardContent.appendChild(icon);

		const text = createElement('span');
		cardContent.appendChild(text);
		text.innerHTML = tile.text;

		if (tile.color) {
			handleColor(tile.color, card);
		}
	}
};

const createMALWidget = async () => {
	try {
		const response = await fetch(`https://api.jikan.moe/v3/user/${CONFIGS.MALUser}/animelist/watching`);
		if (response.ok) {
			const data = await response.json();
			data.anime.sort((a) => a.watched);

			const count = Math.min(data.anime.length, 10);
			const root = document.getElementById('entertainmentCenter').getElementsByClassName('collection')[0];

			for (let i = 0; i < count; ++i) {
				const link = createElement('a', ['collection-item', 'avatar']);
				const image = createElement('img', ['circle']);
				const title = createElement('span', ['title']);
				const episodes = createElement('p');

				root.appendChild(link);
				link.appendChild(image);
				link.appendChild(title);
				link.appendChild(episodes);

				link.href = data.anime[i].url;
				image.src = data.anime[i].image_url;
				title.innerHTML = data.anime[i].title;
				episodes.innerHTML = `${data.anime[i].watched_episodes}/${data.anime[i].total_episodes}`;
			}
		} else {
			throw response;
		}
	} catch (e) {
		console.error(e);
	}
};

const createFavoritesTab = async () => {
	const rootPrimary = document.getElementById('favoritesPrimary');
	const colsPrimary = 6;
	const tilesPrimary = [
		{
			src: 'images/websites/reddit.svg',
			title: 'Reddit',
			href: 'https://www.reddit.com/',
			color: '#ff4500',
			dark: true
		},
		{
			src: 'images/websites/youtube.png',
			title: 'YouTube',
			href: 'https://www.youtube.com/feed/subscriptions',
			color: '#ff0000',
			dark: true
		}
	];
	createTiles(rootPrimary, colsPrimary, tilesPrimary);

	const rootSecondary = document.getElementById('favoritesSecondary');
	const colsSecondaryTop = 12;
	const colsSecondaryBottom = 6;
	const tilesSecondaryTop = [
		{
			title: 'GitHub',
			src: 'images/websites/github.png',
			href: 'https://www.github.com/',
			color: '#24292e',
			dark: true
		}
	];
	const tilesSecondaryBottom = [
		{
			src: 'images/websites/protonmail.png',
			title: 'ProtonMail',
			href: 'https://beta.protonmail.com/',
			color: '#505061',
			dark: true
		},
		{
			title: 'Pocket',
			src: 'images/websites/pocket.jpg',
			href: 'https://app.getpocket.com/',
			color: '#ed374d',
			dark: true
		}
	];
	createTiles(rootSecondary, colsSecondaryTop, tilesSecondaryTop);
	createTiles(rootSecondary, colsSecondaryBottom, tilesSecondaryBottom);

	document.getElementById('favoritesOpenAllBtn').addEventListener('click', () => {
		const allTiles = [...tilesPrimary, ...tilesSecondaryTop, ...tilesSecondaryBottom];
		for (const tile of allTiles.reverse()) {
			window.open(tile.href, '_blank');
		}
	});
};

const createComicsTab = () => {
	const root = document.getElementById('comics').getElementsByClassName('card')[0].getElementsByClassName('row')[0];
	const cols = 3;
	const tiles = [
		{
			name: 'Winter Moon',
			src: 'images/comics/wintermoon.png',
			href: 'https://www.webtoons.com/en/fantasy/winter-moon/list?title_no=1093',
			color: 'white'
		},
		{
			name: 'Blue Chair',
			src: 'images/comics/bluechair.jpg',
			href: 'https://www.webtoons.com/en/slice-of-life/bluechair/list?title_no=199',
			color: '#fefefe'
		},
		{
			name: 'Fox Girls Are Better',
			src: 'images/comics/foxgirlsarebetter.jpg',
			href: 'https://www.webtoons.com/en/challenge/fox-girls-are-better/list?title_no=201808',
			color: 'white'
		},
		{
			name: 'Love Advice From The Great Duke Of Hell',
			src: 'images/comics/loveadvicefromthegreatdukeofhell.png',
			href: 'https://www.webtoons.com/en/comedy/love-advice/list?title_no=1498',
			color: 'white'
		},
		{
			name: 'D20 Monkey',
			src: 'images/comics/d20monkey.png',
			href: 'http://www.d20monkey.com/',
			color: 'black',
			dark: true
		},
		{
			name: 'Loading Artist',
			src: 'images/comics/loadingartist.png',
			href: 'https://loadingartist.com/',
			color: '#ff8217',
			dark: true
		},
		{
			name: 'Solo Leveling',
			src: 'images/comics/sololeveling.jpg',
			href: 'https://sololeveling.net/',
			color: 'white',
			dark: true
		},
		{
			name: 'Marblegate',
			src: 'images/comics/marblegate.png',
			href: 'http://marblegate.webcomic.ws/comics/',
			color: '#121619',
			dark: true
		},
		{
			name: 'Oglaf',
			src: 'images/comics/oglaf.png',
			href: 'https://www.oglaf.com/',
			color: 'white'
		},
		{
			name: 'Poorly Drawn Lines',
			src: 'images/comics/poorlydrawnlines.png',
			href: 'http://www.poorlydrawnlines.com/',
			color: 'white'
		},
		{
			name: 'Goblins',
			src: 'images/comics/goblins.png',
			href: 'https://www.goblinscomic.org/',
			color: 'white'
		},
		{
			name: 'False Knees',
			src: 'images/comics/falseknees.jpg',
			href: 'https://www.falseknees.com',
			color: '#ddb845'
		},
		{
			name: 'Swordscomic',
			src: 'images/comics/swords.png',
			href: 'https://swordscomic.com/comic/',
			color: 'black',
			dark: true
		}
	];
	tiles.sort((a, b) => a.name > b.name);
	createTiles(root, cols, tiles);

	document.getElementById('comicsOpenAllBtn').addEventListener('click', () => {
		for (const tile of tiles.reverse()) {
			window.open(tile.href, '_blank');
		}
	});
};

const createEntertainmentTab = async () => {
	const leftRoot = document.getElementById('entertainmentLeft');
	const leftCols = 12;
	const leftTiles = [
		{
			title: 'CrunchyRoll',
			src: 'images/websites/crunchyroll.png',
			href: 'https://www.crunchyroll.com/',
			color: '#f47521',
			dark: true
		},
		{
			title: 'Funimation',
			src: 'images/websites/funimation.jpg',
			href: 'https://www.funimation.com/shows/',
			color: '#410099',
			dark: true
		}
	];
	createTiles(leftRoot, leftCols, leftTiles);

	const rightRoot = document.getElementById('entertainmentRight');
	const rightCols = 12;
	const rightTiles = [
		{
			title: 'Netflix',
			src: 'images/websites/netflix.png',
			href: 'https://www.netflix.com/ca/',
			color: 'black',
			dark: true
		}
	];
	createTiles(rightRoot, rightCols, rightTiles);

	await createMALWidget();

	document.getElementById('MALBtn').addEventListener('click', () => {
		window.open(`https://myanimelist.net/animelist/${CONFIGS.MALUser}`, '_blank');
	});
};

const createVueTab = () => {
	const vueRoot = document.getElementById('vueDocsContainer').getElementsByClassName('row')[0];
	const vueTiles = [
		{
			icon: 'mdi-vuejs',
			text: 'Vue.js',
			href: 'https://vuejs.org/v2/guide/'
		},
		{
			icon: 'mdi-database',
			text: 'Vuex',
			href: 'https://vuex.vuejs.org/guide/'
		},
		{
			icon: 'mdi-routes',
			text: 'Router',
			href: 'https://router.vuejs.org/guide/'
		},
		{
			icon: 'mdi-nuxt',
			text: 'NuxtJS',
			href: 'https://nuxtjs.org/guide'
		}
	];
	vueTiles.forEach((tile) => {
		tile.cols = 3;
		tile.color = '#35495e';
		tile.dark = true;
	});

	createIconTiles(vueRoot, vueTiles);

	const vuetifyRoot = document.getElementById('vuetifyDocsContainer').getElementsByClassName('row')[0];
	const vuetifyTiles = [
		{
			icon: 'mdi-vuetify',
			text: 'API',
			href: 'https://vuetifyjs.com/en/components/api-explorer/'
		},
		{
			icon: 'mdi-vector-square',
			text: 'Icons',
			href: 'https://materialdesignicons.com/'
		},
		{
			icon: 'mdi-palette',
			text: 'Colors',
			href: 'https://vuetifyjs.com/en/styles/colors/'
		},
		{
			icon: 'mdi-format-font',
			text: 'Typography',
			href: 'https://vuetifyjs.com/en/styles/typography/'
		},
		{
			icon: 'mdi-compare',
			text: 'Themes',
			href: 'https://vuetifyjs.com/en/customization/theme/'
		}
	];

	vuetifyTiles.forEach((tile) => {
		tile.cols = 2;
		tile.color = '#1696f5';
		tile.dark = true;
	});
	vuetifyTiles[0].cols = 4;

	createIconTiles(vuetifyRoot, vuetifyTiles);
};

const createProgrammingTab = () => {
	const root = document.getElementById('programming').getElementsByClassName('row')[0];
	const cols = 4;
	const tiles = [
		{
			src: 'images/websites/stackoverflow.png',
			title: 'Stack Overflow',
			href: 'https://stackoverflow.com/'
		},
		{
			src: 'images/websites/cppreference.png',
			title: 'CPP Reference',
			href: 'https://en.cppreference.com/',
			color: '#004283',
			dark: true
		},
		{
			src: 'images/websites/mdn.png',
			title: 'MDN',
			href: 'https://developer.mozilla.org/en-US/',
			color: 'black',
			dark: true
		},
		{
			src: 'images/websites/python.png',
			title: 'Python',
			href: 'https://docs.python.org/',
			color: '#1e415e',
			dark: true
		},
		{
			src: 'images/websites/bootstrap.svg',
			title: 'Bootstrap',
			href: 'https://getbootstrap.com/docs/4.4/getting-started/introduction/',
			color: '#563d7c',
			dark: true
		},
		{
			src: 'images/websites/htmlcolorcodes.png',
			title: 'HTML Color Codes',
			href: 'https://htmlcolorcodes.com/'
		}
	];

	createTiles(root, cols, tiles);
};

const init = async () => {
	M.AutoInit();

	createFavoritesTab();
	createComicsTab();
	await createEntertainmentTab();
	createVueTab();
	createProgrammingTab();
};
