import { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { useSearchParams, useLocation } from 'react-router-dom'
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
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <PageSelector page={page} />        
        </Grid>
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