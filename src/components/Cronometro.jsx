import { useTemporizador } from '../hooks/useTemporizador'

function Cronometro() {
  const { segundos, activo, iniciar, pausar, reiniciar } = useTemporizador(30)

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem', borderRadius: '8px' }}>
      <h2>Cronómetro A (30s)</h2>
      <p style={{ fontSize: '2rem' }}>{segundos}s</p>
      <button onClick={iniciar} disabled={activo}>Iniciar</button>
      <button onClick={pausar} disabled={!activo}>Pausar</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  )
}

export default Cronometro