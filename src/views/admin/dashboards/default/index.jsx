import React, { useEffect, useState } from "react";

// Chakra imports
import { Flex, Grid, useColorModeValue, SimpleGrid } from "@chakra-ui/react";
// Custom components
import Balance from "views/admin/dashboards/default/components/Balance";
import DailyTraffic from "views/admin/dashboards/default/components/DailyTraffic";
import MostVisitedTable from "views/admin/dashboards/default/components/MostVisitedTable";
import { VSeparator } from "components/separator/Separator";
import OverallRevenue from "views/admin/dashboards/default/components/OverallRevenue";
import ProfitEstimation from "views/admin/dashboards/default/components/ProfitEstimation";
import ProjectStatus from "views/admin/dashboards/default/components/ProjectStatus";
import YourCard from "views/admin/dashboards/default/components/YourCard";
import YourTransfers from "views/admin/dashboards/default/components/YourTransfers";
import { tableColumnsMostVisited } from "views/admin/dashboards/default/variables/tableColumnsMostVisited";
import tableDataMostVisited from "views/admin/dashboards/default/variables/tableDataMostVisited.json";
import MiniStatistics from "components/card/MiniStatistics";
import { getGraphData, getMarketCapAndVolume } from "../../../../hook/hook";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import "../default/index.css";
export default function Default() {
  const [nftVolumeData, setNftVolumDara] = useState(1);
  const [dataType, setDataType] = useState("NFT");

  useEffect(() => {
    getMarketCapAndVolume("NFT").then((res) => {
      setNftVolumDara(res.data.data);
      console.log(res.data.data, "aaaaa");
    });
  }, []);
  // Chakra Color Mode
  const paleGray = useColorModeValue("secondaryGray.400", "whiteAlpha.100");
  return (
    <Flex
      direction={{ base: "column", xl: "row" }}
      pt={{ base: "130px", md: "80px", xl: "80px" }}
    >
      <Flex direction="column" width="stretch">
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList>
            <Tab>NFT</Tab>
            <Tab>DEFI</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <SimpleGrid
                className={dataType === "NFT" ? "active" : "nftData"}
                columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
                gap="20px"
                mb="20px"
              >
                <MiniStatistics
                  growth={
                    nftVolumeData?.marketCapRatio?.toFixed(2) > 0
                      ? `+${nftVolumeData?.marketCapRatio * 100?.toFixed(2)}%`
                      : nftVolumeData?.marketCapRatio * 100?.toFixed(2) + "%"
                  }
                  name="Market Cap"
                  value={nftVolumeData?.marketCap?.toFixed(2)}
                />
                <MiniStatistics
                  growth={
                    nftVolumeData?.volumeRatio?.toFixed(2) > 0
                      ? `+${nftVolumeData?.volumeRatio * 100?.toFixed(2)}%`
                      : nftVolumeData?.volumeRatio * 100?.toFixed(2) + "%"
                  }
                  name="Volume"
                  value={nftVolumeData?.volume?.toFixed(2)}
                />
                <MiniStatistics
                  growth={
                    nftVolumeData?.circulatingSupplyRatio?.toFixed(2) > 0
                      ? `+${
                          nftVolumeData?.circulatingSupplyRatio *
                          100?.toFixed(2)
                        }%`
                      : nftVolumeData?.circulatingSupplyRatio *
                          100?.toFixed(2) +
                        "%"
                  }
                  name="Sales"
                  value={nftVolumeData?.circulatingSupply?.toFixed(2)}
                />
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <SimpleGrid
                className={dataType === "DEFI" ? "active" : "nftData"}
                columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
                gap="20px"
                mb="20px"
              >
                <MiniStatistics
                  growth={
                    nftVolumeData?.marketCapRatio?.toFixed(2) > 0
                      ? `+${nftVolumeData?.marketCapRatio * 100?.toFixed(2)}%`
                      : nftVolumeData?.marketCapRatio * 100?.toFixed(2) + "%"
                  }
                  name="Market Cap"
                  value={nftVolumeData?.marketCap?.toFixed(2)}
                />
                <MiniStatistics
                  growth={
                    nftVolumeData?.volumeRatio?.toFixed(2) > 0
                      ? `+${nftVolumeData?.volumeRatio * 100?.toFixed(2)}%`
                      : nftVolumeData?.volumeRatio * 100?.toFixed(2) + "%"
                  }
                  name="Volume"
                  value={nftVolumeData?.volume?.toFixed(2)}
                />
                {/* <MiniStatistics
            growth={
              nftVolumeData?.circulatingSupplyRatio?.toFixed(2) > 0
                ? `+${nftVolumeData?.circulatingSupplyRatio * 100?.toFixed(2)}%`
                : nftVolumeData?.circulatingSupplyRatio * 100?.toFixed(2) + '%'
            }
            name="Sales"
            value={nftVolumeData?.circulatingSupply?.toFixed(2)}
          /> */}
              </SimpleGrid>
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Grid
          mb="20px"
          gridTemplateColumns={{ base: "repeat(2, 1fr)", "2xl": "720fr 350fr" }}
          gap="20px"
          display={{ base: "block", lg: "grid" }}
        >
          <Flex gridArea={{ base: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}>
            <OverallRevenue />
          </Flex>
          <Flex gridArea={{ base: "2 / 1 / 3 / 3", "2xl": "1 / 2 / 2 / 3" }}>
            <Balance />
          </Flex>
        </Grid>
        <Grid
          gap="20px"
          gridTemplateColumns={{
            md: "repeat(2, 1fr)",
            "2xl": "repeat(3, 1fr)",
          }}
          gridTemplateRows={{
            md: "repeat(2, 1fr)",
            "2xl": "1fr",
          }}
          mb="20px"
        >
          <Flex gridArea={{ md: "1 / 1 / 2 / 2", "2xl": "1 / 1 / 2 / 2" }}>
            <DailyTraffic />
          </Flex>
          <Flex gridArea={{ md: "1 / 2 / 2 / 3", "2xl": "1 / 2 / 2 / 3" }}>
            <ProjectStatus />
          </Flex>
          <Flex gridArea={{ md: " 2 / 1 / 3 / 3", "2xl": "1 / 3 / 2 / 4" }}>
            <ProfitEstimation />
          </Flex>
        </Grid>
        <Grid
          templateColumns={{ base: "repeat(2, 1fr)", "2xl": "350fr 720fr" }}
          gap="20px"
          display={{ base: "block", lg: "grid" }}
        >
          <Flex gridArea={{ base: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}>
            <YourTransfers />
          </Flex>
          <Flex gridArea={{ base: "2 / 1 / 3 / 3", "2xl": "1 / 2 / 2 / 3" }}>
            <MostVisitedTable
              tableData={tableDataMostVisited}
              columnsData={tableColumnsMostVisited}
            />
          </Flex>
        </Grid>
      </Flex>
      <VSeparator
        mx="20px"
        bg={paleGray}
        display={{ base: "none", xl: "flex" }}
      />
      <YourCard
        maxW={{ base: "100%", xl: "400px" }}
        maxH={{ base: "100%", xl: "1170px", "2xl": "100%" }}
      />
    </Flex>
  );
}
