import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <Nav>
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/movies" activeClassName="active">
          Movies
        </NavLink>
      </Nav>
    </Container>
  );
};

const Container = styled.header`
  background-color: #222;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Nav = styled.nav``;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-left: 20px;
  padding: 5px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }

  &.active {
    background-color: #555;
  }
`;

export default Header;
