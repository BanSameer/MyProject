import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./views/Home";
import Menu from "./views/Menu";
import About from "./views/About";
import Contact from "./views/Contact";
import NotFound from "./views/NotFound";
import "./App.css";

const App = () =>
{
  return (
    <div className="App">
      <Router>
        <header> <Navbar/></header>

        <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="*" component={NotFound} />
        </Switch> 
         {/*  <Switch>{/* Switch is not correctly displaying */ }
            {/* <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/menu" exact>
              <Menu />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
            <Route path="*" exact>
              <NotFound />
            </Route> 
          </Switch> 
*/}
        </main>

        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
};

export default App;



