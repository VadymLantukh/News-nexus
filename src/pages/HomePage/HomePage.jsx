import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewsThunk } from "../../redux/news/operations";
import ListNews from "../../components/ListNews/ListNews";
import { selectIsLoading, selectNewsItems } from "../../redux/news/selectors";
import { BeatLoader } from "react-spinners";
import toast from "react-hot-toast";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const perPage = 10;
  const isLoading = useSelector(selectIsLoading);
  const news = useSelector(selectNewsItems);
  const dispatch = useDispatch();
  const isLastPage = news.length % perPage !== 0 || news.length === 0;

  const handleClick = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    dispatch(fetchNewsThunk(page));
    console.log(1)

    if (isLastPage && page > 1) {
      toast.error("The list of news in this region is over");
    }
  }, [dispatch, page, isLastPage]);

  return (
    <>
      <h1>Top News</h1>
      <ListNews news={news} />
      {isLoading && <BeatLoader />}
      {!isLastPage && !isLoading && (
        <button type="button" onClick={handleClick}>
          Show more
        </button>
      )}
    </>
  );
};

export default HomePage;
