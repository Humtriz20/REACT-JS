import React from 'react';

const LazyNavbar = React.lazy(() => import('./Navbar'));

const MyComponent = () => (
  <React.Suspense fallback={<div>Loading Navbar...</div>}>
    <LazyNavbar />
  </React.Suspense>
);

export default MyComponent;