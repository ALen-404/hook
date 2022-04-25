import {
  getFigureData,
  getGlassnodeFigureData,
  getMarketCapitalization,
} from '../api/dashbord'

let a = 1
getFigureData({ time: '10m', type: 'NFT' }).then((res) => {
  console.log(res)
  a = res
})
getGlassnodeFigureData({
  chain: 'BTC',
  methods: 'addresses_active_addresses_number',
}).then((res) => {
  console.log(res)
})
getMarketCapitalization({ type: 1 }).then((res) => {
  console.log(res)
})

export default a
