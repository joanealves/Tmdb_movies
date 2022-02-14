
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import store from './data/store'
import { Provider } from 'react-redux'

import Header from "./presentation/components/Header";
import Home from "./presentation/pages/home"
import Synopis from "./presentation/pages/synopsis";
import Footer from "./presentation/components/Footer";

import './index.css';


const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sinopse" element={<Synopis />} />
        </Routes>
        <Footer></Footer>
      </div>
    </Provider>
  );
}

export default App;
