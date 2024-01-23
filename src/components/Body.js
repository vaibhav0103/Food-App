import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_LIST_URL } from "../utils/constants";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchedList, setSearchedList] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const resList = await fetch(RES_LIST_URL);
    const jsonList = await resList.json();
    setRestaurantList(
      jsonList?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setSearchedList(
      jsonList?.data?.cards[4]?.card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex flex-wrap justify-center">
        <div className="my-4 w-1/3 mx-auto rounded-md">
          <input
            type="text"
            className="w-5/6 p-2 bg-gray-200"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="w-1/6 p-2 bg-blue-300 text-white hover:bg-blue-500 rounded-md"
            onClick={() => {
              const filteredList = restaurantList.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setSearchedList(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="px-4">
          <button
            className="bg-blue-300 text-white hover:bg-blue-500 my-4 p-2 rounded-md"
            onClick={() => {
              const topRatedList = restaurantList.filter(
                (res) => res.info.avgRating > 4.2
              );
              setRestaurantList(topRatedList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {searchedList.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
