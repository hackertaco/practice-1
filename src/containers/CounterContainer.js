import React from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, setDiff } from "../modules/counter";
function CounterContainer() {
  const { number, diff } = useSelector((state) => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }));
  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));
  return (
    <Counter
      onDecrease={onDecrease}
      onIncrease={onIncrease}
      number={number}
      diff={diff}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;
