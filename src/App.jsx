import { useEffect, useState } from "react"
import "./App.css"


const CAT_ENDPOINT_FACT = "https://catfact.ninja/fact"
// const CAT_ENDPOINT_IMAGEURL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

export function App() {

  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  // Recuperar la cita al cargar la pagina
  useEffect(() => {
    
  }, [])

  // Para recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return;
    const threeFirstWords = fact.split(" ", 3);

    fetch(
      `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((data) => {
        const { url } = data;
        setImageUrl(url);
      });
  }, [fact]);

  const handleClick = () => {
    fetch(CAT_ENDPOINT_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={ handleClick }>Get new fact</button>
        { fact && <p>{fact}</p>}
        { imageUrl && <img src={imageUrl} alt={`Image extrated using the first three words for ${fact}`} />}
    </main>    
  )
}