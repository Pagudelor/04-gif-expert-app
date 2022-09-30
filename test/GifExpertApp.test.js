import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Gif Expert App component test ', () => {
    const newCategory = 'DuaLipa';
    test('should Add new categories', () => {
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox'); 
        const form = screen.getByRole('form'); 
  
        //ahora disparo los eventos para agregar 3 categorias nuevas
        fireEvent.input(input, { target: { value: newCategory } });
        fireEvent.submit(form); 
  
        fireEvent.input(input, { target: { value: newCategory + '2' } });
        fireEvent.submit(form); 
  
        fireEvent.input(input, { target: { value: newCategory + '3' } });
         fireEvent.submit(form);
         screen.debug();
        
 });
    
});
