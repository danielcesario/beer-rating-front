import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 8px;
  width: 1336px;
`;

export const Navbar = styled.nav`

    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

    background-color: darkGray;
    font-family: 'Roboto', sans-serif;

    ul {
        display: flex;
        margin: 0;
        padding: 0;
    }

    ul li {
        list-style-type: none;  
    }

    a:link, a:visited {
      background-color: Grey;
      color: white;
      padding: 14px 25px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
    }

    a:hover, a:active {
      background-color: darkBlue;
    }
`;