import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Card } from '../Card';
import { fetchBasketDataStart } from '../../redux/basket/basketActions';

export const CardContainer = () => {
  const dispatch = useDispatch();
  const { loading, error, basketData } = useSelector(state => state.basket);
  console.log(loading, error, basketData);
  useEffect(() => {
    dispatch(fetchBasketDataStart());
  }, [dispatch]);
  if (loading) return <div>Loading</div>;
  if (error) return <div>{error}</div>;
  return (
    <div>
      {basketData.map((data, index) => (
        <Card data={data} key={data.basket_id} index={index} />
      ))}
    </div>
  );
};

export default CardContainer;
