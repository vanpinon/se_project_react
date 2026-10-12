import "./ModalWithForm.css";
import CloseIcon from "../../images/close.svg";

function ModalWithForm({
  children,
  title,
  buttonText,
  handleCloseClick,
  handleOverlayClick,
  isOpen,
  name,
}) {
  return (
    <div
      className={`modal ${isOpen ? "modal_opened" : ""} modal_type_${name}`}
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
        <form className="modal__form" name={name}>
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
