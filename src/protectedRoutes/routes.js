import React from 'react';
import { Navigate } from 'react-router-dom';

export function IsUserRedirect({ user, loggedInPath, children, path }) {
  return user ? <Navigate to={loggedInPath} /> : children;
}
export function ProtectedRoute({ user, children }) {
  return user ? children : <Navigate to="/" />;
}
