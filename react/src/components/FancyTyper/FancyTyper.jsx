import './FancyTyper.css'
import ReactTypingEffect from 'react-typing-effect'

function FancyTyper(props) {
    console.log(props)
    const speed = props.speed == undefined ? 100 : props.speed
    //const messages = props.children
    //const n_lines = Math.floor(props.children.length / (0.001*window.innerWidth))
    //console.log(n_lines)
    return (
        <div>
            <ReactTypingEffect
                text={props.children}
                speed={speed}
                eraseSpeed={speed}
                cursorRenderer={cursor => <p>_</p>}
                displayTextRenderer={(text, i) => {
                return (
                    <p>
                    {text.split('').map((char, i) => {
                        const key = `${i}`;
                        return (
                        <span
                            key={key}
                        >{char}</span>
                        );
                    })}
                    </p>
                );
                }}        
            />
        </div>
    )
}

/*

            <p class='fancytype'>
                {props.children}
            </p>
*/

export default FancyTyper
