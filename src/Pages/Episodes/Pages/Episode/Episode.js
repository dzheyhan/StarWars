import React from 'react';
import { Link } from 'react-router-dom';

function Episode() {
  return (
    <React.Fragment>
      <h1>Episode</h1>
      <Link to="/episodes">Episodes</Link>
    </React.Fragment>
  );
}

export default Episode;
