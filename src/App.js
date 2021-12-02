import React, { useState } from "react";
import "intro.js/introjs.css";
import { Steps, Hints } from "intro.js-react";
import "./App.css";

const OnbordingData = {
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

function App() {
  const [state, setState] = useState(OnbordingData);

  const onExit = () => {
    setState(() => ({ stepsEnabled: false }));
  };

  const toggleSteps = () => {
    setState((prevState) => ({ stepsEnabled: !prevState.stepsEnabled }));
  };

  const addStep = () => {
    const newStep = {
      element: ".alive",
      intro: "Alive step",
    };

    setState((prevState) => ({ steps: [...prevState.steps, newStep] }));
  };

  const toggleHints = () => {
    setState((prevState) => ({ hintsEnabled: !prevState.hintsEnabled }));
  };

  const addHint = () => {
    const newHint = {
      element: ".alive",
      hint: "Alive hint",
      hintPosition: "middle-right",
    };

    setState((prevState) => ({ hints: [...prevState.hints, newHint] }));
  };
  return (
    <div className="App">
      <Steps
        enabled={state.stepsEnabled}
        steps={state.steps}
        initialStep={state.initialStep}
        onExit={onExit}
      />
      <Hints enabled={state.hintsEnabled} hints={state.hints} />

      <div className="controls">
        <div>
          <button onClick={toggleSteps}>Toggle Steps</button>
          <button onClick={addStep}>Add Step</button>
        </div>
        <div>
          <button onClick={toggleHints}>Toggle Hints</button>
          <button onClick={addHint}>Add Hint</button>
        </div>
      </div>

      <h1 className="hello">Hello,</h1>
      <hr />
      <h1 className="world">World!</h1>
      <hr />
      <h1 className="alive">It's alive!</h1>

      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
    </div>
  );
}

export default App;
