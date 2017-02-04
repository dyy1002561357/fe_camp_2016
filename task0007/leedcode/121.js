/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices)
{
    if (prices.length < 2)
        return 0;

    var maxProfit = 0;
    var curMin = prices[0];

    for (var i = 1; i < prices.length; i++)
    {
        curMin = Math.min(curMin,prices[i]);
        maxProfit = Math.max(maxProfit,prices[i] - curMin);
    }

    return maxProfit;
};