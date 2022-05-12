import './Project.css'
import { useState } from 'react'
import { Box, Collapse, Fade, Grow, Grid } from '@mui/material'
import { ArrowDropDownCircleSharp } from '@mui/icons-material'
import ReactMarkdown from 'react-markdown'
import axios from 'axios'

function Project(props) {
    const [readme, setReadme] = useState('')
    axios.get('https://raw.githubusercontent.com/Derposoft/Derposoft.github.io/master/README.md').then(res => {
        setReadme(res.data)
        console.log(readme)
    })
    const [open, setOpen] = useState(false)
    var showBig = () => {
        setOpen(open ? false : true)
        console.log('open: ' + open)
    }
    
    return (
        <div onClick={showBig} class='project'>
            <Box>
                <Grid container>
                    <Grid item xs={8}>
                        <b class='cardtext'>{props.name}</b>
                        <p class='cardtext'>{props.subtitle}</p>
                    </Grid>
                    <Grid item xs={2}>
                        <div className='rotatebutton'>
                            <ArrowDropDownCircleSharp fontSize='large' className={(open ? 'turndown' : 'turnup')}/>
                        </div>
                    </Grid>
                </Grid>
                <Collapse in={open}>
                    <p class='cardtext'>
                        <ReactMarkdown>{readme}</ReactMarkdown>
                    </p>
                </Collapse>
            </Box>
        </div>
    )
}

export default Project
