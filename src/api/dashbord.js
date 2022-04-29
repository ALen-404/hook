import axios from 'axios'

const DefaultUrl = 'https://api.hook.cool'

export async function getFigureData(params) {
  return await axios.get(`${DefaultUrl}/mini/getFigureData`, {
    params,
  })
}

export async function getGlassnodeFigureData(params) {
  return await axios.get(`${DefaultUrl}/mini/getGlassnodeFigureData`, {
    params,
  })
}

export async function getMarketCapitalization(params) {
  return await axios.get(`${DefaultUrl}/mini/getMarketCapitalization`, {
    params,
  })
}
export async function getSearchHeat(params) {
  return await axios.get(`${DefaultUrl}/search/getSearchHeat`, {
    params,
  })
}
export async function getCmcData(params) {
  return await axios.get(`${DefaultUrl}/mini/getCmcData`, {
    params,
  })
}
export async function getTag(params) {
  return await axios.get(`${DefaultUrl}/search/getTag`, {
    params,
  })
}
export async function setSearchHeat(params) {
  return await axios.post(`${DefaultUrl}/search/setSearchHeat`, {
    params,
  })
}
export async function setTag_address(params) {
  return await axios.get(`${DefaultUrl}/search/setTag_address/${params}`)
}

export async function getSearchData(params) {
  return await axios.get(`${DefaultUrl}/track/tokenbalance`, {
    params,
  })
}
