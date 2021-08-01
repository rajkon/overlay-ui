/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import {
  Link,
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  useRouteMatch,
  useHistory,
} from 'react-router-dom';
import electron from 'electron';

const Hello = () => {
  return (
    <div>
      <h2>Overlay App </h2>
      <h6>electron/react-app</h6>
      <ul>
        <ul>
          <li>
            <Link to="/UploadAny">Upload Any Image Option</Link>
          </li>
          <li>
            <Link to="/GoogleExample">An Example</Link>
          </li>
        </ul>
      </ul>
    </div>
  );
};

export default function App() {
  return <Hello />;
}
