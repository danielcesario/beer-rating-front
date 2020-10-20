import styled from 'styled-components'

export const BeerCardContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
  
  font-family: 'Roboto', sans-serif;
  max-width: 655px;
  margin-bottom: 16px;
  border: 1px solid lightGray;
  display: flex;
  flex-direction: column;

  .header, .body, .footer {
    display: flex;
  }

  .header {
    background-color: Grey;

    .title {
      font-size: 18px;
      margin-left: 8px;
      color: white;
    }
  }

  .body {
    .image{

      img {
        max-width: 200px;
      }
    }

    .description {
      padding: 16px;
      text-align: justify;
      line-height: 28px;
    }
  }

  .footer {
    background-color: lightGray;
    padding: 8px;

    .tag {
      margin-left: 8px;
    }
  }
`;