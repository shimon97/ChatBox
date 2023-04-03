import "./App.css";
import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { MAIN_STORE, history } from "./store";
import { ChatPage } from "./pages/ChatPage/ChatPage";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { useDispatch, useSelector } from "react-redux";
import { initialApp, leaveChat } from "./store/thunk";
import { LoaderWrapper } from "./App.styles";
import { RotatingLines } from "react-loader-spinner";
import { ROUTES } from "./constants/routes";

const App = () => {
  const dispatch = useDispatch();
  const { initialLoading } = useSelector((state) => state[MAIN_STORE]);

  useEffect(() => {
    history.replace({ to: "/" });
    dispatch(initialApp());
  }, [dispatch]);

  // disconnect the scoket on refresh or closing tab
  window.onbeforeunload = () => {
    dispatch(leaveChat());
  };

  return (
    <>
      {initialLoading && (
        <LoaderWrapper>
          <RotatingLines
            strokeColor="#007AFF"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </LoaderWrapper>
      )}
      <ConnectedRouter history={history}>
        <Switch>
          {!initialLoading && (
            <Route path={ROUTES.CHAT} exact>
              <ChatPage />
            </Route>
          )}
          <Route path={ROUTES.ERROR} exact>
            <ErrorPage />
          </Route>
          <Redirect to={ROUTES.INDEX} />
        </Switch>
      </ConnectedRouter>
    </>
  );
};

export default App;
