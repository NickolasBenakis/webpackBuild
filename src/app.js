import React, { Suspense } from 'react';
import './style.css';
import { truncateName } from './util';

const NicksPhoto = React.lazy(() =>
  import(
    /* webpackPreload: true, webpackChunkName: 'nicksPhoto' */ './components/photo'
  )
);

const App = () => (
  <div className="App">
    <h1>{`Hello People :) I'm ${truncateName('Nick')}`}</h1>
    <Suspense fallback={<div>Loading...</div>}>
      <NicksPhoto />
    </Suspense>
  </div>
);

export default App;
