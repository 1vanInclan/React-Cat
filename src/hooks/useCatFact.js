import { useEffect, useState } from "react"
import { getRandomFact } from "../services/facts"

export function useCatFact() {
  const [fact, setFact] = useState()

  // Recuperar la cita al cargar la pagina
  const refreshCat = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  useEffect(refreshCat, [])

  return { fact, refreshCat }
}