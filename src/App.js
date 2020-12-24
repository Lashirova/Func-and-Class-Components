import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
const App = () => {
  const [height, setHeight] = React.useState(0);
  const [wat, setWat] = React.useState(0);

  const measuredRef = React.useCallback(node => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, [wat]);

  return (
    <div>
      <Greet />
      <Welcome />
    </div>
  );
}

ReactDOM.render(
  <div className="App">
    <App/>
  </div>,
  document.getElementById('root')
);
