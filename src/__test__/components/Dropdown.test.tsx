// App.test.tsx/jsx
import { describe, it, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dropdown from '../../components/Dropdown';

describe('Dropdown component', () => {

    it('render custom title', () => {
        render(<Dropdown title='custom title'/>)
        screen.getByText('custom title')
    })

    it('render custom options', () =>{
        const customOptions = [
            {label: "option A"},
            {label: "option B"},
            {label: "option C"},
        ]
        render(<Dropdown title='custom title' options={customOptions}/>)
        const dropdownButtom = screen.getByRole('button', {
            name: /custom title/i
        })

        fireEvent.click(dropdownButtom)
        screen.getByText("option A")
        screen.getByText("option B")
        screen.getByText("option C")
    })
})

// it('feature tour', async () => {
//     render(<Dropdown />);

//     screen.getByRole('heading', {
//         name: /vite \+ react/i
//     });

//     const counterButton = screen.getByRole('button', {
//         name: /count is 0/i
//     });

//     expect(counterButton).toBeInTheDocument();
//     expect(counterButton).toHaveTextContent('count is 0');

//     fireEvent.click(counterButton);
//     screen.getByText('count is 1');

//     fireEvent.click(counterButton);
//     screen.getByText('count is 2');
// });
