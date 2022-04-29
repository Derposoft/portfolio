import './PageWindow.css'
import Home from '../Pages/Home'
import Portfolio from '../Pages/Portfolio'
import About from '../Pages/About'

function Page(props) {
    var component = <p></p>
    switch(props.location.hash) {
        case '#home':
            component = <Home />
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
        <div class=''>
            <p>{component}</p>
        </div>
    )
}

export default Page