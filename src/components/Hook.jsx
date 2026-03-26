import useInput from "../hooks/useInput";

// 1. hook은 반드시 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// const state = useState();

const Hook = () => {
  const [input, onChnage] = useInput();

  // 2. 조건부로 호출될 수는 없다
  // if(true) {
  //   const state = useState();
  // }

  return (
    <div>
      <h1>Hook</h1>
      <input value={input} onChange={onChnage}></input>
    </div>
  );
}

export default Hook;