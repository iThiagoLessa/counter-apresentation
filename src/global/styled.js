import { styled } from "styled-components";

export const StBoxContainer = styled.div`
  background-color: #3f3a3a;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
  > button:not(:last-child) {
    margin-right: 10px;
  }
  button {
    outline: none;
  }
  h3 {
    font-size: 2.5em;
  }
`;

export const StButton = styled.button`
  color: white;
`;

export const StContainer = styled.div`
  display: flex;
  gap: 30px;
`;
export const StPokemonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #6d6c6c;
  border-radius: 8px;
  padding: 10px;
`;
