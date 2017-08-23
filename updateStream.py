from googlefinance import getQuotes
import requests
import json
import os

class StockStream:
    """
    Sends a set of stock prices to a Streamr stream
    """

    LISTED_STOCKS = ["FB", "AAPL", "AMZN", "NFLX", "GOOG"]
    LISTED_STOCKS = ["GOOG"]

    def __init__(self, stream_id, auth_key):
		self.BASE_URL = "https://www.streamr.com/api/v1/streams/%s/data?auth=%s" % (stream_id, auth_key)
		self.AUTH_KEY = auth_key

    def updatePrice(self, stock):
        """
        Send the stock symbol and price of the
        stock to streamr
        """
        stockData = getQuotes(stock)
        price = stockData[0]["LastTradePrice"]
        requests.post(
			self.BASE_URL,
			json={"symbol": stock, "price": float(price)},
			headers={'Authorization': 'token %s' % self.AUTH_KEY}
		)

    def updatePrices(self):
        """
        Send updated price information for each of the LISTED_STOCKS
        to Streamr
        """
        for stock in self.LISTED_STOCKS:
            self.updatePrice(stock)


if __name__ == "__main__":

	stream = StockStream(
		os.environ["STREAMR_STREAM_ID"],
		os.environ["STREAMR_AUTH_KEY"])

	stream.updatePrices()
