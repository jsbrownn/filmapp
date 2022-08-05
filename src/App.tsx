import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './i18n';
import { Layout } from "./components";
import { Dashboard, Movies, Movie, NotFound } from "./pages";
import navigation from "./utils/constants";

//to do
//разобраться со вложенным роутом movies,закостылил

export default function App() {
  const { trending, popular, favorite, latest, upcoming, top_rated } = navigation;
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path={favorite} element={<Movies />} />
          <Route path={popular} element={<Movies />} />
          <Route path={trending} element={<Movies />} />
          <Route path={latest} element={<Movies />} />
          <Route path={upcoming} element={<Movies />} />
          <Route path={top_rated} element={<Movies />} />
          <Route path="/movies/:id" element={<Movie />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

{
  /* <Route path={
                        favorite ||
                        popular ||
                        trending||
                        latest ||
                        upcoming||
                        top_rated
                      } 
                        element={<Movies/>}/> */
}
