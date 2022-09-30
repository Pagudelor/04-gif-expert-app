import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en Gif item', ()=> {
  const title= 'adele';
  const url = 'https://adele/';
    test('should match with the snapshot ', () => {
      const {container}= render(<GifItem title= {title} url={url}/>);
      expect( container).toMatchSnapshot();
    });

    test('show display image and url indicated ', () => {
      render(<GifItem title= {title} url={url}/>);
      //screen.debug();
      //expect(screen.getByRole('img').src).toBe(url);
      //expect(screen.getByRole('img').alt).toBe(title);
      const {src, alt}=screen.getByRole('img');
      expect(src).toBe(url);
      expect(alt).toBe(title);
    });

    test('show display component title ', () => {
      render(<GifItem title= {title} url={url}/>);
      expect(screen.getByText ( title )).toBeTruthy();
    });
  });