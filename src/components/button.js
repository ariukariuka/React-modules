import React from "react";
import styles from './style.module.css'
import { getClasses } from './utlis/getClasses'

const Button = ({variant}) => {
        const buttonTypes = {
        black: "black",
        red: "red",
        blue: 'blue'
        };
    return (
        <>
            <button 
                className={getClasses([
                styles.button,
                styles[`button--${buttonTypes[variant]}`],
                ])}
            >BUTTON</button>
        </>
    )
}
export default Button