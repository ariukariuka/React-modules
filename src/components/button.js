import React from "react";
import styles from './style.module.css'
import { getClasses } from './utlis/getClasses'

const Button = ({variant, textElement, imgElement}) =>  {
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
                type="button"
            >
                <img 
                src={imgElement} 
                className={variant === 'black' ? styles.displayNone :  styles.buttonImg}
                alt='img'
                />
                {textElement}</button>
        </>
    )
}
export default Button