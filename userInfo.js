// Task three

function createUserProfiles(string, modifiedNames) {
  let id = 1;
  return string.map((originalName, index) => {
    return {
      originalName,
      modifiedName: modifiedNames[index] || "",
      id: id++,
    };
  });
}
const string = ["kofi", "ama", "efia", "maame", "kojo", "kwame"];
const modifiedNames = ["Kofi", "Ama", "", "MAAME", "koJO", "KWAME"];
const userProfiles = createUserProfiles(string, modifiedNames);
console.log(userProfiles);
