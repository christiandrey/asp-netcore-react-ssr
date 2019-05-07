import * as React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { createServerRenderer, RenderResult } from "aspnet-prerendering";
import { routes } from "./routes";

export default createServerRenderer(params => {
  return new Promise<RenderResult>((resolve, reject) => {
    const basename = params.baseUrl.substring(0, params.baseUrl.length - 1); // Remove trailing slash

    // Prepare an instance of the application and perform an inital render that will
    // cause any async tasks (e.g., data access) to begin
    const routerContext: any = {};

    const app = <StaticRouter basename={basename} context={routerContext} location={params.location.path} children={routes} />;
    renderToString(app);

    // If there's a redirection, just send this information back to the host application
    if (routerContext.url) {
      resolve({ redirectUrl: routerContext.url });
      return;
    }

    // Once any async tasks are done, we can perform the final render
    // We also send the redux store state, so the client can continue execution where the server left off
    params.domainTasks.then(() => {
      resolve({
        html: renderToString(app),
        globals: {}
      });
    }, reject); // Also propagate any errors back into the host application
  });
});
