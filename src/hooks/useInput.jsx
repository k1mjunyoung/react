import { useState } from "react";

// 3. use 접두사로 커스텀 훅을 직접 만들 수 있디
function useInput() {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useInput;