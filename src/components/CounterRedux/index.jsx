import { useDispatch, useSelector } from "react-redux";
import { StBoxContainer, StButton } from "../../global/styled";
import { addCounter, decreaseCounter } from "../../store/slices/counterSlice";

const CounterRedux = () => {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state.counterSlice);
  return (
    <StBoxContainer>
      <h1>Counter Redux</h1>
      <h3>Contador: {counter}</h3>
      <StButton onClick={() => dispatch(addCounter(1))}>Somar + 1</StButton>
      <StButton onClick={() => dispatch(decreaseCounter())}>
        Diminuir + 1
      </StButton>
    </StBoxContainer>
  );
};

export default CounterRedux;
