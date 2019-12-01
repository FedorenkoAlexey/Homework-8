import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Working from "./components/working/working";
import Featured from "./components/featured/featured";
import Services from "./components/services/services";
import Team from "./components/team/team";
import Client from "./components/client/client";
import Logo from "./components/logo/logo";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="main">
      <Header></Header>
      <Working></Working>
      <Featured></Featured>
      <Services></Services>
      <Team></Team>
      <Client></Client>
      <Logo></Logo>
      <Footer></Footer>
    </div>
  );
}

export default App;
