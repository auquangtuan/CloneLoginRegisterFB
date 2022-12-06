import React from 'react';
import './style.scss'
const SelectBasic = ({ id, register, arrValue, errors, className }) => {
    return (
        <select {...register(id)} className={`SelectBasic ${className}`}>
            {arrValue?.map((item) => {
                return (
                        <option className='selectOption' value={item.id} key={item.id}>
                            {item.value}
                        </option>
                );
            })}
        </select>
    );
};

export default SelectBasic;
