import React, { useState } from 'react'
import Button from './Button';

interface ICountProps {
    initialValue: number,
    step?: number
}

export default function Counter(props: ICountProps) {
    const [ currentValue, setcurrentValue ] = useState<number>(props.initialValue);
    return (
        <div>
            <h5> Изначальное значение: {props.initialValue}, Шаг: {props.step ?? 1} </h5>
            <h5>Текущее значение: {currentValue}</h5>
            <Button text='Прибавить' onClick={() => setcurrentValue(currentValue + (props.step ?? 1))} />
            <Button text='Отнять' onClick={() => setcurrentValue(currentValue - (props.step ?? 1))} />
        </div>
    )
}
