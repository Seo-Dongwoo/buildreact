import { createStore } from "./redux.js";
import { reducer } from "./reducer.js";
import * as Actions from "./actions.js";

const store = createStore(reducer);

store.subscribe(function () {
  console.log("sub => ", store.getState());
});

store.dispatch(Actions.increase());
console.log("dis => ", store.getState());
store.dispatch(Actions.increase());
console.log("dis => ", store.getState());
store.dispatch(Actions.increase());
console.log("dis => ", store.getState());
store.dispatch(Actions.decrease());
console.log("dis => ", store.getState());
store.dispatch(Actions.reset());
console.log("dis => ", store.getState());
// dispatch 함수에 넘겨주는 Action 객체는 구조가 약속되어 있다.

// store.dispatch(increase()) 에서 increase()안에 값을 넣어주면 그 값은 payload에 들어간다.
// 이처럼 호출 지연이라고 하는 테크닉을 쓸 수 있는 Curry 함수의 특징이기도 한다.
// 훨씬 더 유연한 코딩을 할 수 있다.
