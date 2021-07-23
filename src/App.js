import { useEffect, useState } from 'react';
import Comics from './components/Comics';
import Entertainment, { fetchMalData } from './components/Entertainment';
import Favorites from './components/Favorites';
import { Tab, Tabs } from './components/Tabs';

const App = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const initializeEntertainmentData = async () => {
      var anime = await fetchMalData();
      setShows(anime);
    }

    initializeEntertainmentData();
  }, []);

  return (
    <div className="w-full flex justify-center">
      <Tabs className="w-full flex flex-col gap-3">
        <Tab label="Favorites">
          <Favorites />
        </Tab>
        <Tab label="Comics">
          <Comics />
        </Tab>
        <Tab label="Entertainment">
          <Entertainment shows={shows}/>
        </Tab>
      </Tabs>
    </div>
  );
};

export default App;
