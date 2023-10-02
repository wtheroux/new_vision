import { Provider } from "react-redux";
import { store } from "../store/index";

export const withStore = (component: () => React.ReactNode) => () => <Provider store={store}>{component()}</Provider>;