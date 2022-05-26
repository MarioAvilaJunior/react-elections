import { ICandidate, ICity, IElection } from "./interfaces";

const uuid = require("uuid").v4;
const fs = require("fs").promises;

async function start() {
  const cities: ICity[] = [];
  const candidates: ICandidate[] = [];
  const election: IElection[] = [];
  fs.writeFile(
    "./elections.json",
    JSON.stringify(
      {
        cities: cities.sort((a, b) => a.id.localeCompare(b.id)),
        candidates: candidates.sort((a, b) => a.id.localeCompare(b.id)),
        election: election.sort((a, b) => a.id.localeCompare(b.id)),
      },
      null,
      2
    )
  );
}

start();
