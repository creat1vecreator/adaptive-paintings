import React, { useEffect, useState } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import MainPage from './pages/MainPage/MainPage';
import { getAllAuthors, getAllLocations, getPaintingsByPage } from './requests/request';

function App() {
  const theme = useSelector((state) => state.theme.theme);
  const [paintings, setPaintings] = useState([]);

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

  return (
    <MainPage
      className="main-page"
      paintings={paintings}
      setPaintings={setPaintings}
      pages={pages}
      setPages={setPages}
      locationOptions={locationOptions}
      authorOptions={authorOptions}
    />
  );
}
export default App;
