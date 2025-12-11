import "./App.css"
import { Otro } from "./Components/Otro"
import { useCatFact } from "./hooks/useCatFact"
import { useCatImage } from "./hooks/useCatImage"


export function App() {
  const { fact, refreshCat } = useCatFact()
  const { imageUrl } = useCatImage({ fact })
  
  const handleClick = async () => {
    refreshCat()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={ handleClick }>Get new fact</button>
        { fact && <p>{fact}</p>}
        { imageUrl && <img src={imageUrl} alt={`Image extrated using the first three words for ${fact}`} />}

      <Otro />
    </main>
  )
}