import { useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";
import InputText from "./atoms/InputText";

function CoordinatesInputs({ countryModeSelection, setSelectedCountry }) {
  const { coordinates, setCoordinates, findNearestCountry, countries } =
    useAppContext();

  const handleCoordinateChange = (field, value) => {
    const newCoordinates = { ...coordinates, [field]: value };
    setCoordinates(newCoordinates);

    if (newCoordinates.lat && newCoordinates.lng) {
      const nearestCountry = findNearestCountry(
        newCoordinates.lat,
        newCoordinates.lng
      );

      if (nearestCountry) {
        console.log("Paese più vicino trovato:", nearestCountry.name);
        const countryId = nearestCountry.name
          .toLowerCase()
          .replace(/\s+/g, "-");
        setSelectedCountry(countryId);
      }
    }
  };

  useEffect(() => {
    console.log("COUNTRIES", countries);
  }, [countries]);

  return (
    <div
      className={`flex w-full flex-col gap-4 ${countryModeSelection !== "coordinates" ? "cursor-not-allowed opacity-50" : ""}`}
    >
      <InputText
        label={"Latitude"}
        value={coordinates.lat}
        onChange={(e) => handleCoordinateChange("lat", e.target.value)}
        disabled={countryModeSelection !== "coordinates"}
      />
      <InputText
        label={"Longitude"}
        value={coordinates.lng}
        onChange={(e) => handleCoordinateChange("lng", e.target.value)}
        disabled={countryModeSelection !== "coordinates"}
      />
    </div>
  );
}

export default CoordinatesInputs;
