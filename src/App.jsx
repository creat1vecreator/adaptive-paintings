import React, { useEffect, useState } from 'react';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import { getAllAuthors, getAllLocations, getPaintingsByPage } from './requests/request';

function App() {
  const [paintings, setPaintings] = useState([]);
  const [theme, setTheme] = useState('light');

  const [authorOptions, setAuthorOptions] = useState([]);
  const [locationOptions, setLocationOptions] = useState([]);

  const [pages, setPages] = useState({
    totalPages: 0,
    currentPage: 1,
  });

  useEffect(() => {
    getPaintingsByPage(pages.currentPage).then((res) => {
      setPaintings(res.data);
    });
  }, [pages.currentPage]);

  useEffect(() => {
    if (!locationOptions.length) {
      getAllLocations().then((res) => {
        setLocationOptions(
          res.data.map((location) => ({ value: location.id, label: location.location })),
        );
      });
    }
  }, []);
  useEffect(() => {
    if (!authorOptions.length) {
      getAllAuthors().then((res) => setAuthorOptions(
        res.data.map((authorObj) => ({ value: authorObj.id, label: authorObj.name })),
      ));
    }
  }, []);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);
  return (
    <MainPage
      className="main-page"
      paintings={paintings}
      setPaintings={setPaintings}
      pages={pages}
      setPages={setPages}
      theme={theme}
      setTheme={setTheme}
      locationOptions={locationOptions}
      authorOptions={authorOptions}
    />
  );
}
export default App;
