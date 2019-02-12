export function anagram(s1, s2){
     s1 = s1.toLowerCase();
     s2 = s2.toLowerCase();
    return s1.split("").sort().join("") === s2.split("").sort().join("");
  }

  console.log(anagram("Spar", "raps"));

