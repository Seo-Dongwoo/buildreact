import * as ActionType from "./action-type.js";

const InitiallizeState = { count: 0 };
export function reducer(state = InitiallizeState, action) {
  // do somethimg

  switch (action.type) {
    case ActionType.INCREASE:
      return { ...state, count: state.count + 1 };
    case ActionType.DECREASE:
      return { ...state, count: state.count - 1 };
    case ActionType.RESET:
      fetch("/reset")
        .then((response) => response.json())
        .then((result) => {
          if (result) {
            return { ...state, count: 0 };
          }
        });
    // reducer는 순수 함수여야 하고 이처럼 비동기적으로 코딩을 할 수 없다.
    // 미들웨어를 통해 따로 바깥쪽에서 비동기적인 처리를 해주어야 한다.
    default:
      return { ...state };
    // ...state는 얕은 복사, two daps 이상으로 상태 디자인을 하게되면 Deep copy를 해야한다.
  }
}
// 상태를 변경하는 함수
// 새로운 상태를 반환해라라고 하는 규칙이 필요
// 입력으로 상태의 객체를 줄 테니 이 객체를 항상 Deep copy해서 새로운 객체로 반환해 만들어서 즉, 참조를 끊어라
