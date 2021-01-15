SINGLE PAGE APPLICATIONS (REACT)

Three concepts in react 

UI Library - 

Client Side Routing Library - 

Yup (form library) - 

Cypress.io -

NPM Dependencies for SPAs

npm install react-router-dom
npm install –save react react-dom react-router-dom react-scripts



React router - due to popularity of js frameworks and SPAs a common trend is the idea of client side routing. React Router V5 is a package used to handle how users view content they're supposed to be viewing and we gain an improved dev experience. 

BrowserRouter - import React, {BrowserRouter as Router} from 'react-router-dom'; this must wrap any router related code

Route - in importing BrowserRouter as Router Router becomes the standard call. Routes are ways of getting to a destination. a route can specify which componenets render on the page and in what order. The Route component declares which components will be mounted based on what URLS the user requests

Link - is a button component that can be styles as an a element at its base line under the hood. 


BASIC REACT ROUTER APP

import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./styles.css";


function Home(props) {
  return <h1>Home Component</h1>;
}
function About(props) {
  return (
    <div>
        <h1>About Component</h1>
        <h3>We got apples here as well</h3>
        <img src="https://assets.codepen.io/4996277/pexels-omar-alnahi-18495.jpg" className="sizer" alt='another' style={{margin: "5rem"}}/>
    </div>
  )
}
function Location(props) {
  return (
    <div>
        <h1>Location Component</h1>
        <h3>We got apples here</h3>
        <img src="https://assets.codepen.io/4996277/pexels-life-of-pix-9095.jpg" className="sizer" alt='this' style={{margin: "5rem"}}/>
  </div>
  )
}
function JukeJoint(props) {
  return (
  <div>
        <h1>JukeJoint Component</h1>
        <h3>How do you like dem apples???</h3>
        <img src="https://assets.codepen.io/4996277/pexels-600width.jpg" className="sizer" alt='one' style={{margin: "5rem"}}/>
  </div>
  )
}



export default function App() {
  return (
    <div className="App">
      <BrowserRouter> //router wrapper
        //all links are standard button format
        <div>
        <Link to="/" className='glow-on-hover'>Home</Link>
        <Link to="about"className='glow-on-hover'>About</Link>
        <Link to="location" className='glow-on-hover'>Location</Link>
        <Link to="jukejoint" className='glow-on-hover'>Juke Joint</Link>
        </div>
         {/*   A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          //Route is only for the path and what component to render
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/Location" component={Location} />
          <Route path="/JukeJoint" component={JukeJoint} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}


STANDARD IMPORT BLOCK

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";


// Params are placeholders in the URL that begin
// with a colon, like the `:id` param defined in
// the route in this example. A similar convention
// is used for matching dynamic segments in other
// popular web frameworks like Rails and Express.


function Topics() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}


function Topic() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}
