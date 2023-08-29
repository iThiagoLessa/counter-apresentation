import { Provider } from "react-redux";
import CounterRedux from "../../CounterRedux";
import CounterZustand from "../../CounterZustand";
import ReduxStore from "../../../store/StoreReduxConfig";

const MainPage = () => {
  return (
    <>
      <Provider store={ReduxStore}>
        <CounterRedux />
      </Provider>
      <CounterZustand />
    </>
  );
};

export default MainPage;
