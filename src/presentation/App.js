
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import store from '../data/store'
import { Provider } from 'react-redux'

import Header from "./components/Header";
import Home from "./pages/home"
import Synopis from "./pages/synopsis";
import Footer from "./components/Footer";

import './index.css';


const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/Tmdb_movies" exat={true} element={<Home />} />
          <Route path="sinopse" element={<Synopis />} />
        </Routes>
        <Footer></Footer>
      </div>
    </Provider>
  );
}

export default App;
