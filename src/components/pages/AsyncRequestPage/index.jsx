import { Provider } from "react-redux";
import AsyncRedux from "../../AsyncRedux";
import AsyncZustand from "../../AsyncZustand";
import ReduxStore from "../../../store/StoreReduxConfig";

const AsyncRequestPage = () => {
  return (
    <Provider store={ReduxStore}>
      <AsyncRedux />
      <AsyncZustand />
    </Provider>
  );
};

export default AsyncRequestPage;
