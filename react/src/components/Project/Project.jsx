import './Project.css'
import { useState } from 'react'
import { Box, Fade, Grow } from '@mui/material'

function Project(props) {
    const [open, setOpen] = useState(true)
    var showBig = () => {
        setOpen(open ? false : true)
        console.log('open: ' + open)
    }
    return (
        <div onClick={showBig} class='project-container'>
            <Fade in={open}>
                <Box class='project'>
                        <div>
                            <b class='cardtext'>{props.name}</b>
                            <p class='cardtext'>{props.subtitle}</p>
                        </div>
                </Box>
            </Fade>
        </div>
    )
}

export default Project
