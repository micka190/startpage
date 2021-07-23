import Comics from './components/Comics';
import Entertainment from './components/Entertainment';
import Favorites from './components/Favorites';
import { Tab, Tabs } from './components/Tabs';

const tabContainer = 'flex justify-center p-3 text-gray-800';

const App = () => {
  return (
    <div className="w-full flex justify-center">
      <Tabs className="w-full flex flex-col gap-3">
        <Tab label="Favorites" className={tabContainer}>
          <Favorites />
        </Tab>
        <Tab label="Comics" className={tabContainer}>
          <Comics />
        </Tab>
        <Tab label="Entertainment" className={tabContainer}>
          <Entertainment />
        </Tab>
      </Tabs>
    </div>
  );
};

export default App;
