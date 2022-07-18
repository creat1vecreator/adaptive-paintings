import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import MainPage from './pages/MainPage/MainPage';
import { getPaintingsByPage } from './requests/request';
import { setPaintings } from './store/paintingsSlice';

function App() {
  const currentPage = useSelector((state) => state.pages.currentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    getPaintingsByPage(currentPage).then((res) => {
      dispatch(setPaintings(res.data));
    });
  }, [currentPage]);

  return <MainPage className="main-page" />;
}

export default App;
