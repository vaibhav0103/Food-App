import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);
  return (
    <div className="body">
      <div className="search">Search</div>
      <button className="filter-btn" onClick={()=>{
        const topRatedList = restaurantList.filter((res)=> res.info.avgRating > 4.2)
        setRestaurantList(topRatedList)
      }}>Top Rated Restaurants</button>
      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
