import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./views/Home";
import Menu from "./views/Menu";
import About from "./views/About";
import Contact from "./views/Contact";
import NotFound from "./views/NotFound";
import Container from "./context/Container";
import Cart from "./Components/Cart";
import "./App.css";
import Register from "./Components/Register";



const App = () =>
{
  return (
<Container>

    <div className="App">
      <Router>
        <header> <Navbar/></header>

        <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/register" exact component={Register} />
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
    </Container>
    );
};

export default App;



