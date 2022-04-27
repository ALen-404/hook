import {
  getFigureData,
  getGlassnodeFigureData,
  getMarketCapitalization,
  getOwnerNft,
} from '../api/dashbord'

export const getMarketCapAndVolume = (type) => {
  return getMarketCapitalization({ type })
}
export const getEthAndBtcData = (methods, type) => {
  return getGlassnodeFigureData({ methods, type })
}
export const getGraphData = (time, type) => {
  return getFigureData({ time, type })
}
export const getOwnerOfNft = (creator) => {
  return getOwnerNft(creator)
}
