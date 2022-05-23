import React from "react";
import { CandidateCard, Header, Main, Select } from "../components";
import { ICity, cities } from "../data/allCities";
import Box from "@material-ui/core/Box";

const ReactElections = () => {
  const [selectedCity, setSelectedCity] = React.useState<ICity>(cities[0]);

  const handleSelectedCity = (cityName: string) => {
    const index = cities.findIndex((city) => city.name === cityName);
    setSelectedCity(cities[index]);
  };

  return (
    <>
      <Header>ReactElections</Header>;
      <Main>
        <div className="container mx-auto p-4">
          <h2>Escolha o município</h2>
          <Select
            cities={cities}
            selectedCity={selectedCity}
            handleSelectedCity={handleSelectedCity}
          />
          <Box className="text-align: text-center font-bold">{`Eleição em ${selectedCity.name}`}</Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            padding="8px 16px"
            width="500px"
          >
            <Box>{`Total de eleitores: ${selectedCity.votingPopulation}`}</Box>
            <Box>{`Abstenção: ${selectedCity.absence}`}</Box>
            <Box>{`Comparecimento: ${selectedCity.presence}`}</Box>
          </Box>
          <Box>
            <CandidateCard />
          </Box>
        </div>
      </Main>
    </>
  );
};

export default ReactElections;
