// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { googleApiKey } from "./keys";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import VideoPage from "./pages/VideoPage/VideoPage";
import RelatedVideosPage from "./pages/RelatedVideos/RelatedVideos";
import SearchPage from "./pages/SearchPage/SearchPage"

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { useEffect } from "react";
import axios from "axios";

function App() {
 

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/video"element={<VideoPage/>}/>
        <Route path= "/related" element={<RelatedVideosPage/>}/>
        <Route path= "/search" element={<SearchPage/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
