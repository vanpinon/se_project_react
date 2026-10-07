import "./ModalWithForm.css";
import CloseIcon from "../../images/close.svg";

function ModalWithForm({
  children,
  title,
  buttonText,
  activeModal,
  handleCloseClick,
  handleOverlayClick,
}) {
  return (
    <div
      className={`modal ${activeModal === "Add garment" ? "modal_opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          className="modal__close"
          type="button"
          onClick={handleCloseClick}
        >
          <img className="modal__close-icon" src={CloseIcon} alt="Close icon" />
        </button>
        <form className="modal__form">
          {children}
          <button className="modal__submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
