import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/index.js";
import { useFetchGifs } from "../../src/hooks/useFetchGifs.js";

jest.mock('../../src/hooks/useFetchGifs.js');

describe('Tests on GifGrid', () => {

    const category = 'Gantz';

    test('should to display the loading at the beginning', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
        render(<GifGrid category={category}/>);
        expect(screen.getByText('Loading...'));
        expect(screen.getByText(category));
    });

    test('should to display items when it is loading the images through the custom hook', () => {
        const gifs = [
            {
                id: 'asdf',
                title: 'Claymore',
                url: 'https://claymore.com'
            },
            {
                id: 'hjkj',
                title: 'Death Note',
                url: 'https://death-note.com'
            }
        ];
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        render(<GifGrid category={category}/>);
        screen.debug();

        expect(screen.getAllByRole('img').length).toBe(2);
    });
});
