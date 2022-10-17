import { SliderElement } from "./SliderElement"
import "./Slider.scss"
import dagelijks from "@/../../public/assets/dagelijks.jpg"
import sport from "@/../../public/assets/sport.jpg"
import wandelen from "@/../../public/assets/wandelen.jpg"
import reizen from "@/../../public/assets/reizen.jpg"
import herstellen from "@/../../public/assets/herstellen.jpg"
import medisch from "@/../../public/assets/medisch.jpg"
import skien from "@/../../public/assets/skien.jpg"

//TODO map


export const Slider = () => {
  const items = [
    { title: "Dagelijks", img: dagelijks },
    { title: "Sport", img: sport },
    { title: "Wandelen", img: wandelen },
    { title: "Reizen", img: reizen },
    { title: "Herstellen", img: herstellen },
    { title: "Medisch", img: medisch },
    { title: "Skiën", img: skien }
  ]

  return (
    <div className="slider">
      {items.map((i) =>
        <SliderElement title={i.title} img={i.img} href={"#"} />
      )}
    </div>
  )
}