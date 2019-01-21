function factorio(a: number) {
    //If statement for numbers that don't have factorials
    if (a == 0 || a == 1) {
      return 1;
  } else {
    return factorio (a - 1) * a;
  }
}
console.log(factorio(5));