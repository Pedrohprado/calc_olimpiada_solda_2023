import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 20px;
`;

export const ContainerAux = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 50%;
  height: 60%;
  background-color: #3f3f3f;
  border-radius: 7px;
`;

export const InputValue = styled.input`
  padding: 10px 10px;
  width: 60%;
  margin-top: 20px;
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 5px 20px;

  background-color: gray;

  font-size: 20px;
  color: white;

  border-radius: 7px;
  border-style: none;
`;

export const Result = styled.h2`
  margin-top: 10px;
  color: black;
  font-size: 22px;
  font-weight: bold;
`;
