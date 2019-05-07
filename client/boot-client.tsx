import "./css/site.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import * as RoutesModule from "./routes";
import { BrowserRouter } from "react-router-dom";
let routes = RoutesModule.routes;

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href")!;

function renderApp() {
  // This code starts up the React app when it runs in a browser. It sets up the routing configuration
  // and injects the app into a DOM element.
  const renderMethod = !!module.hot ? ReactDOM.render : ReactDOM.hydrate;
  renderMethod(
    <AppContainer>
      <BrowserRouter basename={baseUrl} children={routes} />
    </AppContainer>,
    document.getElementById("react-app")
  );
}

renderApp();

// Allow Hot Module Replacement
if (module.hot) {
  module.hot.accept("./routes", () => {
    routes = require<typeof RoutesModule>("./routes").routes;
    renderApp();
  });
}
