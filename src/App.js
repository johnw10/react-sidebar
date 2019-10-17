import React, { useState } from "react";
import Titlebar from "./components/Titlebar"
import Home from "./components/Home";
import About from "./components/About";
import Toolbar from "./components/Toolbar";
import Contact from "./components/Contact";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";
import { Route, Switch } from "react-router-dom";
import Styledmain from "./styled/Main";
import "./App.css";

function App() {
  const [sideDrawer, setsideDrawer] = useState(false);

  const clickHandler = e => {
    console.log(sideDrawer);
    setsideDrawer(!sideDrawer);
  };

  const backdropClickHandler = e => {
    setsideDrawer(false);
  };

  let backdrop;

  if (sideDrawer) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }

  return (
    <div style={{ height: "100%" }}>
      <Toolbar drawerClickHandler={clickHandler} />
      <SideDrawer open={sideDrawer} />
      {backdrop}
      <Styledmain>
      <Titlebar/>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </Styledmain>
    </div>
  );
}

export default App;
