import seedrandom from "seedrandom";
export function nextInt(seed: string, rollNo: number, max: number) {
  const rng = seedrandom(seed + ":" + rollNo);
  return Math.floor(rng() * max) + 1;
}