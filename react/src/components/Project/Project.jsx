import './Project.css'
import { useState } from 'react'
import { Box, Collapse, Fade, Grow, Grid } from '@mui/material'
import { ArrowDropDownCircleSharp } from '@mui/icons-material'
import ReactMarkdown from 'react-markdown'

function Project(props) {
    const [open, setOpen] = useState(true)
    var showBig = () => {
        setOpen(open ? false : true)
        console.log('open: ' + open)
    }
    console.log(ReactMarkdown('./../README.md'))
    return (
        <div onClick={showBig} class='project'>
            <Box>
                <Grid container>
                    <Grid item xs={10}>
                        <b class='cardtext'>{props.name}</b>
                        <p class='cardtext'>{props.subtitle}</p>
                    </Grid>
                    <Grid item xs={2} class='dropdownarrow'>
                        <ArrowDropDownCircleSharp fontSize='large' />
                    </Grid>
                </Grid>
                <Collapse in={open}>
                    <p class='cardtext'>
                        
                        bottom text test
                    </p>
                </Collapse>
            </Box>
        </div>
    )
}

export default Project
