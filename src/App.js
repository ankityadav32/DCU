import React from 'react';
import Header from './components/Header';
import Slider from './components/Slider';
import ButtonDropdown from './components/ButtonDropdown';
import Popup from './components/Popup';
import Tester from './components/tester';
function App() {
  return (
    <div className="App" style={{ height: "2000px" }}>
      <Header />
      <Slider />
      {/* <Slider />
      <ButtonDropdown /> */}

    </div>
  );
}

export default App;
