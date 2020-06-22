import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createStore from "./reducks/store/store";
import { ConnectedRouter } from "connected-react-router";
import * as History from "history";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// 実行することでどこのパスにいるのかいたのかという履歴を作り出す
const history = History.createBrowserHistory();
export const store = createStore(history);

ReactDOM.render(
  // store子コンポーネントはstoreを参照できる
  <Provider store={store}>
    {/* app.component内でのurl遷移・履歴を管理する */}
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
