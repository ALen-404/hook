import {
  getFigureData,
  getGlassnodeFigureData,
  getMarketCapitalization,
  getSearchHeat,
  getCmcData,
  getTag,
  setSearchHeat,
  setTag_address,
} from '../api/dashbord'

export const getMarketCapAndVolume = (type) => {
  return getMarketCapitalization({ type })
}
export const getEthAndBtcData = (methods, type) => {
  return getGlassnodeFigureData({ methods, type })
}
export const getGraphData = (time) => {
  return getFigureData({ time })
}

export const getSearchData = (limit) => {
  return getSearchHeat({ limit })
}
export const getCmcDatas = (limit, start, type) => {
  return getCmcData({ limit, start, type })
}
