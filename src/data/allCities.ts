interface ICity {
  id: string;
  name: string;
  votingPopulation: number;
  absence: number;
  presence: number;
}

export const cities: ICity[] = [
  {
    id: "680df3f5-c5bf-48ae-bda0-5b667fd89197",
    name: "Gotham",
    votingPopulation: 1859005,
    absence: 185900,
    presence: 1673105,
  },
  {
    id: "a27c86ce-d99a-4f4f-8cbb-37302754734e",
    name: "Asgard",
    votingPopulation: 1850577,
    absence: 111034,
    presence: 1739543,
  },
  {
    id: "a7abb068-5ba0-4ec0-80e5-415219416c4a",
    name: "Themyscira",
    votingPopulation: 1625877,
    absence: 146328,
    presence: 1479549,
  },
  {
    id: "bfb650fc-ff1c-41ce-92ba-372c43cb21e5",
    name: "Metropolis",
    votingPopulation: 1107096,
    absence: 99638,
    presence: 1007458,
  },
  {
    id: "d2dab6a2-3029-45a5-89f2-fcbaee387758",
    name: "Smallville",
    votingPopulation: 1648006,
    absence: 98880,
    presence: 1549126,
  },
];
