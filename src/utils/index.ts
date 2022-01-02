import * as hdf5 from "h5wasm";

export function makeid(length: number) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function reshapeArray(array: any[], dimension: number) {
  const tmp = [];
  for (let i = 0; i < array.length; i += dimension) {
    tmp.push(array.slice(i, i + dimension));
  }
  return tmp;
}
