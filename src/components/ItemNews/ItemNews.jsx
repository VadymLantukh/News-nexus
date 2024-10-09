const ItemNews = ({ title, urlToImage, description, url, author }) => {
  return (
    <>
      <img src={urlToImage} alt="imageNews" width="300px" height="300px" />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Author: {author}</p>
      <button type="submit">
        <a href={url}>Learn more</a>
      </button>
    </>
  );
};

export default ItemNews;
