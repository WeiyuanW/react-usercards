// Class Component (Old-fashioned syntax)
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("mounted");
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +1
        </button>
      </div>
    );
  }
}

// Function Component (Modern mainstream syntax)
import { useState, useEffect } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("mounted");
  }, []);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

/*
Functional components, due to their lack of classes and the absence of `this`, 
have a simpler structure and are therefore easier to optimize.

All React optimizations since 2020 have revolved around the design of Functions and Hooks.

Class components represent the older generation of React (complex syntax and many limitations).

Function components represent modern React (simple, powerful, and high-performance).

The official React documentation now uses only Function components 
in all examples, documentation, and best practices.
*/