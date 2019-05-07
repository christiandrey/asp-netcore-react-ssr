import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

type CounterProps = RouteComponentProps<{}>;

type CounterState = {
  counter: number;
};

export default class Counter extends React.Component<CounterProps, CounterState> {
  /**
   *
   */
  constructor(props: Readonly<CounterProps>) {
    super(props);

    this.state = { counter: 0 } as CounterState;
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  public render() {
    return (
      <div>
        <h1>Counter</h1>

        <p>This is a simple example of a React component.</p>

        <p>
          Current count: <strong>{this.state.counter}</strong>
        </p>

        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
