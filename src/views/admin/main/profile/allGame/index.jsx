import { Box, Grid } from '@chakra-ui/react'
import './index.css'
import TrendingGames from './components/TrendingGames'
import GameCard from './components/GameCard'

export default function allGame(){
    return(
<Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
<Grid
 mb="20px"
 gridTemplateColumns={{
   base: 'repeat(2, 1fr)',
   '2xl': '720fr 350fr',
 }}
 gap="20px"
>
{/* <TrendingGames></TrendingGames> */}
<GameCard></GameCard>

</Grid>
</Box>
    )
}