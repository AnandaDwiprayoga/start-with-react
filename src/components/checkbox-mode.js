import React from 'react'

const CheckboxMode = ({onCheckboxClicked}) => (
    <div className="input-darkmode">
        <input onClick={onCheckboxClicked} type="checkbox" id="darkmode"/> <label htmlFor="darkmode">Dark Mode</label>
    </div>
);

export default CheckboxMode;