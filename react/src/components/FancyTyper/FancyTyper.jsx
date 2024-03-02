import Typewriter from 'typewriter-effect';
import './FancyTyper.css'

function FancyTyper(props) {
    const speed = props.speed === undefined ? 100 : props.speed
    let text = props.children
    return (
        <div>
            <Typewriter
                options={{
                    strings: text,
                    autoStart: true,
                    loop: true,
                    delay: speed,
                    deleteSpeed: 30,
                    cursor: "_",
                    pauseFor: 2000,
                }}
            />
        </div>
    )
}

export default FancyTyper
