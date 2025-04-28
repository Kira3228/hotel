import { Button } from "../Button/Button";
type RoomCardProps = {
  url: string;
  name: string;
  description: string;
  //   rating: string;
  price: string;
};

export const RoomCard: React.FC<RoomCardProps> = ({
  url,
  name,
  description,

  price,
}) => {
  return (
    <>
      <img src={url} alt="" />
      <span className="name">{name}</span>
      <p className="description">{description}</p>
      {/* <span className="rating">{rating}</span> */}
      <span className="price">{price}</span>
      <Button color="blue" type="button">
        Посмотреть
      </Button>
    </>
  );
};
