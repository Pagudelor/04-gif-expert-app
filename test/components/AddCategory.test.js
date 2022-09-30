import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Add Category component test', () => {
    test('should  change the value in the text box', () => {
      /*Arrange */ 
      render(<AddCategory onNewCategory= {() =>{} }/>);
      screen.debug();
      const input = screen.getByRole('textbox');
      /*Act */ 
      fireEvent.input(input, {target: {value: 'Camila Cabello'}});
      /*Assert */ 
      expect( input.value).toBe('Camila Cabello');
      screen.debug();
    });

    test('should send the value in the search gifs option', () => {
        /*Arrange */ 
        const inputValue = 'Sabrina Carpenter';
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory= {onNewCategory}/>);
        screen.debug();
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        /*Act */ 
        fireEvent.input(input, {target: {value: inputValue}});
        screen.debug();
        fireEvent.submit(form);
        screen.debug();
        /*Assert */ 
        expect( input.value).toBe('');
        expect( onNewCategory).toHaveBeenCalledTimes(1);
        expect( onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('should avoid calling on new category without information', () => {
        /*Arrange */ 
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory= {onNewCategory}/>);
        screen.debug();
        const form = screen.getByRole('form');
        /*Act */ 
        fireEvent.submit(form);
        screen.debug();
        /*Assert */ 
        expect( onNewCategory).toHaveBeenCalledTimes(0);
        //expect( onNewCategory).toHaveBeenCalledWith(inputValue);
    });
});
