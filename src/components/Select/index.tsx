import React from "react";
import { ICity } from "../../data/allCities";

interface ISelectProps {
  cities: ICity[];
  selectedCity: ICity;
  handleSelectedCity: (cityName: string) => void;
}

const Select = (props: ISelectProps) => {
  const { cities, selectedCity, handleSelectedCity } = props;

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    handleSelectedCity(event.target.value);
  };
  return (
    <select
      className="browser-default"
      value={selectedCity.name}
      onChange={handleCityChange}
    >
      {cities.map((city) => {
        return <option key={city.id}>{city.name}</option>;
      })}
    </select>
  );
};

export { Select };
