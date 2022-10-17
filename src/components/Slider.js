import { SliderElement } from "./SliderElement"
import "./Slider.scss"
import dagelijks from "@/../../public/assets/dagelijks.jpg"
import sport from "@/../../public/assets/sport.jpg"
import wandelen from "@/../../public/assets/wandelen.jpg"
import reizen from "@/../../public/assets/reizen.jpg"
import herstellen from "@/../../public/assets/herstellen.jpg"
import medisch from "@/../../public/assets/medisch.jpg"
import skien from "@/../../public/assets/skien.jpg"



export const Slider = () => {
  const items = [
    { id: 1, title: "Dagelijks", img: dagelijks },
    { id: 2, title: "Sport", img: sport },
    { id: 3, title: "Wandelen", img: wandelen },
    { id: 4, title: "Reizen", img: reizen },
    { id: 5, title: "Herstellen", img: herstellen },
    { id: 6, title: "Medisch", img: medisch },
    { id: 7, title: "Skiën", img: skien }
  ]

  return (
    <div className="slider">
      {items.map((i) =>
        <SliderElement key={i.id} title={i.title} img={i.img} href={"#"} />
      )}
    </div>
  )
}