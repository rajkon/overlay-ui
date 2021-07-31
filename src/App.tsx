import React from 'react';
import { Link } from 'react-router-dom';

const Hello = () => {
  return (
    <div>
      <h2>Figma Design </h2>
      <h6>electron/react-app</h6>
      <ul>
        {/* <li>
          <Link to="/Contacts">Contacts</Link>
        </li> */}
        <li>
          <Link to="/Google">Google</Link>
        </li>
      </ul>
    </div>
  );
};

export default function App() {
  return <Hello />;
}
