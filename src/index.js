import { h, render } from "preact";
import "./index.css";
import App from "./components/App";

render(<App />, document.body);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then(registration => {
        console.log("SW registered: ", registration);
        registration.pushManager.subscribe({ userVisibleOnly: true });
      })
      .catch(registrationError => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
