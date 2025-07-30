import { musicSheets } from '../data/sheets';
import SheetCard from '../components/SheetCard';

const Home = () => (
  <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {musicSheets.map((sheet) => (
      <SheetCard key={sheet.id} sheet={sheet} />
    ))}
  </div>
);

export default Home;
