import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe(' useFetchGifs custom hook test', () => {
   test('should return initial state', () => {
    /*Act */
     const {result} = renderHook(() => useFetchGifs('Adele'));
     const {images, isLoading} = result.current;
     /*Assert */
     expect(images.length).toBe(0);
     expect(isLoading).toBeTruthy();
   });

   test('should return  the array of images', async() => {
    /*Act */
     const {result} = renderHook(() => useFetchGifs('Adele'));
     await waitFor(
        ()=> expect ( result.current.images.length).toBeGreaterThan(0)
     );
     const {images, isLoading} = result.current;
     /*Assert */
     expect(images.length).toBeGreaterThan(0);
     expect(isLoading).toBeFalsy();
   });
});
