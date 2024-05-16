export const tinkoffinvest = {
  'id': 'tinkoffInvest',
  'name': 'Tinkoff Invest',
  'countries': [ 'RU' ],
  'version': 'v2',
  'rateLimit': 2400, // 100 request per 1 minute, need complex rules from: https://tinkoff.github.io/investAPI/limits/
  'has': {
    'cancelAllOrders': true,
    'cancelOrder': true,
    'createOrder': true,
    'fetchBalance': true,
    'fetchMarkets': true,
    'fetchMyTrades': true,
    'fetchOpenOrders': true,
    'fetchOrder': true,
    'fetchTicker': true,
    'fetchTickers': true,
  },
  'hostname': 'tinkoff.ru/invest',
  'urls': {
    'logo': 'https://acdn.tinkoff.ru/static/pfa-multimedia/images/ae288629-59d7-4eb6-b074-8bb0549a43b6.svg',
    'api': {
      'public': 'https://invest-public-api.tinkoff.ru',
    },
    'www': 'https://{hostname}',
    'doc': 'https://{hostname}/open-api'
  },
}
