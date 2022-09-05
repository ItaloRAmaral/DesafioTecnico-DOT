import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {getPopularFilms} from './redux/reducers/fetchPopularFilms'
import { getGenres } from "./redux/reducers/fetchFilmsGenres";
import Home from "./pages/homePage";

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getGenres());
    dispatch(getPopularFilms());
  }, [dispatch])

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
