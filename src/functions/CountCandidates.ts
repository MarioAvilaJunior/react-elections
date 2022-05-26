import { ICity, IElection } from "../../backend-react-elections/interfaces";

const CountCandidates = (
  elections: IElection[],
  selectedCity: ICity
): number => {
  const checkSelectedCityId = (election: IElection) => {
    return election.cityId === selectedCity.id;
  };

  return elections.filter(checkSelectedCityId).length;
};

export { CountCandidates };
