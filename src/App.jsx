import AboutUs from "./pages/AboutUs";
//Global Style

import { GlobalStyle } from "./components/GlobalStyle";
const App=()=>{
    return (
        <div className="flex ">
            <GlobalStyle />
            <AboutUs />
        </div>
    )
}

export default App;