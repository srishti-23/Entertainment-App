/*import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
//import MovieDetail from "./components/MovieDetail";
import Movie from "./components/Movie";
import requests from "./Requests";
import NavBar from "./components/NavBar";
import Tvshow from "./components/Tvshow";
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";

import {Toaster} from "react-hot-toast"
import Login from "./components/Login";

function App() {
  const location = useLocation();
  const isSignupPage = location.pathname === "/login";

  return (
    <>
    <Toaster/>
      <div className="flex h-screen">
        {!isSignupPage && <NavBar />}
        <div className="flex-1 overflow-auto p-4">
          {!isSignupPage && <SearchBar />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            
            <Route
              path="/movies"
              element={
                <Movie title="Movies" fetchURL={requests.requestTopRated} />
              }
            />
            <Route path="/tvshow" element={
                <Tvshow
                  title="Explore TV Shows"
                  fetchURL={requests.requestUpcoming}
                />
              }
            />
            <Route path="/all/search/:searchQuery" element={<SearchResult />} />
            <Route path="/movie/search/:searchQuery" element={<SearchResult />} />
            <Route path="/tv/search/:searchQuery" element={<SearchResult />} />
          </Routes>
   
        </div>
      </div>
    </>
  );
}

export default App;*/



import { Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Movieshow from "./components/Movieshow";
import requests from "./Requests";
import NavBar from "./components/NavBar";
import Tvshow from "./components/Tvshow";
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";
import { Toaster } from "react-hot-toast";
import Login from "./components/Login";
import SavedShow from './components/SavedShow';

function App() {
  const location = useLocation();
  const isSignupPage = location.pathname === "/login";
  const [searchActive, setSearchActive] = useState(false);

  return (
    <>
      <Toaster />
      <div className="flex h-screen">
        {!isSignupPage && <NavBar />}
        <div className="flex-1 overflow-auto p-4">
          {!isSignupPage && <SearchBar setSearchActive={setSearchActive} />}
          {searchActive ? (
            <SearchResult />
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/movieshow"
                element={<Movieshow title="Movies" fetchURL={requests.requestTopRated} />}
              />
              <Route
                path="/tvshow"
                element={<Tvshow title="Explore TV Shows" fetchURL={requests.requestUpcoming} />}
              />
              <Route path="/all/search/:searchQuery" element={<SearchResult />} />
              <Route path="/movie/search/:searchQuery" element={<SearchResult />} />
              <Route path="/tv/search/:searchQuery" element={<SearchResult />} />
              <Route path="/saved-shows" element={<SavedShow />} />
            </Routes>
          )}
        </div>
      </div>
    </>
  );
}

export default App;




