import React, { useState } from 'react'
import Button from './Button';

interface ISwichrProps {
    texts?: string[],
}

export default function Arrays(props: ISwichrProps) {
    var [ texts, setText ] = useState(['попробуй', '!']);

    return (
        <div>
            <h5> {texts} </h5>
            <Button text='Своё' onClick={() => 
                setText(texts = props.texts ?? ['я  ', 'м ', 'a ','с ','с ','и ','в '])} />
        </div>
    )
}