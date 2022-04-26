import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react'
// Assets
import Usa from 'assets/img/dashboards/usa.png'
// Custom components
import MiniCalendar from 'components/calendar/MiniCalendar'
import MiniStatistics from 'components/card/MiniStatistics'
import IconBox from 'components/icons/IconBox'
import React, { useEffect, useState } from 'react'
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from 'react-icons/md'
import CheckTable from 'views/admin/default/components/CheckTable'
import ComplexTable from 'views/admin/default/components/ComplexTable'
import DailyTraffic from 'views/admin/default/components/DailyTraffic'
import PieCard from 'views/admin/default/components/PieCard'
import Tasks from 'views/admin/default/components/Tasks'
import TotalSpent from 'views/admin/default/components/TotalSpent'
import WeeklyRevenue from 'views/admin/default/components/WeeklyRevenue'
import {
  columnsDataCheck,
  columnsDataComplex,
} from 'views/admin/default/variables/columnsData'
import tableDataCheck from 'views/admin/default/variables/tableDataCheck.json'
import tableDataComplex from 'views/admin/default/variables/tableDataComplex.json'
import { getGraphData, getMarketCapAndVolume } from '../../../hook/hook'
import './index.css'
import Menu from './components/DataBoxMenu'

export default function UserReports() {
  const [nftVolumeData, setNftVolumDara] = useState(1)
  const [dataType, setDataType] = useState('NFT')

  useEffect(() => {
    getMarketCapAndVolume('NFT').then((res) => {
      setNftVolumDara(res)
      console.log(res, 'aaaaa')
    })
  }, [])
  // Chakra Color Mode
  const brandColor = useColorModeValue('brand.500', 'white')
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100')
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <div className="dataBox">
        <div className="menuBox">
          <Menu />
        </div>
        <div>
          <SimpleGrid
            className={dataType === 'NFT' ? 'active' : 'nftData'}
            columns={{ base: 1, md: 2, lg: 3, '2xl': 6 }}
            gap="20px"
            mb="20px"
          >
            <MiniStatistics
              growth={
                nftVolumeData.marketCapRatio?.toFixed(2) > 0
                  ? `+${nftVolumeData.marketCapRatio * 100?.toFixed(2)}%`
                  : nftVolumeData.marketCapRatio * 100?.toFixed(2) + '%'
              }
              name="Market Cap"
              value={nftVolumeData.marketCap?.toFixed(2)}
            />
            <MiniStatistics
              growth={
                nftVolumeData.volumeRatio?.toFixed(2) > 0
                  ? `+${nftVolumeData.volumeRatio * 100?.toFixed(2)}%`
                  : nftVolumeData.volumeRatio * 100?.toFixed(2) + '%'
              }
              name="Volume"
              value={nftVolumeData.volume?.toFixed(2)}
            />
            <MiniStatistics
              growth={
                nftVolumeData.circulatingSupplyRatio?.toFixed(2) > 0
                  ? `+${
                      nftVolumeData.circulatingSupplyRatio * 100?.toFixed(2)
                    }%`
                  : nftVolumeData.circulatingSupplyRatio * 100?.toFixed(2) + '%'
              }
              name="Sales"
              value={nftVolumeData.circulatingSupply?.toFixed(2)}
            />
          </SimpleGrid>
          <SimpleGrid
            className={dataType === 'DEFI' ? 'active' : 'defiData'}
            columns={{ base: 1, md: 2, lg: 3, '2xl': 6 }}
            gap="20px"
            mb="20px"
          >
            <MiniStatistics
              growth={
                nftVolumeData.marketCapRatio?.toFixed(2) > 0
                  ? `+${nftVolumeData.marketCapRatio * 100?.toFixed(2)}%`
                  : nftVolumeData.marketCapRatio * 100?.toFixed(2) + '%'
              }
              name="Market Cap"
              value={nftVolumeData.marketCap?.toFixed(2)}
            />
            <MiniStatistics
              growth={
                nftVolumeData.volumeRatio?.toFixed(2) > 0
                  ? `+${nftVolumeData.volumeRatio * 100?.toFixed(2)}%`
                  : nftVolumeData.volumeRatio * 100?.toFixed(2) + '%'
              }
              name="Volume"
              value={nftVolumeData.volume?.toFixed(2)}
            />
            <MiniStatistics
              growth={
                nftVolumeData.circulatingSupplyRatio?.toFixed(2) > 0
                  ? `+${
                      nftVolumeData.circulatingSupplyRatio * 100?.toFixed(2)
                    }%`
                  : nftVolumeData.circulatingSupplyRatio * 100?.toFixed(2) + '%'
              }
              name="Sales"
              value={nftVolumeData.circulatingSupply?.toFixed(2)}
            />
          </SimpleGrid>
        </div>
      </div>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
        <TotalSpent />
        <WeeklyRevenue />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
          <DailyTraffic />
          <PieCard />
        </SimpleGrid>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
          <Tasks />
          <MiniCalendar h="100%" minW="100%" selectRange={false} />
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  )
}
