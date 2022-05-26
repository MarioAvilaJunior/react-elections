import axiosObject from "axios";
import {
  ICity,
  ICandidate,
  IElection,
} from "../../backend-react-elections/interfaces";

const axios = axiosObject.create({ baseURL: "http://localhost:3001" });

const getAllCities = async (): Promise<ICity[]> => {
  const { data } = await axios.get<ICity[]>("/cities");
  return data.sort((a, b) => a.name.localeCompare(b.name));
};

const getAllCandidates = async (): Promise<ICandidate[]> => {
  const { data } = await axios.get<ICandidate[]>("/candidates");
  return data;
};

const getElectionFrom = async (cityId: string): Promise<IElection[]> => {
  const { data } = await axios.get<IElection[]>(`/election?cityId=${cityId}`);
  return data.sort((a, b) => b.votes - a.votes);
};

export { getAllCities, getAllCandidates, getElectionFrom };
