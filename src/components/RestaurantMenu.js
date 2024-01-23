import React, { useEffect, useState } from "react";
import { RES_MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResinfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    getResInfo();
  }, []);

  const getResInfo = async () => {
    const resData = await fetch(RES_MENU_URL + resId);
    const jsonData = await resData.json();
    setResinfo(jsonData.data);
  };
  if (resInfo === null) return <Shimmer />;

  const {
    name,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    sla,
    cuisines,
  } = resInfo.cards[0].card.card.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;
  console.log(itemCards);
  return (
    <div>
      <h1 className="p-2 m-2">{name}</h1>
      <h2 className="p-2 m-2">{avgRatingString}</h2>
      <h3 className="p-2 m-2">{totalRatingsString}</h3>
      <h3 className="p-2 m-2">{costForTwoMessage}</h3>
      <h3 className="p-2 m-2">{sla.deliveryTime + " mins"}</h3>
      <h3 className="p-2 m-2">{cuisines.join(", ")}</h3>
      <h2 className=" p-2 m-2">Menu</h2>
      <ul className="p-2">
        {itemCards.map((item) => (
          <li className="p-2 m-2">{item.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
