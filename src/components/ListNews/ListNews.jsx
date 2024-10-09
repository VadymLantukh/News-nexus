import { useSelector } from "react-redux";
import { selectNewsItems } from "../../redux/news/selectors";
import ItemNews from "../ItemNews/ItemNews";

const ListNews = () => {
  const listNews = useSelector(selectNewsItems);

  return (
    <ul>
      {listNews.map((news, index) => {
        return (
          <li key={index}>
            <ItemNews {...news} />
          </li>
        );
      })}
    </ul>
  );
};

export default ListNews;
