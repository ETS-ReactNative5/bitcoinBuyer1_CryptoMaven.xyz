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

#### Performance Tools
  * Tool: https://rithmschool.github.io/function-timer-demo/
  
### UI

##### Dependencies
-Node.js 
-Express

##### Development 
```sh
rollup index.js --file bundle.js --format umd --name "mavenBundle"
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

 [MySQL](https://www.mysql.com/)
 [Sequelize](https://sequelize.org/)
 [AWS-RDS](https://aws.amazon.com/rds/)
 [AWS-S3](https://aws.amazon.com/s3/) 
   

### solidity 
#### Custom Blockchain App
##### Dependencies
* crypto (built-in Node module)
* npm run block :: Start blockchain

### INSTRUCTIONS
## Solidity Application

Development: npm run block

Start Chain: npm run start 

OUTPUT::
```sh
$ npm run start

> server-blockchain@1.0.0 start C:\w\www\git\armchair\bitcoinBuyer1-findersCalculators\server-blockchain
> tsc && node .

⛏️⛏️⛏️ mining yo ⛏️⛏️⛏️
Solved: 11864
⛏️⛏️⛏️ mining yo ⛏️⛏️⛏️
Solved: 101775
⛏️⛏️⛏️ mining yo ⛏️⛏️⛏️
Solved: 3064
Chain {
  chain: [
    Block {
      prevHash: null,
      transaction: [Transaction],
      ts: 1615688487672,
      nonce: 88872301
    },
    Block {
      prevHash: '9657459a8695f7af8c217bfc4cd9b92e73314a0bbaa4169efcec9bc8d05ef00
4',
      transaction: [Transaction],
      ts: 1615688488194,
      nonce: 93574180
    },
    Block {
      prevHash: 'bf3583a16e3a5a6df921e7cf0066f75754e0b0de29235ec79bf06a6b9fc4d64
7',
      transaction: [Transaction],
      ts: 1615688488464,
      nonce: 67377836
    },
    Block {
      prevHash: '9b54d0d255be71e49c95b3562dd4ad71b3adf6f2d98e29fa76a92b42a6aa0f4
a',
      transaction: [Transaction],
      ts: 1615688489592,
      nonce: 9465973
    }
  ]
}

```
#### REFERENCES
##### http://vis.stanford.edu/files/2011-D3-InfoVis.pdf

### REACT Natively Implemented with React-Dom, JQuery, D3 and webpack for bundler

### Methods 

#### Data Operation Methods 


### Methods 3rd Party Libraries
 
#### React
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
    StrictMode: Symbol(react.strict_mode)
    Suspense: Symbol(react.suspense)
    cloneElement: ƒ (a, b, d)
    createContext: ƒ (a, b)
    createElement: ƒ da(a, b, d)
    createFactory: ƒ (a)
    createRef: ƒ ()
    forwardRef: ƒ (a)
    isValidElement: ƒ R(a)
    lazy: ƒ (a)
    memo: ƒ (a, b)
    unstable_ConcurrentMode: Symbol(react.concurrent_mode)
    unstable_Profiler: Symbol(react.profiler)
    version: "16.7.0"
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {ReactCurrentOwner: {…}, Scheduler: {…}, SchedulerTracing: {…}, assign: ƒ}
    [[Prototype]]: Object
    constructor: ƒ Object()
    assign: ƒ assign()
    create: ƒ create()
    defineProperties: ƒ defineProperties()
    defineProperty: ƒ defineProperty()
    entries: ƒ entries()
    freeze: ƒ freeze()
    fromEntries: ƒ fromEntries()
    getOwnPropertyDescriptor: ƒ getOwnPropertyDescriptor()
    getOwnPropertyDescriptors: ƒ getOwnPropertyDescriptors()
    getOwnPropertyNames: ƒ getOwnPropertyNames()
    getOwnPropertySymbols: ƒ getOwnPropertySymbols()
    getPrototypeOf: ƒ getPrototypeOf()
    hasOwn: ƒ hasOwn()
    is: ƒ is()
    isExtensible: ƒ isExtensible()
    isFrozen: ƒ isFrozen()
    isSealed: ƒ isSealed()
    keys: ƒ keys()
    length: 1
    name: "Object"
    preventExtensions: ƒ preventExtensions()
    prototype: {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
    seal: ƒ seal()
    setPrototypeOf: ƒ setPrototypeOf()
    values: ƒ values()
    arguments: (...)
    caller: (...)
    [[Prototype]]: ƒ ()
    [[Scopes]]: Scopes[0]
    hasOwnProperty: ƒ hasOwnProperty()
    isPrototypeOf: ƒ isPrototypeOf()
    propertyIsEnumerable: ƒ propertyIsEnumerable()
    toLocaleString: ƒ toLocaleString()
    toString: ƒ toString()
    valueOf: ƒ valueOf()
    __defineGetter__: ƒ __defineGetter__()
    __defineSetter__: ƒ __defineSetter__()
    __lookupGetter__: ƒ __lookupGetter__()
    __lookupSetter__: ƒ __lookupSetter__()
    __proto__: (...)
    get __proto__: ƒ __proto__()
    set __proto__: ƒ __proto__()
```

###  D3- v4
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
brushX: ƒ ()
brushY: ƒ ()
chord: ƒ ()
clientPoint: ƒ ht(t, n)
cluster: ƒ ()
color: ƒ Et(t)
create: ƒ (t)
creator: ƒ A(t)
cross: ƒ (t, n, e)
csv: ƒ (e, r, i)
csvFormat: ƒ (n, e)
csvFormatRows: ƒ (t)
csvParse: ƒ (t, e)
csvParseRows: ƒ n(t, n)
```
<a style="margin-left:20%;" href="https://cryptomaven.xyz">

<img width="660" src="https://tmm-nov.s3.amazonaws.com/assets/img/MaestasReykjavikBanner.jpg" title="Crypto_Maven_Background" alt="Crypto_Maven_Image_Background">

</a>


<h3 width="600" style="margin-left:50px;max-width:560px;font-style:italic;no-wrap">"Pleiades are a group of more than 800 stars located about 410 light-years from Earth in the constellation Taurus."</h3> 