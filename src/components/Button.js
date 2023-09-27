import React from "react";
import styled from "styled-components";

const Button = (props) => {
    return (
        <div>
            <StyledButton>
                {props.componentProp}
            </StyledButton>
        </div>
    );
}

const StyledButton = styled.button`
  width: 7.5rem;
  height: 7.5rem;
  font-size: 3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: 0 0.5rem;
  background-color: rgb(40,40,40);
  color: ghostwhite;
  border: 2px solid rgb(40,40,40);
  transition: 0.50s all ease;
  &:hover{
    background-color: ghostwhite;
    border: 2px solid rgb(30,30,30);
    border-radius: 10px;
    color: rgb(30,30,30);
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 4rem;
    margin: 0 0.5rem;
    height: 3.5rem;
    font-size: 2rem;
  }
`;

export default Button;