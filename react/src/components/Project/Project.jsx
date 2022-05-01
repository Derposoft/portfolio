import './Project.css'
import { Card, CardHeader } from '@mui/material'

function Project(props) {
    return (
        <div>
            <Card class='project'>
                <b>{props.name}</b>
            </Card>
        </div>
    )
}

export default Project
