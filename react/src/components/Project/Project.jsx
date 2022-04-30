import './Project.css'
import { Card, CardHeader } from '@mui/material'

function Project(props) {
    return (
        <div>
            <Card class='project'>
                <CardHeader title={props.name} />
            </Card>
        </div>
    )
}

export default Project
