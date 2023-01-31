const country = ["ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn", "co", "cu", "cz", "de", "eg", "fr", "gb", "gr", "hk", "hu", "id", "ie", "il", "in", "it", "jp", "kr", "lt", "lv", "ma", "mx", "my", "ng", "nl", "no", "nz", "ph", "pl", "pt", "ro", "rs", "ru", "sa", "se", "sg", "si", "sk", "th", "tr", "tw", "ua", "us", "ve", "za"]
const category = ["business", "entertainment", "general", "health", "science", "sports", "technology"]

const countryDrop = document.getElementById('countryDrop');
const categoryDrop = document.getElementById('categoryDrop');

async function renderList() {
  for (let i = 0; i < country.length; i++) {
    const option = document.createElement('option');
    option.value = country[i];
    option.textContent = country[i].toLocaleUpperCase();
    countryDrop.append(option);
  }
  for (let i = 0; i < category.length; i++) {
    const option = document.createElement('option');
    option.value = category[i];
    option.textContent = category[i].toLocaleUpperCase();
    categoryDrop.append(option);
  }
}
renderList();
