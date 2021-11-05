import React from 'react';
import './Card.css';
export const Card = ({ data, index }) => {
  const {
    name,
    manager_name,
    sebi_regn_no,
    basket_items,
    next_review_date,
    subscription_fee,
    cagr,
    basket_logo_url,
  } = data;

  const assets = basket_items.reduce((acc, curr) => {
    return [...acc, curr.coin_name];
  }, []);

  const assetsString = assets.join(', ');

  return (
    <div
      className={`d-flex py-4 px-5 justify-content-around ${
        index % 2 !== 0 ? 'bg-light' : ''
      }`}
    >
      <div>
        {basket_logo_url ? (
          <img
            src="https://uploads-ssl.webflow.com/609d636bf106e25af62763ff/60abf0a36059b533f1935f9d_Screenshot%202021-05-24%20at%204.24.08%20PM.png"
            alt="logo"
            className="logo"
          />
        ) : (
          name
        )}
      </div>
      <div className="d-flex flex-column justify-content-center">
        <div className="d-flex align-items-center">
          <p className="fs-6 fw-light me-2 mb-0 text-secondary">Basket:</p>
          <p className="fs-5 mb-0">{name}</p>
        </div>
        <div className="d-flex">
          <p className="fs-6 fw-light me-2 mb-0 text-secondary">Assets:</p>
          <p className="fs-6 fw-light mb-0">{assetsString}</p>
        </div>
        <div className="d-flex">
          <p className="fs-6 fw-light me-2 mb-0 text-secondary">Managed By:</p>
          <p className="fs-6 mb-0 text-secondary">{manager_name}</p>
        </div>
        <div className="d-flex">
          <p className="fs-6 fw-light me-2 mb-0 text-secondary">
            SEBI Registration Number
          </p>
          <p className="fs-6 mb-0 text-secondary">{sebi_regn_no}</p>
        </div>
      </div>

      <div className="d-flex flex-column justify-content-center">
        <p className="fs-6 fw-light mb-0 text-secondary text-center">CAGR</p>
        <p className="fs-6 mb-0 text-success text-center">{cagr + '%'}</p>
      </div>
      <div className="d-flex flex-column justify-content-center">
        <p className="fs-6 fw-light mb-0 text-secondary">Next Rebalance Date</p>
        <p className="fs-6 fw-light mb-0 text-center">{next_review_date}</p>
      </div>
      <div className="d-flex flex-column justify-content-center">
        <p className="fs-6 fw-light mb-0 text-secondary">Subscription Fee</p>
        <p className="fs-6 mb-0 text-success text-center">{subscription_fee}</p>
      </div>
    </div>
  );
};
