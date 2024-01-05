import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Tests on useFetchGifs()', () => {
    test('should to return the initial state', () => {
        const {result} = renderHook(() => useFetchGifs('Dragon Ball'));
        const {images, isLoading} = result.current;
        
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('should to return an array of images and the isLoading in false', async() => {
        const {result} = renderHook(() => useFetchGifs('Dragon Ball'));
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
            {
                timeout: 300
            }
        );
        const {images, isLoading} = result.current;
        console.log(images);
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
    
});
