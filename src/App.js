import { LoginForm, Dashboard } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { IsUserRedirect, ProtectedRoute } from './protectedRoutes/routes';

function App() {
  const user = useSelector(state => state.user.username);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <IsUserRedirect user={user} loggedInPath="/dashboard" path="/">
              <LoginForm />
            </IsUserRedirect>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute user={user}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
