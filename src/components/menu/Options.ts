type GameOption = {
  seconds: Number;
  increment?: Number;
};

export const options: Array<GameOption> = [
  {
    seconds: 30 * 60,
  },
  {
    seconds: 15 * 60,
  },
  {
    seconds: 10 * 60,
  },
  {
    seconds: 5 * 60,
  },
  {
    seconds: 3 * 60,
  },
  {
    seconds: 1 * 60,
  },
  {
    seconds: 15 * 60,
    increment: 10,
  },
  {
    seconds: 10 * 60,
    increment: 5,
  },
  {
    seconds: 5 * 60,
    increment: 2,
  },
  {
    seconds: 3 * 60,
    increment: 2,
  },
  {
    seconds: 2 * 60,
    increment: 1,
  },
  {
    seconds: 1 * 60,
    increment: 1,
  },
];
