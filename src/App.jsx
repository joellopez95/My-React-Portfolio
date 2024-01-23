// App.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/Footer'; // Import Footer component

function App() {
  return (
    <>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer /> {/* Include the Footer component here */}
    </>
  );
}

export default App;
