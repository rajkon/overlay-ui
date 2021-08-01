/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
import React from 'react';

import {
  Link,
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch,
  useHistory,
} from 'react-router-dom';
import google_search from './resources/google/google_search_796_431.png';

export function GoogleSearch() {
  const history = useHistory();
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

export function GoogleRandom() {
  return (
    <div>
      <h6>Google AR</h6>
    </div>
  );
}

export function Topic() {
  const { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

export function Topics() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  const { topicId } = useParams();
  const match = useRouteMatch();
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
      {topicId !== 'google_search' && (
        <>
          <h5> Coming soon...</h5>
          <GoogleRandom />
        </>
      )}
    </div>
  );
}

export default function GoogleExample() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  const { path, url } = useRouteMatch();
  console.log(`path:${path}`);
  console.log(`url:${url}`);
  const history = useHistory();

  return (
    <div>
      <button onClick={() => history.goBack()}>Go Back</button>
      <h2>Google Search and More Example</h2>
      <ul>
        <li>
          <Link to={`${url}/google_search`}>Google Search</Link>
        </li>
        <li>
          <Link to={`${url}/google_random`}>Google Upcoming</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${path}/:topicId`}>
          <Topics />
        </Route>
      </Switch>
    </div>
  );
}
