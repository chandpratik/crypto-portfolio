import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Nav, Button } from 'react-bootstrap';
import { removeUser } from '../../redux/user/userActions';

export const Navigation = () => {
  const user = useSelector(state => state.user.username);

  const dispatch = useDispatch();

  return (
    <Nav className="border-bottom justify-content-between">
      <div className="d-flex">
        <Nav.Item>
          <Nav.Link href="#" className="fs-4">
            Portfolio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" className="fs-4">
            Watchlist
          </Nav.Link>
        </Nav.Item>
      </div>
      <div className="d-flex">
        <Nav.Item className="d-flex justify-content-center align-items-center mx-3">
          <p className="font-weight-bold p-0 m-0">{user}</p>
        </Nav.Item>
        <Nav.Item className="d-flex justify-content-center align-items-center mx-3">
          <Button className="btn-sm" onClick={() => dispatch(removeUser())}>
            LogOut
          </Button>
        </Nav.Item>
      </div>
    </Nav>
  );
};
