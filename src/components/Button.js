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
  margin-bottom: 1.4rem;
  font-size: 3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: rgb(40,40,40);
  color: ghostwhite;
  border: 2px solid rgb(40,40,40);
  border-radius: 10px;
  transition: 0.50s all ease;
  &:hover{
    background-color: ghostwhite;
    border: 2px solid rgb(30,30,30);
    border-radius: 10px;
    color: rgb(30,30,30);
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 3.8rem;
    height: 3.8rem;
    font-size: 2.5rem;
  }
`;

export default Button;