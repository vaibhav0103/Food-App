import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchedList, setSearchedList] = useState([])
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const resList = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.654675054147862&lng=77.36980766057968&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonList = await resList.json();
    setRestaurantList(
      jsonList?.data?.cards[4]?.card.card.gridElements.infoWithStyle.restaurants
    );
    setSearchedList(
      jsonList?.data?.cards[4]?.card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input type="text"
          className="search-input"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button onClick={() => {
           const filteredList =  restaurantList.filter((res)=>{

               return res.info.name.toLowerCase().includes(searchText.toLowerCase())            
             } )
             setSearchedList(filteredList)
        }}>Search</button>
      </div>
      <button
        className="filter-btn"
        onClick={() => {
          const topRatedList = restaurantList.filter(
            (res) => res.info.avgRating > 4.2
          );
          setRestaurantList(topRatedList);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="res-container">
        {searchedList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
