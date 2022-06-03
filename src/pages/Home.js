import { useEffect, useMemo, useState } from "react";

import { OfferBox } from "../containers/OfferBox";
import Api from "../services/api";
import { Button, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SET_OFFER_COUNT, SET_OFFER_DATA } from "../store/constants";

const API = new Api();

function App() {
  const controller = useMemo(() => new AbortController(), []);
  const { offers: defaultOffers, count } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [offers, setOffers] = useState(defaultOffers);
  const [offerCount, setOfferCount] = useState(count);
  const [loading, setLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const getOffers = () => API.getOffers("case1");
  const getIndividualOfferCount = () => API.getOffers("get_offer_count");

  useEffect(() => {
    if (!defaultOffers.length) {
      setLoading(true);
      Promise.all([getOffers(), getIndividualOfferCount()])
        .then((response) => {
          const [offers, count] = response;
          setOffers(offers.offerList);
          setOfferCount(count.num_offers);
          dispatch({ type: SET_OFFER_COUNT, count: count.num_offers });
          dispatch({ type: SET_OFFER_DATA, offers: offers.offerList });
        })
        .finally(() => setLoading(false));
    }
  }, [dispatch, defaultOffers]);

  useEffect(() => {
    return () => {
      controller.abort();
    };
  }, [controller]);

  const fetchMore = () => {
    setIsFetching(true);
    API.getOffers("case2", controller.signal)
      .then((response) => {
        setOffers([...offers, ...response.offerList]);
      })
      .finally(() => setIsFetching(false));
  };

  if (loading)
    return (
      <div className="loading-container">
        <CircularProgress />
      </div>
    );

  if (!offers.length) return <h2>Aradığınız Tekliflere Ulaşılamadı</h2>;

  return (
    <div className="home-container">
      <Button
        LinkComponent={Link}
        to="/offers"
        size="large"
        fullWidth
        variant="contained"
      >
        Size Özel Teklifler ({offerCount})
      </Button>
      {/* ben buraya key attım ama neden attım */}
      {offers.map((offer, key) => (
        <OfferBox key={key} offer={offer} />
      ))}
      <Button
        className="fetch-more-button"
        size="large"
        fullWidth
        onClick={fetchMore}
        disabled={isFetching}
        variant="contained"
      >
        {isFetching ? "Yükleniyor..." : "Daha Fazla Göster"}
      </Button>
    </div>
  );
}

export default App;
