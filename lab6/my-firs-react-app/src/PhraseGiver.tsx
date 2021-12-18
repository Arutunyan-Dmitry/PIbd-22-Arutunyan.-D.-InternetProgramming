import React, { useState } from 'react'
import Button from './Button';

interface IWordProps {
    first: string,
    second: string,
    third: string
}

export default function PhraseGiver(props: IWordProps) {
    var [ currentValue, setcurrentValue ] = useState<string>(props.first + " " + props.second + " " + props.third );
    return (
        <div>
            <h5> {currentValue} </h5>
            <Button text='1й вариант' onClick={() =>setcurrentValue(currentValue = (props.third + " " + props.second + " " + props.first))} />
            <Button text='2й вариант' onClick={() =>setcurrentValue(currentValue = (props.first + " " + props.third + " " + props.second))} />
            <Button text='3й вариант' onClick={() =>setcurrentValue(currentValue = (props.second + " " + props.third + " " + props.first))} />
        </div>
    )
}
