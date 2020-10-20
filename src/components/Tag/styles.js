import styled from 'styled-components'

export const TagContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
  
  background-color: ${props => props.color};
  font-family: 'Roboto', sans-serif;
  color: white;
  padding: 8px;
  display: inline-block;
  border-radius: 8px;
  font-size: 12px;
  font-weight: bold;
`;