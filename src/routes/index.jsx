import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate, } from "react-router-dom";
import Home from "../pages/Home"
const Watch = lazy(() => import("../pages/Watch"));
const Sing = lazy(() => import("../pages/Sing"));
const Me = lazy(() => import("../pages/Me"));
const Search = lazy(() => import("../pages/Search"));
const Rank = lazy(() => import("../pages/Rank"))

export default function RoutesConfig() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Navigate to="/home" replace={true} />}></Route>
        <Route path="/watch" element={<Watch />}></Route>
        <Route path="/sing" element={<Sing />}></Route>
        <Route path="/me" element={<Me />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/rank" element={<Rank />}>
          <Route path="/rank/:id" ></Route>
        </Route>
      </Routes>
    </Suspense>
  )
}
