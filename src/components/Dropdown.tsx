import React from 'react';

export interface IDropdown {
    title?: string
}

const Dropdown = (props: IDropdown) => {
    return (
        <button>{props.title || ''}</button>
    )
}

export default Dropdown;