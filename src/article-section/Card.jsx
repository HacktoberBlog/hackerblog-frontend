  import './card.css';
 function Card(props) {
  return (
    <>
    <div className="card">
      <img src={props.img} alt="Card" />
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
      <button>Read More</button>
    </div>
    </>
  );

}
export default Card;

