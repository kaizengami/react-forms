import { h, render, Component } from "preact";
import "./menu.css";

export class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.askForNotificationPermision = this.askForNotificationPermision.bind(
      this
    );
  }

  enableNotification() {
    if ("Notification" in window) {
      return true;
    }
  }
  componentDidMount() {
    this.enableNotification();
  }

  askForNotificationPermision() {
    console.log("ask For Notification Permision");
    Notification.requestPermission(result => {
      console.log("User Choice ", result);
      if (result !== "granted") {
        console.log("No notification permission granted");
      } else {
      }
    });
  }

  render() {
    return (
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />

          <span />
          <span />
          <span />

          <ul id="menu">
            <li>Settings</li>
            <button
              class={
                this.enableNotification()
                  ? "menu-button"
                  : "menu-button menu-button-disable"
              }
              onClick={this.askForNotificationPermision}
            >
              Enable notification
            </button>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;
