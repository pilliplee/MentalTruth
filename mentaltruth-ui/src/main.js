import React from 'react';
import App from './containers/App';
import MentalTruthHome from './containers/MentalTruthHome';
import Slider from './components/Slider';
import {
    BrowserRouter as Router,
    Route,
    IndexRoute,
    Link,
    Switch
} from 'react-router-dom';


// const routes = [{
//   path: '/',
//   component: App,
// }, {
//   path: '/profiles',
//   component: Profiles,
// },{
//   path: '/profiles/stuff',
//   component: Slider,
// }, ];

// const routeComponents = routes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />);
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={MentalTruthHome}/>
      <Route path='/slider' component={Slider}/>
    </Switch>
  </main>
)

export default Main;