import React from 'react'

interface ButtonProps {
    text: string,
    onClick: () => void // TODO: Функция для кнопки
}

var Button = (props: ButtonProps) => {
    return (
        <button onClick={props.onClick}> {props.text} </button>
    )
};

export default Button;