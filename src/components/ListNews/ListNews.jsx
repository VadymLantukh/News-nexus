import ItemNews from "../ItemNews/ItemNews";

const ListNews = ({ news }) => {

  return (
    <ul>
      {news.map((item, index) => {
        return (
          <li key={index}>
            <ItemNews {...item} />
          </li>
        );
      })}
    </ul>
  );
};

export default ListNews;
