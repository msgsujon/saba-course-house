import React, { createContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import CourseOffer from "./components/CourseOffer/CourseOffer";

// react context api here 
 export const coursesContext = createContext('course')
function App() {
  const offer = 'Courses 50 % discount'
  return (
    <coursesContext.Provider value = {offer}>
      <div className = "App">
        {/* Router here  */}
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path = "/">
              <Home></Home>
            </Route>
            <Route path = "/home">
              <Home></Home>
            </Route>
            <Route path = "/services">
              <Services></Services>
            </Route>
            <Route path = "/about">
              <About></About>
            </Route>
            <Route path = "/courseoffer">
              <CourseOffer></CourseOffer>
            </Route>
            <Route path = "*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </div>
    </coursesContext.Provider>
  );
}

export default App;
