//A ternary operator is basically an if-else statement, but shorter:

//With if-else:

if(userIsYoungerThan21) {
    serveGrapeJuice();
  }
  else {
    serveWine();
  }

  //with ternary operator:

  userIsYoungerThan21 ? serveGrapeJuice() : serveWine();