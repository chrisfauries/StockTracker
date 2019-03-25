const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const fs = admin.firestore();
const fetch = require('node-fetch');
const axios = require('axios');

//Updates Live Stock Data Based on Scheduler
exports.liveStockData = functions.https.onRequest((req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Methods', 'GET');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', '3600');
    res.status(204).send('');
  } else {
    res.set('Access-Control-Allow-Origin', '*');
      fs.collection('Admin').doc('StockList').get()
				.then(availableStocks => {
        var stockList;
        stockList = stockArrSplit(availableStocks.data().liveStocks);
        return getLiveStockDataFromAPI(stockList)
        })
			.then(stockData => {
				return res.send('Live Data Retrieved and Stored');
			})
        .catch(err => err);
     }
});

//updateStockData Helper Functions
const stockArrSplit = (arr) => {
  var counter = 0;
  var newArr = [];
  arr.map(stock => {
    if(newArr[counter] === undefined) {
      newArr[counter] = [];
    }
    newArr[counter].push(stock);
    if (newArr[counter].length >= 20){
      counter++;
    }
  })
  return newArr;
}

const getLiveStockDataFromAPI = (stockList) => {
  var promises = stockList.map(subList => {
    return axios.get('https://www.worldtradingdata.com/api/v1/stock?symbol=' + subList.join(',') + '&api_token=IV3CGU3bazdQHddnDWSufxtrvEHJGLsMG9KqretAXxGe3Q27dVbP5EScDF87')
      .then(res => {
        var subPromises = res.data.data.map(stock => {
          return fs.collection('Live').doc(stock.symbol).set(stock);
        })
				return Promise.all(subPromises)
					.then(allSubRes => res.data.data)
					.catch(err => err);
      })
    })
		return Promise.all(promises)
					.then(allRes => allRes)
	      	.catch(err => err);
}



//Updates Minutely Stock Data Based on Scheduler
exports.interDayStockData = functions.https.onRequest((req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Methods', 'GET');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', '3600');
    res.status(204).send('');
  } else {
    res.set('Access-Control-Allow-Origin', '*');
      fs.collection('Admin').doc('StockList').get()
      .then(stockList => {
        let stocks = stockList.data().stocks;
        return getInterDayDataFromAPI(stocks)
      })
		.then(interdayRes => {
				return res.send('Interday Data Retrieved and Stored');
			})
      .catch(err => err);
    return;
  }
});

//Helper Function for interDayStockData
const getInterDayDataFromAPI = (stocks) => {
	var promises = stocks.map(stock => {
	var newData;
	return axios.get('https://www.worldtradingdata.com/api/v1/intraday?symbol=' + stock + '&sort=asc&range=1&interval=5&api_token=IV3CGU3bazdQHddnDWSufxtrvEHJGLsMG9KqretAXxGe3Q27dVbP5EScDF87')
	.then(res => {
		var arr = [];
		for(var key in res.data.intraday) {
			var timeDisplay = key.split(' ')[1].split(':').slice(0,2).join(':');
			arr.push({time: timeDisplay, price: res.data.intraday[key].open});
		}
		newData = Object.assign({}, arr);
		return fs.collection('InterDay').doc(stock).set(newData)
		})
		.then(res => newData)
		.catch(err => err)
		});
	return Promise.all(promises)
		.then(allRes => allRes)
		.catch(err => err);
}



// Get historical data from API and Store in firebase based on Admin List in Firebase
exports.historicalStockData = functions.https.onRequest((req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Methods', 'GET');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', '3600');
    res.status(204).send('');
  } else {
    res.set('Access-Control-Allow-Origin', '*');
    fs.collection('Admin').doc('StockList').get()
    .then(stockList => {
      let stocks = stockList.data().liveStocks;
      return getHistoricalDataFromAPI(stocks)
    })
    .then(hisData => {
      return res.send('Historical Data Retrieved and Stored');
    })
    .catch(err => {
      return err;
    });
  }
});

//helper function for historicalStockData
const getHistoricalDataFromAPI = (stocks) => {
  var promises = stocks.map(stock => {
		var newData;
    return axios.get('https://www.worldtradingdata.com/api/v1/history?symbol=' + stock +'&sort=newest' + getDates() + 'api_token=IV3CGU3bazdQHddnDWSufxtrvEHJGLsMG9KqretAXxGe3Q27dVbP5EScDF87')
      .then(res => {
        var arr = [];
        for(var key in res.data.history) {
          var keySplit = key.split('-')
          var dateConfig = `${keySplit[1]}-${keySplit[2]}-${keySplit[0]}`
          arr.push({date: dateConfig, price: res.data.history[key].open});
        }
        newData = Object.assign({}, arr);
        return fs.collection('Historical').doc(stock).set(newData)
		})
        .then(res => newData)
        .catch(err => err);
  });
	return Promise.all(promises)
			.then(allRes => allRes)
			.catch(err => err);
}

//helper function for getHistoricalDataFromAPI
const getDates = () => {
	var dateObj = new Date();
	var month = dateObj.getUTCMonth() + 1;
	var day = dateObj.getUTCDate();
	var year = dateObj.getUTCFullYear();

	var str = '';
	str += year;

	if(month < 10) {
		var mon;
		mon = '0' + month;
		str += '-' + mon;
	} else {
		str += '-' + month;
	}

	if(day < 10) {
		var d;
		d = '0' + day;
		str += '-' + d;
	} else {
		str += '-' + day;
	}

	var lastFiveYears = year - 5 + '-01-01';
	return `&date_from=${lastFiveYears}&date_to=${str}&`;
}
