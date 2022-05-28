import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
