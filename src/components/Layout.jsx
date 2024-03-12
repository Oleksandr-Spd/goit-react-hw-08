import { Suspense } from "react";
import { NavBar } from "./NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ModalWindow } from "./Modal/Modal";

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Suspense>
        <Outlet />
      </Suspense>
      <Toaster />
      <ModalWindow />
    </>
  );
};
