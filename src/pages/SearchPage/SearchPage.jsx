import { useSelector } from "react-redux";
import SearchForm from "../../components/SearchForm/SearchForm";
import { selectFilter } from "../../redux/filter/selectors";
import ListNews from "../../components/ListNews/ListNews";

const SearchPage = () => {
  const news = useSelector(selectFilter);

  return (
    <>
      <SearchForm />
      <ListNews news={news} />
    </>
  );
};

export default SearchPage;
