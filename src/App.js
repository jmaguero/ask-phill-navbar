import { useState } from 'react';
import './App.scss';
import { MenuItem, NavBar, Slider } from './components';

function App() {
  const [open, setOpen] = useState(false)

  console.log(open)

  // const categories = [
  //   {
  //     category: "Daily",
  //     type: [
  //     ],
  //   }]

  const categories = [
    { name: "Sports", items: [{ id: 1, name: "socks", quantity: 35 }, { id: 1, name: "socks", quantity: 35 }, { id: 1, name: "socks", quantity: 35 }] },
    { name: "Sports", items: [{ id: 1, name: "socks", quantity: 35 }, { id: 1, name: "socks", quantity: 35 }, { id: 1, name: "socks", quantity: 35 }] },
    { name: "Sports", items: [{ id: 1, name: "socks", quantity: 35 }, { id: 1, name: "socks", quantity: 35 }, { id: 1, name: "socks", quantity: 35 }] },
  ]

  return (
    <div>
      <NavBar toggle={() => setOpen(!open)} />

      {open && <div className="menu">
        <Slider />

        {categories.map(category => <MenuItem list={category} />)}
      </div>}
    </div>
  )
}

export default App;
