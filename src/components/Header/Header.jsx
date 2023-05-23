import { StyledHeader, StyledNavLink } from './Header.styled';

const Header = () => (
  <StyledHeader>
    <nav>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/movies">Movies</StyledNavLink>
    </nav>
  </StyledHeader>
);

export default Header;
