import { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { Divider } from '@mui/material'
import { useLocation } from 'react-router-dom'
// my components
import PageSelector from './PageNav/PageSelector'
import PageWindow from './PageNav/PageWindow'
import './Main.css'

  
const Main = (e) => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0 })
    setPage(location)
  }, [location])
  const [page, setPage] = useState('home')
  return (
    <Box sx={{ flexGrow: 1 }} class='main'>
      <Grid container spacing={2} style={{height: '100%'}}>
        <Grid item xs={4} style={{verticalAlign: 'center', textAlign: 'center'}}>
          <PageSelector page={page} />   
        </Grid>
        {/*<Divider orientation="vertical" flexItem style={{marginRight:"-1px"}} />*/}
        <Grid item xs={8}>
          <div>
            <PageWindow location={location} />
          </div>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Main
