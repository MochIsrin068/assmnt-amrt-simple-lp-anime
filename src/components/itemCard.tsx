import { TPropsItemCard, TGenreItem } from "../types/components.types";

const ItemCard = ({ item, onDirectToDetail }: TPropsItemCard) => {
  return (
    <>
      <div className="itemCard" onClick={() => onDirectToDetail(item)}>
        <img src={`${item.images.webp.image_url}`} alt="" />
        <div className="itemCard__info">
          <h3 title={item.title}>{item.title}</h3>
          <p>{item.aired.string}</p>
          <p>{item.aired.duration}</p>
          <div className="itemCard__info__genre">
            {item.genres.map((genre: TGenreItem) => (
              <span key={genre?.mal_id}>{genre?.name}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
