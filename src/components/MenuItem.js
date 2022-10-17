import { useState } from "react"
import "./MenuItem.scss"
import upArrow from "@/../../public/assets/up-arrow.png"
import downArrow from "@/../../public/assets/down-arrow.png"

export const MenuItem = ({ list }) => {

  const [open, setOpen] = useState(false)

  return (
    <div >
      <div className="menu-item" onClick={() => setOpen(!open)}>
        <h2>{list.name.toUpperCase()}</h2>
        <div>{!open ? <img className="arrow" src={downArrow} alt="Expand category" /> : <img className="arrow" src={upArrow} alt="Collapse category" />}</div>
      </div>
      {list.items.map(e => {
        return open && <div className="menu-item" key={e.id}>
          <h4>{e.name.toUpperCase()}</h4>
          <h5>{e.quantity} products</h5>
        </div>
      })}
    </div >
  )
}