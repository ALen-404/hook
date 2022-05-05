import {
  getFigureData,
  getGlassnodeFigureData,
  getMarketCapitalization,
  getSearchHeat,
  getCmcData,
  getTag,
  setSearchHeat,
  setTag_address,
  getSearchData,
  getTxData,
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

export const getSearchRank = (limit) => {
  return getSearchHeat({ limit })
}
export const getCmcDatas = (limit, start, type) => {
  return getCmcData({ limit, start, type })
}

export const getSearchDatas = (address) => {
  return getSearchData({ address })
}

export const getTxDatas = (address, limit, start) => {
  return getTxData({ address, limit, start })
}
export const setSearchHeats = (searchName) => {
  return setSearchHeat(searchName)
}
