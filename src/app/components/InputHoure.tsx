import React from 'react';

interface InputHoureProps {
    key: number,
    id: null,
    hour: number
}
function InputHoure({ key, id, hour }: InputHoureProps) {

    return (
        <label htmlFor={`${hour}:${id % 2 === 0 ? '00' : '30'}`}> {hour} : {id % 2 === 0 ? '00' : '30'}
            <input type="radio" id={`${hour}:${id % 2 === 0 ? '00' : '30'}`} name="at"/>
        </label>
    );
}

export default InputHoure;
