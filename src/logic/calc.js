let currentCost = 0;
let currentValue = 0;
let gainlossYTD = 0;


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
        return Number(((currentValue - currentCost) / currentCost) * 100).toFixed(2) + '%';
    } else {
        return '0%';
    }
}

export const getGainLossYTD = (props, passToPct=false) => {
    var year = new Date().getFullYear();
    var overallChange = 0;
    var valueAtYTD = 0;
    for(var key in props.stocksPurchased) {
        if(props.historical.find(stock => stock[key])) {
            var quantity= props.stocksPurchased[key].reduce(((sum, purchase) => {return sum + Number(purchase.quantity)}), 0);
            var currentStockPrice = props.live.find(stock => stock.symbol === key).price;
            var priceAtYearStart = props.historical.find(stock => stock[key] !== undefined)[key].find(day => day.date === `01-01-${year}` || day.date === `01-02-${year}` || day.date === `01-03-${year}`).price;
            overallChange += ((currentStockPrice - priceAtYearStart) * quantity);
            valueAtYTD += priceAtYearStart * quantity;
        }
    }
    var result = passToPct ? ( 
        {overallChange: overallChange, valueAtYTD: valueAtYTD}
    ) : (
        `$${overallChange.toFixed(2)}`
    ) 
    return result;
}

export const getPctYTD = (props) => {
    var values = getGainLossYTD(props, true);
    var { overallChange, valueAtYTD } = values
    if(overallChange / valueAtYTD) {
        return Number(((currentValue - valueAtYTD)/valueAtYTD) * 100).toFixed(2) + '%';
    } else {
        return '0%';
    } 
}

export const getStockHis = (props, stock, time) => {
    if(props.data.historical.find(item => item[stock])){
        var pastPrice = props.data.historical.find(item => item[stock])[stock][time].price;
        var currentPrice = props.data.liveStockData.find(item => item.symbol === stock).price;
        var result = currentPrice - pastPrice > 0 ? (
            `+$${Number(currentPrice - pastPrice).toFixed(2)}`
        ) : (
            `-$${Math.abs(Number(currentPrice - pastPrice).toFixed(2))}`
        )
        return result;
    }
}