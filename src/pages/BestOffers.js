import { useCallback, useEffect, useMemo, useState } from "react";
import Api from "../services/api";
import { OfferBox } from "../containers/OfferBox";
import { useSelector } from "react-redux";
import { sorter } from "../utils";

const API = new Api();

const BestOffers = () => {
  const controller = useMemo(() => new AbortController(), []);
  const count = useSelector((state) => state.count);

  const [offers, setOffers] = useState([]);

  const getIndividualOffer = useCallback(async () => {
    for (let index = 0; index < count; index++) {
      const response = await API.getOffers("case3", controller.signal);
      setOffers((t) => sorter([...t, response], "Cash"));
    }
  }, [count, controller.signal]);

  useEffect(() => {
    if (count > 0) {
      getIndividualOffer();
    }
    return () => {
      controller.abort();
    };
  }, [count, getIndividualOffer, controller]);

  return (
    <div className="best-offers-container">
      <h3>
        {count > offers.length > 0
          ? `Teklifleriniz Yükleniyor (${offers.length}/${count})...`
          : "Tüm Teklifleriniz Yüklendi"}
      </h3>
      {offers.map((offer, key) => (
        <OfferBox key={key} offer={offer} />
      ))}
    </div>
  );
};

export default BestOffers;
