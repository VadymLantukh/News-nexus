import { useDispatch } from "react-redux";
import { searchNewsThunk } from "../../redux/filter/operations";


const SearchForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const searchQuery = form.elements.filter.value.trim();

    if (searchQuery === "") return;

    dispatch(searchNewsThunk(searchQuery));
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="filter" placeholder="Search?" />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchForm;
