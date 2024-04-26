import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../Servicios/CardsComponent.css";

export const CardsComponent = ({ title, text, image }) => {
  return (
    <div className="col-md-3 mb-4 mt-4">
      <div className="card gray-card">
        <img src={image} className="card-img-top" alt="Card" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};


