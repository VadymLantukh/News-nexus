import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { fetchNewsThunk } from "../../redux/news/operations";
import ListNews from "../../components/ListNews/ListNews";
import SearchForm from "../../components/SearchForm/SearchForm";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const handleClick = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    dispatch(fetchNewsThunk(page));
  }, [dispatch, page]);

  return (
    <>
      <h1>Top News</h1>
      <SearchForm />
      <ListNews />
      <button type="button" onClick={handleClick}>
        Show more
      </button>
    </>
  );
};

export default HomePage;
