import { StBoxContainer, StButton } from "../../global/styled";
import ZustandStore from "../../store/StoreZustandConfig";

const CounterZustand = () => {
  const { zusCounter, addZusCounter } = ZustandStore();
  return (
    <StBoxContainer>
      <h1>Counter Zustand</h1>
      <h3>Contador: {zusCounter}</h3>
      <StButton onClick={() => addZusCounter()}>Somar + 1</StButton>
      <StButton>Diminuir + 1</StButton>
    </StBoxContainer>
  );
};

export default CounterZustand;
