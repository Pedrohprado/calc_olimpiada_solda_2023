/* eslint-disable react/prop-types */
import React from "react";

import {
  Container,
  ContainerAux,
  InputValue,
  Title,
  Button,
  Result,
} from "./style";
const InfoNotes = () => {
  const [value, setValue] = React.useState("");
  const [value2, setValue2] = React.useState("");
  const [value3, setValue3] = React.useState("");
  const [value4, setValue4] = React.useState("");
  const [resultado, setResultado] = React.useState("");

  const sumValue = () => {
    const resultado = value * 0.5 + value2 * 1 + value3 * 1.5 + value4 * 2.75;

    setResultado(resultado);
  };

  const cleanValue = () => {
    setValue("");
    setValue2("");
    setValue3("");
    setValue4("");
  };
  return (
    <Container>
      <Title>Calculadora Olimpíada Solda - 2023</Title>
      <ContainerAux>
        <InputValue
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="questões 1 até 20"
        />
        <InputValue
          placeholder="questões 21 até 30"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        />
        <InputValue
          placeholder="questões 31 até 36"
          value={value3}
          onChange={(e) => setValue3(e.target.value)}
        />
        <InputValue
          placeholder="questões 37 até 40"
          value={value4}
          onChange={(e) => setValue4(e.target.value)}
        />

        <Button onClick={sumValue}>Somar</Button>
        <Button onClick={cleanValue}>Limpar</Button>
      </ContainerAux>
      {value && value2 && value3 && value4 != null ? (
        <Result>O resultado é: {resultado}</Result>
      ) : (
        ""
      )}
    </Container>
  );
};

export default InfoNotes;
