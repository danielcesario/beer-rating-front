import styled from 'styled-components'

export const NavButtonContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

    .button {
        border: none;
        background-color: Grey;
        color: White;
        padding: 16px;
        cursor: pointer;
        border: 1px solid Grey;
    }

    .button:hover, .button:active {
      background-color: darkBlue;
    }

    .button:disabled {
      background-color: lightGray;
      color: Grey;
      cursor: not-allowed;
    }
`;