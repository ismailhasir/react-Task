import { convertPrice } from "../utils";

const Price = ({ price, hasDiscount, premiumWithDiscount }) => {
  return (
    <div className="price-container">
      {hasDiscount && (
        <p>
          Peşin <del className="discounted-price">{convertPrice(price)} TL</del>
        </p>
      )}
      <h6 className="price">
        {hasDiscount ? convertPrice(premiumWithDiscount) : convertPrice(price)}{" "}
        TL
      </h6>
    </div>
  );
};

export default Price;
