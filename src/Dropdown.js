import React, { useState } from 'react'


const Dropdown = ({ filteredData}) => {
    const [isChecked, setIsChecked] = useState(false);
    const onChangeHandler = (e) => {
        const { name, checked } = e.target;
        if (name === "allselect") {
            setIsChecked(!isChecked);
        }
    }

    const onClear = () => {
        setIsChecked(!isChecked);
    }
    return (
            <div className='dataresult'>
                <div className='item'>
                    <input type="checkbox" className="form-check-input" name="allselect" checked={isChecked} onChange={onChangeHandler} />
                    <label>All Select</label>
                </div>
                {filteredData.map((item) => {
                    const { id, title } = item
                    return (
                        <div className='item' key={id} >
                            <input type="checkbox" className="form-check-input" checked={isChecked} name={title} onChange={onChangeHandler} />
                            <p>{title}</p>
                        </div>
                    )
                })}
                <div className='button-container'>
                    <button className='btn-primary button'>Submit</button>
                    <button className='btn-primary button' onClick={onClear}>Clear</button>
                </div>
            </div>
        
    )
}

export default Dropdown