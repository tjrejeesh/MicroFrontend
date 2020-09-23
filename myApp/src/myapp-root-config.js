import { registerApplication, start } from "single-spa";

/*registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});*/

// registerApplication({
//   name: "@myapp/navbar",
//   app: () => System.import("@myapp/navbar"),
//   activeWhen: ["/"]
// });

registerApplication({
    name: "@myapp/platform",
    app: () => System.import("@myapp/platform"),
    activeWhen: ["/"],
});

registerApplication({
    name: "@myapp/react-app",
    app: () => System.import("@myapp/react-app"),
    activeWhen: ["/one"],
});

registerApplication({
    name: "@myapp/react-app-two",
    app: () => System.import("@myapp/react-app-two"),
    activeWhen: ["/two"],
});

start({
  urlRerouteOnly: true,
});
