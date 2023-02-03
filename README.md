
# APP TITLE: The Latest

## APP DESCRIPTION: 
To provide users with the latest scoop; globalization has brought the world closer, making the stage smaller than ever. With a more connected world that changes quickly, it's important to stay in the loop with developments across the globe. 

## API: 
The API I will be using is from newsapi.org. Here is a link to relevant documentation: https://newsapi.org/docs/endpoints/top-headlines

## API SNIPPET: 
GET https://newsapi.org/v2/top-headlines?country=us&category=science&apikey=788f135045164f3ea26f71450c56861a

``` json 
{
  "status": "ok",
  "totalResults": 30,
  "articles": [
    {
      "source": {
        "id": null,
        "name": "New York Post"
      },
      "author": "Allie Griffin",
      "title": "Mysterious spiral formation appears among stars above Hawaii - New York Post ",
      "description": "The night sky whirlpool, however, is not a UFO or spaceship — but the work of billionaire Elon Musk.",
      "url": "https://nypost.com/2023/01/30/mysterious-moving-spiral-appears-among-stars-above-hawaii/",
      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/01/sky-whirlpool-index.jpg?quality=75&strip=all&w=1024",
      "publishedAt": "2023-01-31T03:07:00Z",
      "content": "A mysterious spiral formation was spotted in the night sky above Hawaii earlier this month, sparking curiosity among observers.\r\nThe spectacle, initially spotted by an observatory in Mauna Kea on Jan… [+674 chars]"
    }]
 }
 ``` 
  
    
## API Code:

``` javascript
async function getNews(country, category) {
  const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apikey=788f135045164f3ea26f71450c56861a`)
  const json = await res.json();
  console.log(json);
}
```
E.g.

``` javascript
getNews('us', 'science');
```

*Country & Category will have to be a hard coded array that is picked in a dropdown menu. 
*The inputs will look like 'us' 'science' for country and category, respectively.

## WIREFRAMES:
    
<img width="778" alt="Screenshot 2023-01-31 at 1 00 06 AM" src="https://user-images.githubusercontent.com/114048369/215863861-a8a91fc5-2f9f-428b-9fe8-2af2a26af5a1.png">


## MVP: 

* Country dropdown menu
* Category dropdown menu
* Submit button and event handler
* Container that will display articles (up to 5 - subject to change)
* Page functionality -- Next and Prev button to change articles
* Articles will have a "read more" which will be a hyperlink which draws from the API's url element
* CSS'd into the arrangement shown on the wireframes
* Include hard requirements of part 8

## POST-MVP:

* Add an effect that mimics file cabin-esque browsing when moving between articles
* Background changes depending on the category, the moment the category and country are submitted, the bg will change
* Make div containers more appealing like transparent globe around the app's main header

## GOALS:

* Set all necessary html variables 
* Develop JS functionality first, debug, troubleshoot, etc.
* CSS basic arrangement i.e. flexbox, position, etc.
* Finalize MVP changes and proceed to POST-MVP
* Background changing and decorated containers --> changing divs

## PRIORITY MATRIX:

<img width="1068" alt="Screenshot 2023-01-31 at 1 35 47 AM" src="https://user-images.githubusercontent.com/114048369/215684835-f7c264b4-1971-4904-bef7-f5ec8bae3a30.png">

## TIMEFRAMES:

Will be coding: Tues-Fri, maybe weekends if not finished during the week

* Pseudocoding, Design: 5-10 mins
* HTML: ~1 min
* CSS: 3 hrs
* JavaScript: 3 hrs
* Testing: Continuous process done through out
