import { useEffect, useState } from 'react'
import './App.css'
import { Desk } from './app/Models/Desk/Desk.model'

function App() {
    const [desk, setDesk] = useState<Desk>()

    useEffect(() => {
        setDesk(new Desk('nameblack', 'namewhite'))
    }, [])
    useEffect(() => {
        // setDesk(desk?.initDesk())
        console.log(desk)
    }, [desk])
    return <div className="App">app</div>
}

export default App
