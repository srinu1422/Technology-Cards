import './index.css'

const CardsInfo = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} container`}>
      <div>
        <h1>{title}</h1>
        <p> {description} </p>
        <div className="image">
          <img className="imgIcon" src={imgUrl} alt={title} />
        </div>
      </div>
    </li>
  )
}

export default CardsInfo
