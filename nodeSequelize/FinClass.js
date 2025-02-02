// import "dotenv/config"; // only CRYPTO_API_KEY here

import axios from 'axios';//"../node_modules/axios/src/axios.js";
import { ApiWalker } from "./dataUtil/dataServices/dataServices.js";


///////////////// Web Scraping VARS
// GLOBAL VARS     Crypto News
 
export class FinClass {
  constructor(finObj) {
    this.API_KEY = process.env.CRYPTO_API_KEY;
    this.cryptoBaseUrl =
      "https://investing-cryptocurrency-markets.p.rapidapi.com/";

    this.finObj = finObj || {};

    this.finObj.newObjMappers = [];
    this.finObj.countriesMarket = [];
    this.finObj.allLangs = [];
    this.finObj.countries = [];
    this.finObj.coins = [];
    this.finObj.cal = [];
  }

  getFinVars(paramOptions) {
    // if coins
    if (paramOptions == "countries")
      return {
        params: {
          locale_info: "en_US",
          lang_ID: "1",
          time_utc_offset: "28800",
        },
        path: "get-meta-data",
      };
    if (paramOptions == "calendar")
      return {
        params: {
          tabname: "ongoing",
          lang_ID: "1",
          time_utc_offset: "28800",
          sort: "related_days",
        },
        path: "get-ico-calendar",
      };
    if (paramOptions == "coinsList")
      return {
        params: {
          edition_currency_id: "12",
          time_utc_offset: "28800",
          lang_ID: "1",
          sort: "PERC1D_DN",
          page: "1",
        },
        path: "coins/list",
      };
    if (paramOptions == "currenciesList")
      return {
        params: {
          lang_ID: "1",
          time_utc_offset: "28800",
        },
      };
  }

  // // Data to return crypto resources   // META DATA

  getMetaData(optString) {
    const localVars = this.getFinVars(optString);
    
    this.options = {
      method: "GET",
      headers: {
        "x-rapidapi-host": "investing-cryptocurrency-markets.p.rapidapi.com",
        "x-rapidapi-key": this.API_KEY,
      },
      url: `${this.cryptoBaseUrl}${localVars.path}`,
      params: localVars.params,
    };

    axios
      .request(this.options)
      .then((response) => {
        const apiWalker = new ApiWalker();
        this.finObj.countries = response.data;

        for (let i = 0; i < this.finObj.countries.length; i++) {
          apiWalker.newObjMappers.push({
            name: "tempMapper",
            nation: this.finObj.countries.countries[i],
          });
        }
        //                                const input =  "Albania"     /// REMOVE
        // console.log("check Albania some objects from names");
        // console.log(apiWalker.getAll(countries.countries, input ));
        // console.log("countries", countries)
      })
      .catch(function (error) {
        console.error(error);
      });
    return this.finObj.countries;
  }

  // // Data to return crypto resources   // COINS
  getCoinsData() {
    const localVars = this.getFinVars("coinsList");

    this.options = {
      method: "GET",
      headers: {
        "x-rapidapi-host": "investing-cryptocurrency-markets.p.rapidapi.com",
        "x-rapidapi-key": this.API_KEY,
      },
      url: `${this.cryptoBaseUrl}${localVars.path}`,
      params: localVars.params,
    };

    axios
      .request(this.options)
      .then((response) => {
        const apiWalker = new ApiWalker();
        this.finObj.coins = response.data;
        // console.log(coins[0].screen_data.crypto_data);

        for (let i = 0; i < this.finObj.coins.length; i++) {
          apiWalker.newObjMappers.push({
            name: "tempMapper",
            coin: this.finObj.coins[0].screen_data.crypto_data[i],
          });
        }
        // UNIT TEST
        // res.json(coins[0].screen_data[2].crypto_data)
        console.log(this.finObj.coins);
      })
      .catch(function (error) {
        console.error(error);
      });
    return this.finObj.coins;
  }

  // Calendar
  getCalData() {
    // ICO CALENDAR DATA
    const localVars = this.getFinVars("calendar");

    this.options = {
      method: "GET",
      headers: {
        "x-rapidapi-host": "investing-cryptocurrency-markets.p.rapidapi.com",
        "x-rapidapi-key": this.API_KEY,
      },
      url: `${this.cryptoBaseUrl}${localVars.path}`,
      params: localVars.params,
    };

    axios
      .request(this.options)
      .then((response) => {
        // finObj.cal = response.data[0].screen_data.icoData.data
        this.finObj.cal = response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
    return this.finObj.cal;
  }
}
 