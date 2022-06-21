import "./App.css";
import Counter from "./hoc/counterfn";
import StockFn from "./hoc/buystockfn"
import { useState } from 'react'

export default function App() {
  const [currentPage, setCurrentPage] = useState()
    
    const toCounterFn = () => {
        setCurrentPage(<Counter/>)
    }
    const toStockFn = () => {
        setCurrentPage(<StockFn/>)
    }
    return (<>
        <nav>
            <ul>
                <button onClick={toCounterFn}>CounterFn</button>
                <button onClick={toStockFn}>StockFn</button>
            </ul>
        </nav>
        <h1 className="app__title">Choose a Counter</h1>
        <div>
            {currentPage}
        </div>
    </>)
}
