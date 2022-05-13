import './PageWindow.css'
import Home from '../Pages/Home'
import Resume from '../Pages/Resume'
import Portfolio from '../Pages/Portfolio'
import About from '../Pages/About'

function PageWindow(props) {
    var component = <p className='tall'></p>
    switch(props.location.hash) {
        case '#home':
            component = <Home />
            break
        case '#resume':
            component = <Resume />
            break
        case '#portfolio':
            component = <Portfolio />
            break
        case '#about':
            component = <About />
            break
        default:
            component = <Home />
    }
    return (
        <p className='tall'>{component}</p>
    )
}

export default PageWindow