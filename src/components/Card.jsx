
const Card = ({ nombre, descripcion }) => {
  return (
    <div className="card">
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
    </div>
  );
};

export default Card;
