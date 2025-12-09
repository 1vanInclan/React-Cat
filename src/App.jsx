import { useEffect, useState } from "react"


const CAT_ENDPOINT_FACT = "https://catfact.ninja/fact"
// const CAT_ENDPOINT_IMAGEURL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

export function App() {

  const [fact, setFact] = useState()

  useEffect(() => {
    async function getRandomCat() {
      const res = await fetch(CAT_ENDPOINT_FACT)
      const json = await res.json()
      setFact(json.fact)
    }
    
    getRandomCat()
  }, [])

  return (
    <main>
      <h1>App de gatitos</h1>
      { fact && <p>{fact}</p>}
    </main>    
  )
}