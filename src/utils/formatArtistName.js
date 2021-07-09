module.exports = function formatArtistName(name) {
  let firstLetterCapital = name.toLowerCase().replace(/(?:^|\s)\S/g, (a) =>
    a.toUpperCase());

  let separateName = firstLetterCapital.split(" ");
  let nameAndSurname = separateName[0] + " " + separateName[1];

  if (separateName.length === 1) return firstLetterCapital;

  let verifySurname = separateName[1].split("");

  if (verifySurname.length <= 3) {
    separateName[1] = separateName[1].toLowerCase();
    return separateName.join(" ");
  }

  return nameAndSurname;
};
