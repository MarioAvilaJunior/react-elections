import React from "react";
import { CandidateCard, Header, Main, Select } from "../components";
import { cities } from "../data/allCities";
import Box from "@material-ui/core/Box";

const ReactElections = () => {
  const [selectedCity, setSelectedCity] = React.useState<string>(
    cities[0].name
  );

  return (
    <>
      <Header>ReactElections</Header>;
      <Main>
        <div className="container mx-auto p-4">
          <h2>Escolha o município</h2>
          <Select cities={cities} selectedCity={selectedCity} />
          <Box>
            <CandidateCard />
          </Box>
        </div>
      </Main>
    </>
  );
};

export default ReactElections;
