import React from "react";
import { ICity } from "../../data/allCities";

interface ISelectProps {
  cities: ICity[];
  selectedCity: string;
}

const Select = (props: ISelectProps) => {
  const { cities, selectedCity } = props;
  const [city, setCity] = React.useState<string>(cities[0].name);

  React.useEffect(() => {
    setCity(selectedCity);
  }, [city, selectedCity]);

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(event.target.value);
  };
  return (
    <select
      className="browser-default"
      value={selectedCity}
      onChange={handleCityChange}
    >
      {cities.map((city) => {
        return <option key={city.id}>{city.name}</option>;
      })}
    </select>
  );
};

export { Select };
