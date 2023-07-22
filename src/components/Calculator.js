import React from "react";
import Input from "./Input";
import styled from "styled-components";

const Calculator = () => {
    return(
        <StyledCalculator>
            <Input />
        </StyledCalculator>
    );
}

const StyledCalculator = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgb(30,30,30);
  height: 100vh;
`

export default Calculator;