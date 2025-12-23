import Info from "./Info.jsx"
import About from "./About.jsx"
import Interests from "./Interests.jsx"
import Footer from "./Footer.jsx"

function App() {
    return (
        <main>
            <div className="columns">
                <div className="column-left">
                    <Info />
                </div>
                <div className="column-right">
                    <About />
                    <Interests />
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default App