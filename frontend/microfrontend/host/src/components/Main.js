import React, {lazy} from 'react';

const ProfileControl = lazy(() => import('profile/ProfileControl').catch(() => {
  return { default: () => <div className='error'>Component is not available!</div> };
}));

const PlacesControl = lazy(() => import('places/PlacesControl').catch(() => {
  return { default: () => <div className='error'>Component is not available!</div> };
}));

function Main() {
  return (
    <main className="content">
      <ProfileControl></ProfileControl>
      <PlacesControl></PlacesControl>
    </main>
  );
}

export default Main;
