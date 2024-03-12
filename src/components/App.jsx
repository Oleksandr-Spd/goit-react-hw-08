import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import { Error } from "./Error/Error";
import ContactsPage from "../pages/ContactsPage";
import { useDispatch } from "react-redux";
import { useAuth } from "../hooks/useAuth";
import { refreshUser } from "../redux/auth/operations";
import { Loader } from "./Loader/Loader";
import { useEffect } from "react";
import { RestrictedRoute } from "./RestrictedRoute/RestrictedRoute";
import { PrivateRoute } from "./RestrictedRoute/PrivateRoute/PrivateRoute";
import { Layout } from "./Layout";

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        {" "}
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default App;

// email: "123445@gmail.com";
// name: "Alex";
// password: "12qw12qw";

// email: "1234567@maail.com";
// name: "Red";
// password: "12eewdsfdgsg";
