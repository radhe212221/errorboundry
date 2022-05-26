import React from 'react';
import './style.css';

export default function App() {
  return (
    <>
      <Safe>
        <Comp x={1} />
      </Safe>
      <Safe>
        <Comp x={2} />
      </Safe>
      <Safe>
        <Comp x={3} />
      </Safe>
      <Safe>
        <Comp x={4} />
      </Safe>
      <Safe>
        <Comp x={5} />
      </Safe>
      <Safe>
        <Comp x={6} />
      </Safe>
      <Safe>
        <Comp x={7} />
      </Safe>
      <Safe>
        <Comp x={8} />
      </Safe>
      <Safe>
        <Comp x={9} />
      </Safe>
      <Safe>
        <Comp x={10} />
      </Safe>
      <h2>other peice of code</h2>
    </>
  );
}

const Comp = (props) => {
  if (props?.x < 4) {
    throw new Error('invalid');
  } else {
    return <strong>{props?.x}</strong>;
  }
};

class Safe extends React.Component {
  state = { hasError: false };
  componentDidCatch(err, cause) {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <mark>404</mark>;
    } else {
      this.props.children;
    }
  }
}
