const API_KEY = "788f135045164f3ea26f71450c56861a"
const PROXY = "https://cors-proxy-k7a5pa4az44r.runkit.sh"
const BASE_URL = `${PROXY}/newsapi.org/v2/top-headlines?`
const country = ["ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn", "co", "cu", "cz", "de", "eg", "fr", "gb", "gr", "hk", "hu", "id", "ie", "il", "in", "it", "jp", "kr", "lt", "lv", "ma", "mx", "my", "ng", "nl", "no", "nz", "ph", "pl", "pt", "ro", "rs", "ru", "sa", "se", "sg", "si", "sk", "th", "tr", "tw", "ua", "us", "ve", "za"]
const category = ["Business", "Entertainment", "General", "Health", "Science", "Sports", "Technology"]


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
    if (`${journals[i].author}` === 'null') {
      a.innerText = `Title: ${journals[i].title}\nAuthor: N / A`;
    } else {
      a.innerText = `Title: ${journals[i].title}\nAuthor: ${journals[i].author}`;
    }
    a.href = `${journals[i].url}`;
    a.target = "_blank";
    display.append(a);
  };
  // prev.classList.remove('hidden');
  next.classList.remove('hidden');
});


// The below code block displays the next set of news articles
const size = 5;
let current = 1;
let newJournals = '';
next.addEventListener('click', async e => {
  const journals = await getNews(`${countryDrop.value}`, `${categoryDrop.value}`);
  if (current >= 1 && current < journals.length / size) {
    current++;
    newJournals = journals.slice(size * current - size, size * current);
  }
  console.log(newJournals);
  display.innerHTML = '';
  for (let i = 0; i < newJournals.length; i++) {
    const a = document.createElement('a');
    if (`${newJournals[i].author}` === 'null') {
      a.innerText = `Title: ${newJournals[i].title}\nAuthor: N / A`;
    } else {
      a.innerText = `Title: ${newJournals[i].title}\nAuthor: ${newJournals[i].author}`;
    }
    a.href = `${newJournals[i].url}`;
    a.target = "_blank";
    display.append(a);
    prev.classList.remove('hidden');
  }
});

// The below code block displays the prev set of news articles
prev.addEventListener('click', async e => {
  const journals = await getNews(`${countryDrop.value}`, `${categoryDrop.value}`);
  if (current > 1) {
    current--;
    newJournals = journals.slice(size * current - size, size * current);
  }
  display.innerHTML = '';
  for (let i = 0; i < newJournals.length; i++) {
    const a = document.createElement('a');
    if (`${newJournals[i].author}` === 'null') {
      a.innerText = `Title: ${newJournals[i].title}\nAuthor: N / A`;
    } else {
      a.innerText = `Title: ${newJournals[i].title}\nAuthor: ${newJournals[i].author}`;
    }
    a.href = `${newJournals[i].url}`;
    a.target = "_blank";
    display.append(a);
  }
  // prev.classList.remove('hidden');
})


// Code that changes background
categoryDrop.addEventListener('change', async e => {
  // console.log(e.target.value);
  for (let i = 0; i < category.length; i++) {
    const classList = document.body.classList;
    if (e.target.value === category[i]) {
      while (classList.length > 0) {
        classList.remove(classList.item(0));
      };
      document.body.classList.add(`${category[i]}`);
      console.log(classList);
    };
  };
});


// Code that translates text from whatever language to english
async function googleTranslateElementInit() {
  new google.translate.TranslateElement({ pageLanguage: 'fy' }, 'google_translate_element');
}

// renderList() creates a dropdown, based on the hard coded arrays, for both countryDrop and categoryDrop
async function renderList() {
  for (let i = 0; i < country.length; i++) {
    const option = document.createElement('option');
    option.value = country[i];
    option.innerText = country[i].toLocaleUpperCase();
    countryDrop.append(option);
  };
  for (let i = 0; i < category.length; i++) {
    const option = document.createElement('option');
    option.value = category[i];
    option.innerText = category[i];
    categoryDrop.append(option);
  };
};
renderList();

