function factorio(a) {
  if (a == 0 || a == 1) {
      return 1;
  } else {
    return factorio (a - 1) * a;
  }
}
console.log(factorio(5));