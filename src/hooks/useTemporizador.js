import { useState, useEffect, useRef } from 'react'

export function useTemporizador(segundosIniciales = 60) {
  const [segundos, setSegundos] = useState(segundosIniciales)
  const [activo, setActivo] = useState(false)
  const intervaloRef = useRef(null)

  useEffect(() => {
    if (activo && segundos > 0) {
      intervaloRef.current = setInterval(() => {
        setSegundos((prev) => prev - 1)
      }, 1000)
    } else {
      clearInterval(intervaloRef.current)
    }

    return () => clearInterval(intervaloRef.current)
  }, [activo, segundos])

  const iniciar = () => {
    if (segundos > 0) setActivo(true)
  }

  const pausar = () => {
    setActivo(false)
  }

  const reiniciar = () => {
    setActivo(false)
    setSegundos(segundosIniciales)
  }

  return { segundos, activo, iniciar, pausar, reiniciar }
}