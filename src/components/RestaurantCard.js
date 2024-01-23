import { CARD_IMG_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData.info;
  return (
    <div className="w-52 m-4 bg-gray-50 hover:bg-gray-200 rounded-md">
      <div>
        <img
          className="w-full h-40 p-1 rounded-md"
          alt="restaurant-image"
          src={CARD_IMG_URL + cloudinaryImageId}
        />
      </div>
      <div className="p-1 break-words min-h-24">
        <h3 className="font-bold">{name}</h3>
        <h4 className="text-sm">{cuisines.join(", ")}</h4>
        <div className="flex flex-wrap justify-between">
          <h4 className="font-semibold">{avgRating}</h4>
          <h4 className="font-semibold">{sla.deliveryTime + " mins"}</h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
