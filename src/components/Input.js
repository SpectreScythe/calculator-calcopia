import React, {useState} from "react";
import styled from "styled-components";
import Button from "./Button";
import {FaBackspace} from "react-icons/fa";
import {motion} from "framer-motion";
import {Click} from "./Animations";

const Input = () => {
    const [display, setDisplay] = useState('');

    const handleClick = (value) => {
        setDisplay(display + value);
        console.log("Calculated answer : " + (display + value));
    };
    const clearHandler = () => {
        setDisplay("");
        console.log("Input Cleared")
    };
    const factorial = (num) => {
        if (num === 0 || num === 1) {
            return 1;
        } else {
            return num * factorial(num - 1);
        }
    };
    const handleFactorial = () => {
        try {
            setDisplay(factorial(parseFloat(display)).toString());
            console.log("Factorial : " + factorial(parseFloat(display)).toString())
        } catch (error) {
            setDisplay('Error');
        }
    };
    const handlePercentage = () => {
        try {
            // eslint-disable-next-line no-eval
            setDisplay((eval(display) * 0.10).toString());
        } catch (error) {
            setDisplay('Error');
        }
    };
    const handleCalculate = () => {
        try {
            // eslint-disable-next-line no-eval
            setDisplay(eval(display).toString());
            // eslint-disable-next-line no-eval
            console.log(eval((display).toString()));
        } catch (error) {
            setDisplay('Error');
        }
    };
    return (
        <div>
            <StyledHeader>CALCOPIA</StyledHeader>
            <StyledTop>
                <StyledInput type="text" value={display} placeholder="Use the buttons below only:      "/>
            </StyledTop>
            <StyledNumber>
                <motion.div variants={Click} whileTap="whileTap" onClick={() => handleClick("7")}>
                    <Button
                        componentProp="7"
                    />
                </motion.div>
                <motion.div variants={Click} whileTap="whileTap" onClick={() => handleClick("8")}>
                    <Button
                        componentProp="8"
                    />
                </motion.div>
                <motion.div variants={Click} whileTap="whileTap" onClick={() => handleClick("9")}>
                    <Button
                        componentProp="9"
                    />
                </motion.div>

                <motion.div variants={Click} whileTap="whileTap" onClick={() => handlePercentage()}>
                    <Button
                        componentProp="%"
                    />
                </motion.div>
                <motion.div variants={Click} whileTap="whileTap" id="clear" onClick={clearHandler}>
                    <Button
                        componentProp={<FaBackspace size={40}/>}
                    />
                </motion.div>
            </StyledNumber>
        <StyledNumber>
                <motion.div variants={Click} whileTap="whileTap" onClick={() => handleClick("5")}>
                    <Button
                        componentProp="5"
                    />
                </motion.div>
                <motion.div variants={Click} whileTap="whileTap" onClick={() => handleClick("4")}>
                    <Button
                        componentProp="4"
                    />
                </motion.div>
                <motion.div variants={Click} whileTap="whileTap" onClick={() => handleClick("6")}>
                    <Button
                        componentProp="6"
                    />
                </motion.div>
                <motion.div variants={Click} whileTap="whileTap" onClick={() => handleClick("-")}>
                    <Button
                        componentProp="-"
                    />
                </motion.div>
                <motion.div variants={Click} whileTap="whileTap" onClick={() => handleClick("+")}>
                    <Button
                        componentProp="+"
                    />
                </motion.div>
        </StyledNumber>
        <StyledNumber>
                <motion.div variants={Click} whileTap="whileTap" onClick={() => handleClick("1")}>
                    <Button
                        componentProp="1"
                    />
                </motion.div>
                <motion.div variants={Click} whileTap="whileTap" onClick={() => handleClick("2")}>
                    <Button
                        componentProp="2"
                    />
                </motion.div>
                <motion.div variants={Click} whileTap="whileTap" onClick={() => handleClick("3")}>
                    <Button
                        componentProp="3"
                    />
                </motion.div>
                <motion.div variants={Click} whileTap="whileTap" onClick={() => handleClick("/")}>
                    <Button
                        componentProp="/"
                    />
                </motion.div>
                <motion.div onClick={() => handleClick("*")}>
                    <Button
                        componentProp="*"
                    />
                </motion.div>
        </StyledNumber>
        <StyledNumber>
                <motion.div variants={Click} whileTap="whileTap" onClick={() => handleClick("0")}>
                    <Button
                        componentProp="0"
                    />
                </motion.div>
                <motion.div variants={Click} whileTap="whileTap" onClick={() => handleClick("00")}>
                    <Button
                        componentProp="00"
                    />
                </motion.div>
                <motion.div variants={Click} whileTap="whileTap" onClick={() => handleClick(".")}>
                    <Button
                        componentProp="."
                    />
                </motion.div>
                <motion.div variants={Click} whileTap="whileTap" onClick={() => handleFactorial()}>
                    <Button
                        componentProp="!"
                    />
                </motion.div>
                <motion.div variants={Click} whileTap="whileTap" id="calculate" onClick={handleCalculate}>
                    <Button
                        componentProp="="
                    />
                </motion.div>
            </StyledNumber>
        </div>
    );
}

const StyledHeader = styled.h1`
  font-size: 4rem;
  letter-spacing: 8px;
  color: #ccc;
  text-align: center;
  font-family: 'Orbitron', sans-serif;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    margin-top: 30%;
    font-size: 3rem;
    width: 100%;
  }
`;

const StyledInput = styled.input`
  margin-top: 1rem;
  height: 4.6rem;
  width: 100%;
  font-size: 3rem;
  text-align: right;
  background-color: rgb(40, 40, 40);
  color: ghostwhite;
  border: 2px solid rgb(40, 40, 40);
  border-radius: 10px;
  transition: 0.50s all ease;
  outline: none;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 90vw;
    font-size: 1.5rem;
  }
`;

const StyledTop = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    margin-top: 5%;
    width: 100%;
  }
`;

const StyledNumber = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1rem;
  justify-content: center;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 90vw;
  }
`;


export default Input;