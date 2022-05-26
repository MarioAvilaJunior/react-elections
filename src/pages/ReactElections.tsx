import React from "react";
import { CandidateCard, Header, Main, Select } from "../components";
import {
  ICity,
  ICandidate,
  IElection,
} from "../../backend-react-elections/interfaces";
import Box from "@material-ui/core/Box";
import { CountCandidates } from "../functions/CountCandidates";
import { getAllCandidates, getAllCities, getElectionFrom } from "../api/api";

const ReactElections = () => {
  const [cities, setCities] = React.useState<ICity[]>([]);
  const [candidates, setCandidates] = React.useState<ICandidate[]>([]);
  const [selectedCity, setSelectedCity] = React.useState<ICity | null>(null);
  const [selectedElection, setSelectedElection] = React.useState<IElection[]>(
    []
  );

  React.useEffect(() => {
    const getData = async () => {
      setCities(await getAllCities());
      setCandidates(await getAllCandidates());
    };
    getData();
  }, []);

  React.useEffect(() => {
    if (cities && !selectedCity) setSelectedCity(cities[0]);
    if (selectedCity) {
      const getElection = async (cityId: string) => {
        setSelectedElection(await getElectionFrom(cityId));
      };
      getElection(selectedCity.id);
    }
  }, [cities, selectedCity]);

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
          {selectedCity && (
            <>
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
                width="800px"
              >
                <Box>{`Total de eleitores: ${selectedCity.votingPopulation}`}</Box>
                <Box>{`Abstenção: ${selectedCity.absence}`}</Box>
                <Box>{`Comparecimento: ${selectedCity.presence}`}</Box>
                <Box>{`${CountCandidates(
                  selectedElection,
                  selectedCity
                )} candidatos`}</Box>
              </Box>
              <Box display="flex">
                {selectedElection &&
                  selectedElection.map(
                    (selectedElection, index, selectedElectionArray) => {
                      return (
                        <CandidateCard
                          key={selectedElection.id}
                          election={selectedElection}
                          candidates={candidates}
                          totalElectionVotes={selectedElectionArray.reduce(
                            (partialSum, election) =>
                              partialSum + election.votes,
                            0
                          )}
                          elected={index === 0}
                        />
                      );
                    }
                  )}
              </Box>
            </>
          )}
        </div>
      </Main>
    </>
  );
};

export default ReactElections;
