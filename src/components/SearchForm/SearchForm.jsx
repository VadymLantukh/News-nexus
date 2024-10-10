import { useDispatch } from "react-redux";
import { searchNewsThunk } from "../../redux/filter/operations";
import { Field, Formik, Form } from "formik";
import toast from "react-hot-toast";

const SearchForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ query }, actions) => {
    const clearQuery = query.trim();

    if (clearQuery === "") {
      toast.error("Please enter search fields");
      return;
    }

    dispatch(searchNewsThunk(clearQuery));
    actions.resetForm();
  };

  return (
    <>
      <Formik onSubmit={handleSubmit} initialValues={{ query: "" }}>
        <Form>
          <Field type="text" name="query" placeholder="Search?" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </>
  );
};

export default SearchForm;
