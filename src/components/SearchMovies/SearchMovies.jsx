import PropTypes from 'prop-types';
import { Input, Button } from './SearchMovies.styled';

const SearchMovies = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();
    
    const form = event.currentTarget;
    const query = form.elements.query.value;

    if (query.trim() === '') {
      alert('Enter a search query!');
      return;
    }
    onSubmit(query);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input name="query" type="text" placeholder="Search movies" />
      <Button type="submit">Search</Button>
    </form>
  );
};

SearchMovies.propTypes = { onSubmit: PropTypes.func.isRequired };

export default SearchMovies;
