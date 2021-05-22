import SideBar from "./SideBar.jsx";
import WorldMap from "./WorldMap.jsx";
import CountrySearch from "./CountrySearch.jsx";

const Home = () => {
  return (
    <div>
      <CountrySearch />
      <WorldMap />
    </div>
  );
};

export default Home;
