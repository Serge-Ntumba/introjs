import React, { Component } from "react";
import { Steps } from "intro.js-react";
import "intro.js/introjs.css";

export default class Onboarding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stepsEnabled: true,
      initialStep: 0,
      steps: [
        {
          element: ".hello",
          intro: "Hello step",
        },
        {
          element: ".world",
          intro: "World step",
        },
      ],
      hintsEnabled: true,
      hints: [
        {
          element: ".hello",
          hint: "Hello hint",
          hintPosition: "middle-right",
        },
      ],
    };
  }
  render() {
    const { stepsEnabled, steps, initialStep } = this.state;

    return (
      <div>
        <Steps
          enabled={stepsEnabled}
          steps={steps}
          initialStep={initialStep}
          onExit={this.onExit}
        />

        <h1 className="hello">Hello,</h1>
        <hr />
        <h1 className="world">World!</h1>
        <hr />
        <h1 className="alive">It's alive!</h1>
      </div>
    );
  }
}
