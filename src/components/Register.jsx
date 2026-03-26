import { useState, useRef } from "react";

// let count = 0; // 여러개의 같은 컴포넌트가 하나의 변수 공유하게 되는 문제

const Register = () => {
  const [input, setInput ] = useState({
    name: "",
    birth: "",
    country: "",
    bio:"",
  })

  const countRef = useRef(0); // 값이 변경되어도 리렌더링 X
  let count = 0;

  const inputRef = useRef();

  // 통합 이벤트 핸들러
  const onChange = (e) => {
    countRef.current++;
    count++;
    console.log(count, countRef);
    setInput({
      ...input,
      [e.target.name]: e.target.value, // JavaScript에서 객체 리터럴의 키를 동적으로 지정할 때 []를 사용 
    });
  };

  const onSubmit = () => {
    if(input.name === "") {
      // 이름을 입력하는 DOM 요소에 포커스
      inputRef.current.focus();
    }
  }

  return (
    <div>
      <div>
        <input ref={inputRef} name="name" value={input.name} onChange={onChange} placeholder={"이름"} />
      </div>

      <div>
        <input name="birth" value={input.birth} onChange={onChange} type="date" /> 
      </div>

      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value="" />
          <option value="kr">한국</option>
          <option value="us">일본</option>
          <option value="jp">미국</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange}/>
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  )
}

export default Register;