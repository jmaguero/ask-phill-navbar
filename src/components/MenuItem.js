import { useState } from "react"

export const MenuItem = ({ list }) => {

  const [open, setOpen] = useState(false)

  return (
    <div>
      <h2>{list.name} DOWNARROW</h2> <button onClick={() => setOpen(!open)}>{open ? "-" : "+"}</button>
      {list.items.map(e => {
        return open && <div>
          <h3>{e.name}</h3>
          <h4>{e.quantity} products</h4>
        </div>
      })}
    </div>
  )
}