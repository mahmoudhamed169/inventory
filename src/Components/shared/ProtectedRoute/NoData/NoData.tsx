import { Box } from '@mui/material'
import NoDataImg from "../../../../../src/assets/images/image.png"
export default function NoData() {
  return (
    <>
      <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Box component="img" src={NoDataImg} sx={{maxWidth:"33%"}} />
      </Box>
    </>
  )
}
