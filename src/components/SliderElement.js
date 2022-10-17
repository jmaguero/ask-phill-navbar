import "./SliderElement.scss"

export const SliderElement = ({ title, img, href }) => {
  return (
    <a className="container" href={href}>
      <h2 className="title">{title}</h2>
      <div className="shadow"></div>
      <img src={img} alt={title} />
    </a>
  )
}