import Router from "preact-router";
import { h, render, Component } from "preact";

//import Page from "./Page/Page";
import "./App.css";
import Login from "./Page/Login/Login";
import Steps from "./Page/Steps/Steps";
import Phone from "./Page/Phone/Phone";
import Footer from "./Footer/Footer";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: false,
      step: 0
    };
  }

  setLogin(isLoggedIn) {
    this.setState({ isLogged: isLoggedIn });
  }

  setStep(stepNumber) {
    this.setState({ step: stepNumber });
  }

  render() {
    return (
      <div id="root">
        <div class="page">
          {this.state.isLogged && <Steps step={this.state.step} />}
          <Router>
            <Login path="/" setLogin={this.setLogin.bind(this)} />
            <Phone path="/phone" setStep={this.setStep.bind(this)} />
            {/* <Phone path="/name" /> */}
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
