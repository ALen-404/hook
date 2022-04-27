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
export const getOwnerNft = (creator) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  const data = {
    jsonrpc: '2.0',
    id: 1,
    method: 'qn_fetchNFTsByCreator',
    params: [
      {
        creator,
        page: 1,
        perPage: 3,
      },
    ],
  }
  axios
    .post(
      'http://sample-endpoint-name.network.quiknode.pro/token-goes-here/',
      data,
      config
    )
    .then(function (response) {
      // handle success
      console.log(response.data)
    })
    .catch((err) => {
      // handle error
      console.log(err)
    })
}
