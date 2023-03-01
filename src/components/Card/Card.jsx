import "./Card.css";

const Card = (props) => {
  const { src, title, subtitle } = props;

  return (
    <div className="card">
      <img src={src} alt="props.title" className="card__image" />
      <p className="card__title">{title}</p>
      <p className="card__subtitle">{subtitle}</p>
    </div>
  );
}

export default Card;
