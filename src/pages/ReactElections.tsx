import React from "react";
import { CandidateCard, Header, Main, Select, Spinner } from "../components";
import {
  ICity,
  ICandidate,
  IElection,
} from "../../backend-react-elections/interfaces";
import Box from "@material-ui/core/Box";
import { CountCandidates } from "../functions/CountCandidates";
import { getAllCandidates, getAllCities, getElectionFrom } from "../api/api";

export interface IElectionWithCandidate extends IElection {
  candidateName: string;
  candidateUserName: string;
}

const ReactElections = () => {
  const [cities, setCities] = React.useState<ICity[]>([]);
  const [candidates, setCandidates] = React.useState<ICandidate[]>([]);
  const [selectedCity, setSelectedCity] = React.useState<ICity | null>(null);
  const [selectedElection, setSelectedElection] = React.useState<IElection[]>(
    []
  );
  const [election, setElection] = React.useState<IElectionWithCandidate[]>([]);
  const [loadingPage, setLoadingPage] = React.useState<boolean>(true);
  const [totalElectionVotes, setTotalElectionVotes] = React.useState<number>(0);

  React.useEffect(() => {
    const getBackendData = async () => {
      const backEndData = {
        cities: await getAllCities(),
        candidates: await getAllCandidates(),
      };
      setCities(backEndData.cities);
      setCandidates(backEndData.candidates);
      setSelectedCity(backEndData.cities[0]);
      setLoadingPage(false);
    };
    getBackendData();
  }, []);

  React.useEffect(() => {
    if (selectedCity) {
      const getElection = async (cityId: string) => {
        setSelectedElection(await getElectionFrom(cityId));
      };
      getElection(selectedCity.id);
    }
  }, [selectedCity]);

  React.useEffect(() => {
    const electionWithCandidate = selectedElection.map((election) => {
      const foundCandidate =
        candidates.find((candidate) => candidate.id === election.candidateId) ??
        null;
      const result = {
        ...election,
        candidateName: foundCandidate?.name || "",
        candidateUserName: foundCandidate?.username || "",
      };
      return result;
    });
    setElection(electionWithCandidate);
  }, [candidates, selectedElection]);

  React.useEffect(() => {
    const totalElectionVotes = election.reduce(
      (accumulator, election) => (accumulator += election.votes),
      0
    );
    setTotalElectionVotes(totalElectionVotes);
  }, [election]);

  const handleSelectedCity = (cityName: string) => {
    const foundCity = cities.find((city) => city.name === cityName) ?? null;
    setSelectedCity(foundCity);
  };

  if (loadingPage) return <Spinner />;

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
                  election.map((election, index) => {
                    return (
                      <CandidateCard
                        key={election.id}
                        election={election}
                        totalElectionVotes={totalElectionVotes}
                        elected={index === 0}
                      />
                    );
                  })}
              </Box>
            </>
          )}
        </div>
      </Main>
    </>
  );
};

export default ReactElections;
