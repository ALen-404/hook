import { getGraphData, getMarketCapAndVolume } from '../../../../../hook/hook'

import { ethers } from 'ethers'
getGraphData('10m', 'NFT').then((res) => {
  console.log(res, '------------------------')
})
const a = async () => {
  const provider = new ethers.providers.JsonRpcProvider(
    'https://old-divine-darkness.quiknode.pro/f1703f233ec311fcaa4907a108e44fbbc03228b5/'
  )
  const balance = await provider.getTransactionCount(
    '0x6afdf721593A3673451973bEfF8c4dc076d28192',
    'latest'
  )
  console.log(balance.toString())
}
a()
export const lineChartDataTotalSpent = [
  {
    name: 'DEFI',
    data: [50, 64, 48, 66, 49, 68],
  },
  {
    name: 'GAMEFI',
    data: [30, 40, 24, 46, 20, 46],
  },
  {
    name: 'NFT',
    data: [10, 30, 10, 16, 60, 36],
  },
]

export const lineChartOptionsTotalSpent = {
  chart: {
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 13,
      left: 0,
      blur: 10,
      opacity: 0.1,
      color: '#4318FF',
    },
  },
  colors: ['#7551FF', '#39B8FF', '#FDB640'],
  markers: {
    size: 0,
    colors: 'white',
    strokeColors: '#7551FF',
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    shape: 'circle',
    radius: 2,
    offsetX: 0,
    offsetY: 0,
    showNullDataPoints: true,
  },
  tooltip: {
    theme: 'dark',
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    type: 'line',
  },
  xaxis: {
    type: 'numeric',
    categories: ['SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB'],
    labels: {
      style: {
        colors: '#A3AED0',
        fontSize: '12px',
        fontWeight: '500',
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    colors: 'white',
    strokeColors: '#7551FF',
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    shape: 'circle',
    radius: 2,
    offsetX: 0,
    offsetY: 0,
  },
  legend: {
    show: true,
  },
  grid: {
    show: false,
    column: {
      color: ['#7551FF', '#39B8FF'],
      opacity: 0.5,
    },
  },
  color: ['#7551FF', '#39B8FF'],
}
