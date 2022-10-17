import { useState } from 'react';
import './App.scss';
import { MenuItem, NavBar, Slider } from './components';

function App() {
  const [open, setOpen] = useState(false)

  const categories = [
    {
      id: 1,
      name: "Sports",
      items: [
        { id: 1, name: "Sport Socks", quantity: 25 },
        { id: 2, name: "Running Socks", quantity: 25 },
        { id: 3, name: "Hockey Socks", quantity: 25 },
        { id: 4, name: "Flight Socks", quantity: 25 },
        { id: 5, name: "Hikking Socks", quantity: 25 },
        { id: 6, name: "Work Socks", quantity: 25 }
      ]
    }, {
      id: 2,
      name: "Daily",
      items: [
        { id: 1, name: "Office Socks", quantity: 25 },
        { id: 2, name: "Casual Socks", quantity: 25 },
        { id: 3, name: "Winter Socks", quantity: 25 },
        { id: 4, name: "Summer Socks", quantity: 25 },
        { id: 5, name: "Spring Socks", quantity: 25 },
        { id: 6, name: "Animated Socks", quantity: 25 }
      ]
    },
  ]

  return (
    <div>
      <NavBar state={open} toggle={() => setOpen(!open)} />
      {open && <div className="menu">
        <Slider />
        {categories.map(category => <MenuItem key={category.id} list={category} />)}
      </div>}
    </div>
  )
}

export default App;
