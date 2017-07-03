import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./Navigation/NavBar";
import HomeView from "./views/home/HomeView";
import AboutView from "./views/about/AboutView";
import ProgressView from "./views/progress/ProgressView";
import ProposalView from "./views/proposal/ProposalView";
import PhotosView from "./views/photos/PhotosView";
import Footer from "./Footer/Footer";

const App = () =>
  <div>
    <NavBar />
    <HomeView />
    <Route path="/about" component={AboutView} />
    <Route path="/progress" component={ProgressView} />
    <Route path="/proposal" component={ProposalView} />
    <Route path="/photos" component={PhotosView} />
    <Footer />
  </div>;
export default App;
