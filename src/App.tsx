import React from 'react';
import './App.css';

interface Props {
  name?: String;
}

function App(props: Props) {
  console.log(props);
  return (
    <div className="App">Hello this is a type script Boiler plate project</div>
  );
}

export default App;
