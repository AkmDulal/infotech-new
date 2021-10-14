import { Route, Switch } from "react-router-dom"
import './App.css';
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/ScrollToTop";

import HomePages from "./pages/HomePages"
// import AboutPages from "./pages/AboutPages"
// import ProfilePages from "./pages/ProfilePages"
// import ProfilePagesDetails from "./pages/ProfilePagesDetails"
// import ServicesPages from "./pages/ServicesPages"
// import ServicesDetails from "./pages/ServicesDetails"
// import ContactPages from "./pages/ContactPages"
// import CareersPages from "./pages/CareersPages"
// import CareerDetailsPages from "./pages/CareerDetailsPages"
// import ApplyPages from "./pages/ApplyPages"

function App() {
  return (
    <div className="App" >
      <ScrollToTop />
      <Layout>
        <Switch>
            <Route exact path="/" component={HomePages}></Route>
            {/* <Route exact path="/about-us" component={AboutPages}></Route>
            <Route exact path="/profile" component={ProfilePages}></Route>
            <Route exact path="/profile-details" component={ProfilePagesDetails}></Route>
            <Route exact path="/services" component={ServicesPages}></Route>
            <Route exact path="/services-details" component={ServicesDetails}></Route>
            <Route exact path="/career" component={CareersPages}></Route>
            <Route exact path="/career-details" component={CareerDetailsPages}></Route>
            <Route exact path="/apply-from" component={ApplyPages}></Route>
            <Route exact path="/contact" component={ContactPages}></Route> */}
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
