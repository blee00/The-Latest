const API_KEY = "788f135045164f3ea26f71450c56861a"
const BASE_URL = "https://newsapi.org/v2/top-headlines?"

const country = ["ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn", "co", "cu", "cz", "de", "eg", "fr", "gb", "gr", "hk", "hu", "id", "ie", "il", "in", "it", "jp", "kr", "lt", "lv", "ma", "mx", "my", "ng", "nl", "no", "nz", "ph", "pl", "pt", "ro", "rs", "ru", "sa", "se", "sg", "si", "sk", "th", "tr", "tw", "ua", "us", "ve", "za"]
const category = ["business", "entertainment", "general", "health", "science", "sports", "technology"]

const countryDrop = document.getElementById('countryDrop');
const categoryDrop = document.getElementById('categoryDrop');
const discover = document.getElementById('discover');
const display = document.getElementById('display');
const prev = document.getElementById('Prev');
const next = document.getElementById('Next');

// The below code block extracts the info from the API
async function getNews(country, category) {
  const res = await fetch(`${BASE_URL}country=${country}&${category}&apikey=${API_KEY}`)
  const json = await res.json();
  // console.log(json.articles);
  const journals = json.articles.map(({ title, author, url }) => ({ title, author, url }));
  return journals;
};

// The below code block displays the requested data
discover.addEventListener('click', async e => {
  const journals = await getNews(`${countryDrop.value}`, `${categoryDrop.value}`);
  console.log(journals);
  display.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    const a = document.createElement('a');
    if (`${journals[i].author}` == 'null') {
      a.innerText = `Title: ${journals[i].title}\n Author: N/A`;
    } else {
      a.innerText = `Title: ${journals[i].title}\n Author: ${journals[i].author}`;
    }
    a.href = `${journals[i].url}`;
    // console.log(`Title: ${journals[i].title}\n Author: ${journals[i].author}`);
    display.append(a);
  };
  // prev.classList.remove('hidden');
  next.classList.remove('hidden');
});


// The below code block displays the next set of news articles
next.addEventListener('click', async e => {
  const journals = await getNews(`${countryDrop.value}`, `${categoryDrop.value}`);
  console.log(journals);
  display.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    const a = document.createElement('a');
    if (`${journals[i].author}` === 'null') {
      a.innerText = `Title: ${journals[i + 5].title}\n Author: N/A`;
    } else {
      a.innerText = `Title: ${journals[i + 5].title}\n Author: ${journals[i + 5].author}`;
    }
    a.href = `${journals[i + 5].url}`;
    display.append(a);
    prev.classList.remove('hidden');
  }
}) // It stops at the second page, you'll see why

// The below code block displats the prev set of news articles



// Code that translates text from whatever language it's in to english
async function googleTranslateElementInit() {
  new google.translate.TranslateElement({ pageLanguage: 'fy' }, 'google_translate_element');
}

// renderList() creates a dropdown, based on the hard coded arrays, for both countryDrop and categoryDrop
async function renderList() {
  for (let i = 0; i < country.length; i++) {
    const option = document.createElement('option');
    option.value = country[i];
    option.textContent = country[i].toLocaleUpperCase();
    countryDrop.append(option);
  };
  for (let i = 0; i < category.length; i++) {
    const option = document.createElement('option');
    option.value = category[i];
    option.textContent = category[i].toLocaleUpperCase();
    categoryDrop.append(option);
  };
};
renderList();

