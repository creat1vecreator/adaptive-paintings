import React, { useEffect, useState } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import MainPage from './pages/MainPage/MainPage';
import { getAllAuthors, getAllLocations, getPaintingsByPage } from './requests/request';

function App() {
  const [paintings, setPaintings] = useState([]);
  const [authorOptions, setAuthorOptions] = useState([]);
  const [locationOptions, setLocationOptions] = useState([]);
  const currentPage = useSelector((state) => state.pages.currentPage);

  useEffect(() => {
    getPaintingsByPage(currentPage).then((res) => {
      setPaintings(res.data);
    });
  }, [currentPage]);

  useEffect(() => {
    if (!locationOptions.length) {
      getAllLocations().then((res) => {
        setLocationOptions(res.data.map((location) => ({ value: location.id, label: location.location })));
      });
    }
  }, []);
  useEffect(() => {
    if (!authorOptions.length) {
      getAllAuthors().then((res) =>
        setAuthorOptions(res.data.map((authorObj) => ({ value: authorObj.id, label: authorObj.name }))),
      );
    }
  }, []);

  return (
    <MainPage
      className="main-page"
      paintings={paintings}
      setPaintings={setPaintings}
      locationOptions={locationOptions}
      authorOptions={authorOptions}
    />
  );
}

export default App;
