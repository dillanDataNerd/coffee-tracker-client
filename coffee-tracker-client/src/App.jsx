import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage.jsx";
import BrewsPage from "./pages/BrewsPage.jsx";
import BeansPage from "./pages/BeansPage.jsx";
import CreateBrew from "./pages/CreateBrew.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<HomePage />}></Route>
        <Route path={"/brews"} element={<BrewsPage />}></Route>
        <Route path={"/beans"} element={<BeansPage />}></Route>
        <Route path={"/brews/new"} element={<CreateBrew />}></Route>
        <Route path={"/brews/:brewId"} element={<HomePage />}></Route>
        <Route path={"/brews/edit"} element={<HomePage />}></Route>
        <Route path={"/beans/new"} element={<HomePage />}></Route>
        <Route path={"/beans/beanId"} element={<HomePage />}></Route>
        <Route path={"/beans/:beanId"} element={<HomePage />}></Route>
        <Route path={"/*"} element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
