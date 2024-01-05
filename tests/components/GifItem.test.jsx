import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Tests on GifItem', () => {

    const title = 'Dragon Ball';
    const url = 'https://www.genbeta.com/';

    test('should to match with the snapshot', () => {
        const {container} = render(<GifItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();
    });

    test('should to display the image with the url and the ALT indicated', () => {
        render(<GifItem title={title} url={url}/>);
        //screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(alt);

        const {src, alt} = screen.getByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(title)
    });
    
    test('should to display the title in the component', () => {
        render(<GifItem title={title} url={url}/>);
        expect(screen.getByText(title))
    });
})
