import PropTypes from 'prop-types';

const SearchMovies = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();

    const query = event.target.elements.query.value;

    if (query.trim() === '') {
      alert('Enter a search query!');
      return;
    }
    onSubmit(query);
    event.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input name="query" type="text" placeholder="Search movies" />
      <Button type="submit">Search</Button>
    </Form>
  );
};

SearchMovies.propTypes = { onSubmit: PropTypes.func.isRequired };

export default SearchMovies;
