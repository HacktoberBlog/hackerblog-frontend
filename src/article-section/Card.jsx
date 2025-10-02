import './card.css';

function Card(props) {
  return (
    <div className="article-item">
      <img src={props.img} alt="Card" />
      <h4>{props.title}</h4>
      <p>{props.desc}</p>
      <div className="card-author">
        <span>By {props.author}</span>
      </div>
      <a className="read-more" href={props.link || "#"}>Read More</a>
    </div>
  );
}

export default Card;

