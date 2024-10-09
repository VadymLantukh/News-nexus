import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchNewsThunk } from "../../redux/news/operations";
import ListNews from "../../components/ListNews/ListNews";

const HomePage = () => {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();

  const handleClick = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    dispatch(fetchNewsThunk(page));
  }, [dispatch, page]);

  return (
    <>
      <ListNews />
      <button type="button" onClick={handleClick}>
        Show more
      </button>
    </>
  );
};

export default HomePage;
