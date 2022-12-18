import React, { useState, KeyboardEvent } from "react";
import styled from "styled-components";

interface Props {
  setCityName: React.Dispatch<React.SetStateAction<string>>;
}

const InsertCityName = ({ setCityName }: Props) => {
  const [city, setCity] = useState("seoul");

  const changeCityName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const clickChangeCity = () => {
    setCityName(city);

    setCity("");
  };

  const onCheckEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      clickChangeCity();
    }
  };

  return (
    <Container>
      <InputCityName
        type="text"
        onChange={changeCityName}
        onKeyPress={onCheckEnter}
      />
      <SearchButton onClick={clickChangeCity}>{`날씨 보기`}</SearchButton>
    </Container>
  );
};

export default InsertCityName;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const InputCityName = styled.input`
  border: none;
  border-radius: 10px;
  font-size: 20px;
  margin: 0px;
`;
const SearchButton = styled.button`
  background-color: #81d1ff;
  border: none;
  padding: 10px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  margin: 5px;

  &:hover {
    transform: translateY(-5px);
  }
`;
