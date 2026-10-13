import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";
import { coordinates, apiKey } from "../../utils/constants.js";
import { defaultClothingItems } from "../../utils/clothingItems.js";

function App() {
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);

  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("Add garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleOverlayClick = (e) => {
    e.target === e.currentTarget && closeActiveModal();
  };

  useEffect(() => {
    function handleEscClose(e) {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    }
    document.addEventListener("keydown", handleEscClose);
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, []);

  useEffect(() => {
    getWeather(coordinates, apiKey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />
        <Main
          weatherData={weatherData}
          handleCardClick={handleCardClick}
          clothingItems={clothingItems}
        />
        <Footer />
      </div>
      <ModalWithForm
        title="New garment"
        buttonText="Add garment"
        handleCloseClick={closeActiveModal}
        handleOverlayClick={handleOverlayClick}
        isOpen={activeModal === "Add garment"}
        name="Add garment"
      >
        <label className="modal__label" htmlFor="name">
          Name{""}
          <input
            className="modal__input"
            type="text"
            id="name"
            placeholder="Name"
          />
        </label>
        <label className="modal__label" htmlFor="imageUrl">
          Image{""}
          <input
            className="modal__input"
            type="url"
            id="imageUrl"
            placeholder="Image URL"
          />
        </label>
        <fieldset className="modal__radio-btns">
          <legend className="modal__legend">Select the weather type:</legend>
          <label className="modal__label modal__label_type_radio">
            <input
              className="modal__radio-input"
              type="radio"
              name="weather"
              value="hot"
              id="hot"
            />
            Hot
          </label>
          <label className="modal__label modal__label_type_radio">
            <input
              className="modal__radio-input"
              type="radio"
              name="weather"
              value="warm"
              id="warm"
            />
            Warm
          </label>
          <label className="modal__label modal__label_type_radio">
            <input
              className="modal__radio-input"
              type="radio"
              name="weather"
              value="cold"
              id="cold"
            />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
      <ItemModal
        card={selectedCard}
        handleCloseClick={closeActiveModal}
        handleOverlayClick={handleOverlayClick}
        isOpen={activeModal === "preview"}
      />
    </div>
  );
}

export default App;
