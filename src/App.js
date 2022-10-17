import { useState } from 'react';
import './App.scss';
import { NavBar, Slider } from './components';

function App() {
  const [open, setOpen] = useState(false)

  console.log(open)

  return (
    <div>
      <NavBar toggle={() => setOpen(!open)} />

      {open && <div className="menu">
        <Slider />
        <div className="menu-link" to="#">Menu Item</div>
        <div className="menu-link" to="#">Menu Item</div>
      </div>}
    </div>
  )
}

export default App;
