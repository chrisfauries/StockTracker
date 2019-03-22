let currentCost = 0;
let currentValue = 0;
let gainlossYTD = 0;
let valueAtYTD = 0;


export const sumCostTotal = (props) => {
    var total = 0;
    for(var key in props.stocksPurchased) {
        // eslint-disable-next-line
        props.stocksPurchased[key].map(purchase => total += purchase.price * purchase.quantity)
    }
    currentCost = Number(total).toFixed(2)
    return '$'+ currentCost;
}

export const sumValueTotal = (props) => {
    var currentStockData = props.liveStockData.reduce((obj, stock) =>{
        obj[stock.symbol] = stock.price;
        return obj
    },{})
    var total = 0;
    for(var key in props.stocksPurchased) {
        props.stocksPurchased[key]
        // eslint-disable-next-line
            .map(purchase => total += currentStockData[key] * purchase.quantity);
    }
    currentValue = Number(total).toFixed(2);
    return '$'+ currentValue;
}


export const getGainLossTotal = () => {
    return '$'+ Number(currentValue - currentCost).toFixed(2);
}

export const getPctTotal = () => {
    if(currentValue / currentCost) {
        return Number((currentValue / currentCost) * 100).toFixed(2) + '%';
    } else {
        return '0%';
    }
}

export const getGainLossYTD = (props) => {
    var year = new Date().getFullYear();
    var overallChange = 0;
    for(var key in props.stocksPurchased) {
        if(props.historical.find(stock => stock[key])) {
        var quantity= props.stocksPurchased[key].reduce(((sum, purchase) => {return sum + Number(purchase.quantity)}), 0);
        var currentStockPrice = props.live.find(stock => stock.symbol === key).price;
        var priceAtYearStart = props.historical.find(stock => stock[key] !== undefined)[key].find(day => day.date === `01-01-${year}` || day.date === `01-02-${year}` || day.date === `01-03-${year}`).price;
        overallChange += ((currentStockPrice - priceAtYearStart) * quantity);
        valueAtYTD += priceAtYearStart * quantity;
            console.log(valueAtYTD, currentValue)
        }
    }
    gainlossYTD = `$${overallChange.toFixed(2)}`
    return gainlossYTD;
}

export const getPctYTD = () => {
    if(currentValue / currentCost) {
        return Number((currentValue / valueAtYTD) * 100).toFixed(2) + '%';
    } else {
        return '0%';
    } 
}