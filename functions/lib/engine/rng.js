import seedrandom from "seedrandom";
export function nextInt(seed, rollNo, max) {
    const rng = seedrandom(seed + ":" + rollNo);
    return Math.floor(rng() * max) + 1;
}
