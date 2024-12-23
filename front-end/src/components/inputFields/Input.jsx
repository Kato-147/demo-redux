import React from 'react'
import '../edit/EditPage.css'

export default function Input(props) {

    const { inputType, classStyle, data, setData, label } = props;

    return (
        <>
            <label htmlFor="">{label}</label>
            {inputType === 'textarea' ? (<textarea type='text' className={classStyle} placeholder={data} onChange={(e) => setData(e.target.value)} />) :
                (<input type="text" placeholder={data} onChange={(e) => setData(e.target.value)} />)}
        </>
    ) 
}
