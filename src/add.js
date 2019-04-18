function add(left, right, defaultVal) {
  if (typeof defaultVal === "number") {
    return defaultVal;
  }
  return left + right;
}
export { add };
