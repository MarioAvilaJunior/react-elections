export interface ICandidate {
  id: string;
  name: string;
  username: string;
}

export interface ICity {
  id: string;
  name: string;
  votingPopulation: number;
  absence: number;
  presence: number;
}

export interface IElection {
  id: string;
  cityId: string;
  candidateId: string;
  votes: number;
}
