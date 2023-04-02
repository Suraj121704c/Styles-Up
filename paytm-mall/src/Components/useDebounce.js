import { useRef } from "react";

const useDebounce = (func, delay) => {
  let { current: id } = useRef();
  return (movie) => {
    id && clearTimeout(id);
    id = setTimeout(() => {
      func(movie);
    }, delay);
  };
};

export default useDebounce;
