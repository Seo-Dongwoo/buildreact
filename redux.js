export const actionCreator = (type) => (payload) => ({
  type,
  payload,
});
// Currying 기법
// 함수의 인자가 여러 개 있을 떄 각각의 인자를 할당하는 여러 개의 내부 함수로 쪼개는 것
// 데이터를 payload라고 하는 키에다가 많이 넣는다.

export function createStore(reducer) {
  let state;
  let handlers = [];
  // 여러개의 함수가 구독을 할 수 있을테니 그 구독 함수들을 배열에 저장
  // 구독기들을 handlers라는 변수로 지칭

  function dispatch(action) {
    state = reducer(state, action);
    handlers.forEach((handler) => handler());
  }
  // 변한 상태를 보내는 함수

  function subscribe(handler) {
    handlers.push(handler);
  }
  // 데이터가 바뀌면 이 함수를 호출

  function getState() {
    return state;
  }
  // 상태를 제공하는 함수

  return {
    dispatch,
    getState,
    subscribe,
  };
}
// 바깥쪽에서는 state에 직접적으로 접근 할 수 없다.
// 수정할 수 있는 방법을 createStore가 제공해야한다.
// 제공하는 것은 createStore가 state의 구조를 알고 있다는 전제가 있어야한다.
// 상태의 구조는 어플리케이션 개발자들이 알기 때문에 개발자들은 상태를 변경하는 로직을 작성 해야한다.
