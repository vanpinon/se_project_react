import "./ItemModal.css";
import CloseIcon from "../../images/close.svg";

function ItemModal({
  activeModal,
  card,
  handleCloseClick,
  handleOverlayClick,
}) {
  return (
    <div
      className={`modal ${activeModal === "preview" ? "modal_opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__content modal__content_type_image">
        <button
          className="modal__close"
          type="button"
          onClick={handleCloseClick}
        >
          <img className="modal__close-icon" src={CloseIcon} alt="Close icon" />
        </button>
        <img className="modal__image" src={card.link} alt="" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
