import BuyButton from "../component/BuyButton";
import FirmInfo from "../component/FirmInfo";
import Price from "../component/Price";

export const OfferBox = ({ offer }) => {
  const {
    Cash,
    FirmName,
    ImagePath,
    ProductDesc,
    QuotaInfo: { HasDiscount, PremiumWithDiscount },
    SaleClosed,
    popoverContent,
  } = offer;

  return (
    <div className="offer-box-container">
      <div className="left-section">
        <div className="firm-logo">
          <img src={ImagePath} alt="firm name" />
        </div>
        <FirmInfo
          firmName={FirmName}
          productDesc={ProductDesc}
          popoverContent={popoverContent}
        />
      </div>

      <div className="right-section">
        <Price
          price={Cash}
          hasDiscount={HasDiscount}
          premiumWithDiscount={PremiumWithDiscount}
        />

        <BuyButton saleClosed={SaleClosed} />
      </div>
    </div>
  );
};
