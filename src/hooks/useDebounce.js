import {useEffect, useMemo, useState} from "react";
import {debounce} from "lodash/function";

const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value ? value : '');

  const check = useMemo((input)=>{
    return debounce((input1)=>{
      setDebounceValue(input1)
    },delay)
  },[value,delay])

  useEffect(() => {
    check(value)
    return () => {
      if(check){
        check?.cancel();
      }
    };
  }, [value, delay]);

  return debounceValue;
};

export default useDebounce;
