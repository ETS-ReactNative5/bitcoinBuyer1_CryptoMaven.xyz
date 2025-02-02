## Data Analytics Application
### Author: Thomas Maestas
### App: CryptoMaven
### Application Overview
### App Purpose: Data algorithms/structures Exploratory Application ;
### App Name: Pleaides, inspired by the Gree God with 7 Sisters Cluster. 

```sh
This app applies data scraper to collect unstructured data. And this app structures into meaningful data, based on the parameters as profiled by self-assessment, and propensity for success
```

<a href="https://cryptomaven.xyz" target="_blank">
<img src="./index/src/img/cryptoMaven.JPG" height="550">
</a>
```
## Crypto Data Streaming App
### Part I. Algorithms and Tools
### Part II. Implementations
### Part III. UI Interactivity

### App Functionality
CryptoMaven accepts user information, upon user's request. Next, the data is cleaned, structured and from which derive 17 key variables: Holding constant spurious variables, a multilinear regression analysis predicts' upper and lower confidence levels for a user's optimal crypto-trading strategy, no matter how diversied across the Bitcoin, Altcoin and NFT spaces. 
Because CryptoMaven does not dispense financial advice, the user's own past combined with external training data. Based on user's survey data (60-question survey, 40% socio-economic/demographic variables & 60% composite variables). These psycho-sociological variables expose, through propensity analysis, a virtual twin, i.e. mirror-like toolset by which one can analyze one's own trading decisions in the past using Propensity Scoring (again using >10,000 users' from NIH datasets for the propensity matching).  

Next, optimization through machine-learning uses predictive plots to generate a reliable composite model. Using this data modeling, one can feed and better interpret new data inputs, much like modern, Western Medicine employs meta-analysis for diagnosis and prediction of stochastic (random) variance.

Therefore, with all of the reliable and accurate data models that users generate from their own data, CryptoMaven lets the user come to their conclusion; CryptoMaven App amplifies the research interests of crypto-maven users by conducting breadth-first searches, in the form of online addressing and scraping of unstructured. More importantly, once the ideal topic(s) of interest are identified, the CryptoMaven algorithm engine instructs depth-first searches to new data clusters (INGRESS Edges > 2, using Directed Acyclic Graphing and Sankey Tracking);

Finally, D3js, ChartJS and JQuery-Bootstrap related javascript libraries are imported as Global variables into the Center Piece of CryptoMaven Application Worth: Interactive, Real-Time Graphical Visualization incorporating React/ReactDOM's virtual DOM, through which all D3 updating takes place. 


<!-- //JOIN new data with old elements.: ...i.e. join the data with HTML <Element> -->
const text = g.selectAll("text")
.data(data, function(d) {return d;})

//EXIT old elements not present in new data.
text.exit()
.attr("class", "exit")
.transition(t)
.attr("y", 60)
.style("fill-opacity", 1e-6)
.remove();

<!-- //UPDATE old elements present in new data, through ~10 frame changes per second -->
text.attr("class", "update")
.attr("y", 0)
.style("fill-opacity",1)
.transition(t)
.attr("x", function(d,i) {return i*32;})

//ENTER new elements present in new data
text.enter().append("text")
.attr("class", "enter")
.attr("dy", ".35 em")
.attr("y", -60) 
.attr("x", function(d, i) {return i*32;})
.style("fill-opacity", 1e-6)
.transition(t)
.attr("x", function(d) {return d;})

<strong>However, this model which is inexorably in conflict with React DOM's virtual-DOM is resolved through CryptoMaven's AppGroot $G3 global variable</strong>. Who else can dynamically toggle between D3 math-intensive calculations, best run using C WebAssembly; and React's Virtual DOM strong-suit offers a third path solution for DOM control and data sharing for visualization and data state management: If it's everybody's job, then it's not a job, by which I imply statelessness. 

#### Performance Tools
  * Tool: https://rithmschool.github.io/function-timer-demo/
  
### UI

##### Dependencies
-Node.js 
-Express

##### Development 
```sh 

```
### Technologies 
| Fx | Tools | URLS |
|-----------------|:-----------------:|---------:|
| Database | Oracle SE 11 | [MySQL]  | 
| Object Relational Mapper | Sequelize | [Sequelize] |
| Cloud Data | Amazon RDS |  [AWS-RDS] | 
| Cloud Assets | Amazon S3 |  [AWS-S3]  | 
 
     
     
#### Data Operation Methods 
  
### CryptoMaven's Data Structures: 
```sh
{
    "Date": "2019-07-04",
    "Symbol": "BTCUSD",
    "Open": 11976.42,
    "High": 12064.26,
    "Low": 11820,
    "Close": 11909.55,
    "Volume BTC": 1237.57,
    "Volume USD": 14790355.69
  }
``` 
### Dependencies
* Vanilla JavaScript is Aim
* D3js
* React

#### CDNs
* https://cdnjs.cloudflare.com/ajax/libs/rxjs/5.4.3/Rx.js
* https://d3js.org/d3.v4.min.js
* https://unpkg.com/react@17.0.2/umd/react.development.js
  <!--D3JS Dependencies-->
* http://d3js.org/queue.v1.min.js 
 *  http://d3js.org/topojson.v1.min.js 
  * https://d3js.org/d3-geo-projection.v1.min.js 
 * https://unpkg.com/simple-statistics@2.0.0/dist/simple-statistics.min.js
 * https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.10.3/babel.min.js
 
### Database: 
* commuterlink.cmcadlepsyx9.us-east-1.rds.amazonaws.com
* AWS PostgreSQL 
* Auto-detected PostgreSQL 10 installation with the data directory at C:\Program Files\PostgreSQL\10\data

###  server-nginx

##pm2 
https://www.npmjs.com/package/pm2
https://pm2.keymetrics.io/
npm i pm2 -g 
pm2 start app.js [[instead of node app.js]]

auto-restart after reboot:
pm2 startup ubuntu 
or...
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup ubuntu -u ubuntu --hp /home/ubuntu
pm2 status

##ufw
ufw enable
ufw allow ssh
ufw allow http
ufw allow https

##nginx
sudo apt install nginx
sudo nano /etc/nginx/sites-available/default  
sudo nginx -t
sudo service nginx restart


#### Load Balancer 
* localhost port 5000
* NGINX -Digital Ocean:  [134.122.15.249] 
          -https://hexstat.xyz
          -local: /home/ubuntu/nfs

* NGINX -AWS - [35.175.138.209]  
          * local: /home/thomas/apps/
          * bitcoinBuyer1-findersCalculators
          * https://cryptomaven.xyz https://cryptomaven.us 


** DB Cloud Software **

db's README.md inside NODESEQUEL INFO MOVED TO NodeSequel
 [MySQL](https://www.mysql.com/)
 [Sequelize](https://sequelize.org/)
 [AWS-RDS](https://aws.amazon.com/rds/)
 [AWS-S3](https://aws.amazon.com/s3/) 
   

### **Solidity, Smart Contracts & Blockchain code relocated to:
#### Solidity Dir README.md

#### REFERENCES
##### http://vis.stanford.edu/files/2011-D3-InfoVis.pdf

### REACT Natively Implemented with React-Dom, JQuery, D3 and webpack for bundler

### Methods 

#### Data Operation Methods 


### Methods 3rd Party Libraries
 
#### React  Sample Methods
```sh
console.log(React)
{Children: {…}, createRef: ƒ, Component: ƒ, PureComponent: ƒ, createContext: ƒ, …}
    Children: {map: ƒ, forEach: ƒ, count: ƒ, toArray: ƒ, only: ƒ}
    Component: ƒ r(a, b, d)
    length: 3
    name: "r"
    prototype:
    forceUpdate: ƒ (a)
    isReactComponent: {}
    setState: ƒ (a, b)
    constructor: ƒ r(a, b, d)
    [[Prototype]]: Object
    arguments: (...)
    caller: (...)
    [[FunctionLocation]]: app-react.js:55
    [[Prototype]]: ƒ ()
    [[Scopes]]: Scopes[2]
    Fragment: Symbol(react.fragment)
    PureComponent: ƒ M(a, b, d) 
```

###  D3- v4 Sample Methods
```sh
  {event: null, format: ƒ, formatPrefix: ƒ, timeFormat: ƒ, timeParse: ƒ, …}
active: ƒ (t, n)
arc: ƒ ()
area: ƒ sc()
areaRadial: ƒ gc()
ascending: ƒ n(t, n)
axisBottom: ƒ (t)
axisLeft: ƒ (t)
axisRight: ƒ (t)
axisTop: ƒ (t)
bisect: ƒ (n, e, r, i)
bisectLeft: ƒ (n, e, r, i)
bisectRight: ƒ (n, e, r, i)
bisector: ƒ e(t)
brush: ƒ ()
brushSelection: ƒ (t) 
<a style="margin-left:20%;" href="https://cryptomaven.xyz">

<img width="660" src="https://tmm-nov.s3.amazonaws.com/assets/img/MaestasReykjavikBanner.jpg" title="Crypto_Maven_Background" alt="Crypto_Maven_Image_Background">

</a>


<h3 width="600" style="margin-left:50px;max-width:560px;font-style:italic;no-wrap">"Pleiades are a group of more than 800 stars located about 410 light-years from Earth in the constellation Taurus."</h3> 

### API SCHEMAS

```sh
/// API      localhost:5000/api/coins '
const response_coins = { 
  "data": [
    {
      "screen_ID": "83",
      "screen_data": {
        "next_page": 2,
        "crypto_data": [ 
          {
            "id": "672",
            "name": "ERC20",
            "country_id": "725",
            "pair_id": 1072082,
            "currency_symbol": "ERC20",
            "inst_price_usd": "0.0000440",
            "pair_change_arrow": "up_green",
            "change_percent_1d": "+190.88%",
            "pair_change_percent_numeric": "190.88",
            "change_percent_1d_color": "#3fc932",
            "change_percent_7d": "0.00%",
            "percent_change_7d_plain": "0.00",
            "change_percent_7d_color": "#c2c1c2",
            "cross_rates_name": "ERC20",
            "inst_price_btc": "0",
            "inst_market_cap": "&#x24;6.81M",
            "inst_market_cap_plain": "6813912",
            "volume_24h_usd": "&#x24;52.59K",
            "volume_24h_usd_plain": "52588",
            "total_volume_plain": "0.00",
            "total_volume": "0.00%",
            "flag_url": "https://i-invdn-com.investing.com/ico_flags/80x80/v32/erc-20.png",
            "logo_url": "https://i-invdn-com.investing.com/ico_flags/80x80/v32/erc-20.png"
          },
        ]
      }
    }
  ]
}

// http://localhost:5000/cryptoNews
const response_cryptoNews = 
[ 
  {
    "title": " Ethereum Classic up 75% in 8 days, but will ETH miners migrate after ETC ‘fifthening’? ",
    "url": "https://cointelegraph.comundefined",
    "source": "cointelegraph"
  },
  {
    "title": " Ethereum Classic up 75% in 8 days, but will ETH miners migrate after ETC ‘fifthening’? ",
    "url": "https://cointelegraph.comundefined",
    "source": "cointelegraph"
  },
  {
    "title": " Grayscale launches smart contract fund for Ethereum competitors   ",
    "url": "https://cointelegraph.comundefined",
    "source": "cointelegraph"
  },
  {
    "title": " ETH price hits $3K as major crypto fund adds over $110M Ethereum to Lido's staking pool ",
    "url": "https://cointelegraph.comundefined",
    "source": "cointelegraph"
  }
]

// http://localhost:5000/api/nations
const response_nations =  {
  "countries": [
    {
      "ci": "104",
      "cc": "AF",
      "cname": "Afghanistan",
      "country_name_translated": "Afghanistan",
      "country_international_phone_code": "+93",
      "flag_image_32x32": "https://i-invdn-com.investing.com/flags_32x32/circle/Afghanistan.png",
      "flag_image_32x32_flat": "https://i-invdn-com.investing.com/flags_32x32_ios/Afghanistan.png"
    }
  ]
}
```
### About the Author: 
```
Thomas Milton Maestas, your Author. 
```
Je me spécialise dans les dernières technologies, avec une compréhension de l’analyse et de la visualisation de données de niveau Master. J'ai 7 ans d'expérience dans les infrastructures Web, les bibliothèques, les gestionnaires de tâches et les technologies cloud, y compris AWS Lambda.
Je me concentre sur les applications JSON et XML non relationnelles liées aux données, en utilisant R, Python et JavaScript, en plus des compétences relationnelles, notamment MySQL et PostgreSQL. Méthodologie Agile / SCRUM. CV:

I specialize in the latest full-stack technologies including React/Redux 18, TypeScript & Java 8/11; this, along with a Masters-level understanding of data analytics and visualization. I have  7 years of experience with web frameworks, libraries, webpack task-runners and AWS proficiency, based on 3 AWS certifications, including serverless database & lambda functions. My data analysis experience includes both qualitative and quantitative analytics,using R, Python, and JavaScript.  Databases include MySQL, PostgreSQL, and Oracle; along with AWS DynamoDB and MongoDB, using Sequelize non-relational Object Relational Management. Agile/SCRUM Methodology. 

#### WRITING

{  
  Name     : "Thomas Milton Maestas", 
  Title    : "Software Developer",
  Email    : "thomas.maestas@hotmail.com", 
  URL      : [ "thomasmaestas.net", "ourdailytech.net"],
  Company  : "TMM",  
  Media    : {   
    linkedIn : "linkedin.com/in/thomasmaestas", 
    github   : "github.com/thomasm1"
    }
}  