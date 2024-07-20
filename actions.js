export const inc = () => ({ type: "INCREMENT" });
export const decr = () => ({ type: "DECREMENT" });
export const rnd = (value) => ({ type: "RANDOM", payload: value });