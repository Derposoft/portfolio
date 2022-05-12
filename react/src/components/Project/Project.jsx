import './Project.css'
import { useState } from 'react'
import { Box, Collapse, Fade, Grow, Grid } from '@mui/material'
import { ArrowDropDown, GitHub } from '@mui/icons-material'
import ReactMarkdown from 'react-markdown'
import axios from 'axios'

const MAX_TITLE_LEN = 35

function Project(props) {
    var preprocessReadme = text => {
        return text.replace('# ', '### ') // bump down all title sizes by 2 steps
    }
    var preprocessTitle = text => {
        return text.length > MAX_TITLE_LEN ? text.substr(0, MAX_TITLE_LEN-3)+'...' : text
    }
    const [readme, setReadme] = useState('')
    const readmeLink = (props.url+'/master/README.md').replace('github', 'raw.githubusercontent')
    console.log(readmeLink)
    axios.get(readmeLink).then(res => {
        setReadme(preprocessReadme(res.data))
        //console.log(readme)
    })
    const [open, setOpen] = useState(false)
    var showBig = () => {
        setOpen(open ? false : true)
    }
    
    return (
        <div onClick={showBig} class='project'>
            <Box>
                <Grid container>
                    <Grid item xs={10}>
                        <b class='cardtext'>{preprocessTitle(props.name)}</b>
                        <p class='readmetext'>{props.subtitle}</p>
                    </Grid>
                    <Grid item xs={2}>
                        <div className='rotatebutton'>
                            <a onClick={e=>e.stopPropagation()} style={{color:'white', zIndex:25}} href={props.url} target='_blank'><GitHub fontSize='large' /></a>
                            <ArrowDropDown style={{marginLeft: '20px'}} fontSize='large' className={(open ? 'turndown' : 'turnup')}/>
                        </div>
                    </Grid>
                </Grid>
                <Collapse in={open}>
                    <p class='readmetext'>
                        <ReactMarkdown>{readme}</ReactMarkdown>
                    </p>
                </Collapse>
            </Box>
        </div>
    )
}

export default Project
