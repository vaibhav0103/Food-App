import { CARD_IMG_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData.info;
  return (
    <div className="res-card">
      <div className="res-img">
        <img alt="restaurant-image" src={CARD_IMG_URL + cloudinaryImageId} />
      </div>
      <div className="res-info">
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>{sla.deliveryTime + " mins"}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
