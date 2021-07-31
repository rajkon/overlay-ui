/* eslint-disable react/button-has-type */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  useHistory,
} from 'react-router-dom';
// import google_search from './resources/google/google_search_730_392.png';
import google_search from './resources/google/google_search_796_431.png';

function GoogleSearch() {
  return (
    <div>
      <h6>Google Search</h6>
      <img
        style={{
          width: '796px',
          height: '431px',
          opacity: '0.40',
          backgroundColor: 'aquamarine',
        }}
        src={google_search}
        alt="google_search"
      />
    </div>
  );
}

function Google() {
  const history = useHistory();
  return (
    <Router>
      <div>
        <button onClick={() => history.goBack()}>Go Back</button>
        <ul>
          <li>
            <Link to="/GoogleHome">Google Home</Link>
          </li>
          <li>
            <Link to="/Google">Figma Snapshots </Link>
          </li>
        </ul>
        <hr />

        <Switch>
          <Route exact path="/GoogleHome">
            <GoogleHome />
          </Route>
          <Route path="/Google">
            <GoogleFigmaSnapshots />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function GoogleHome() {
  return (
    <div>
      <h2>Google Home</h2>
    </div>
  );
}

function Topic() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  const { topicId } = useParams();
  // eslint-disable-next-line no-console
  console.log(`topicId:${topicId}`);
  return (
    <div>
      {topicId === 'google_search' && (
        <>
          <h5> google search</h5>
          <GoogleSearch />
        </>
      )}
    </div>
  );
}

function GoogleFigmaSnapshots() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  const { path, url } = useRouteMatch();
  console.log(`path:${path}`);
  console.log(`url:${url}`);
  return (
    <div>
      <h2>Google Figma Snapshots</h2>
      <ul>
        <li>
          <Link to={`${url}/google_search`}>google search</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a snapshot.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

export default Google;
