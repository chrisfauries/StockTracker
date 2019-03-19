let currentCost = 0;
let currentValue = 0;


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

