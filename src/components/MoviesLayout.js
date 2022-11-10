import React from "react";
import { Outlet } from "react-router-dom";

export default function MoviesLayout() {
  return (
    <>
      <div>MoviesLayout</div>
      <Outlet />
    </>
  );
}
