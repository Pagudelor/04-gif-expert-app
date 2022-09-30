import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Test get Grid component', () => {
    const category = 'Rihanna';

    test('should display initial loading', () => {
     /*Arrange */
      useFetchGifs.mockReturnValue({
        images: [],
        isLoading: true
      });
     /*Act */
      render(<GifGrid category={category}/>);
      screen.debug();
      /*Assert */
      expect(screen.getByText(category));
      expect(screen.getByText('Cargando...'));
    });

    test('should display items when load images from fetch gifs', () => {
         /*Arrange */
        const gifs = [
            {
                id: 'id1',
                title: 'Adele',
                url: 'https://localhost/adele.jpg'
            },
            {
                id: 'id2',
                title: 'duaLipa',
                url: 'https://localhost/duaLipa.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
          });

        /*Act */
        render(<GifGrid category={category}/>);
        screen.debug();
        /*Assert */
        expect(screen.getAllByRole('img').length).toBe(2);
    });
});
