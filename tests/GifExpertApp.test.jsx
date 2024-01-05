import { render, screen } from "@testing-library/react";
import GifExpertApp from "../src/GifExpertApp";

describe('Tests on GifExpertApp', () => {
    test('should ', () => {
        const {container} = render(<GifExpertApp/>);
        screen.debug();

        expect(container).toMatchSnapshot();
    }); 
});
