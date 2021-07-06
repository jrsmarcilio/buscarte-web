module.exports = function formatArtistName(name) {
  const firstLetterCapital = name
    .toLowerCase()
    .replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());

  const separateName = firstLetterCapital.split(" ");
  const nameAndSurname = separateName[0] + " " + separateName[1];

  if (separateName.length === 1) return firstLetterCapital;

  const verifySurname = separateName[1].split("");

  if (verifySurname.length <= 3) {
    separateName[1] = separateName[1].toLowerCase();
    return separateName.join(" ");
  }

  return nameAndSurname;
};
