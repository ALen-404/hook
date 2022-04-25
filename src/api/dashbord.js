import axios from 'axios'

const DefaultUrl = 'http://192.168.31.23:8898/'

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
