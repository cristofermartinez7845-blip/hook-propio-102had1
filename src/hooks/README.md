## useTemporizador(segundosIniciales = 60)

Maneja una cuenta regresiva en segundos, con controles para iniciar, pausar y reiniciar. Útil para cronómetros, exámenes con tiempo límite, o cualquier componente que necesite un conteo regresivo independiente.

**Parámetros**

| Nombre | Tipo | Por defecto | Descripción |
|---|---|---|---|
| segundosIniciales | number | 60 | Cantidad de segundos desde la que inicia la cuenta regresiva |

**Devuelve**

```js
{ segundos, activo, iniciar, pausar, reiniciar }
// segundos: number — segundos restantes
// activo: boolean — si el temporizador está corriendo
// iniciar: function — comienza o reanuda la cuenta regresiva
// pausar: function — detiene la cuenta sin reiniciarla
// reiniciar: function — vuelve a segundosIniciales y detiene el conteo
```

**Ejemplo de uso**

```jsx
import { useTemporizador } from '../hooks/useTemporizador'

function Cronometro() {
  const { segundos, activo, iniciar, pausar, reiniciar } = useTemporizador(30)

  return (
    <div>
      <p>{segundos}s</p>
      <button onClick={iniciar} disabled={activo}>Iniciar</button>
      <button onClick={pausar} disabled={!activo}>Pausar</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  )
}
```

**Limitaciones**

No persiste el estado al recargar la página (si se recarga, vuelve a `segundosIniciales`). No soporta conteo ascendente ni múltiplos de segundos (milisegundos). Cada instancia del hook mantiene su propio estado independiente, incluso si varios componentes lo usan al mismo tiempo.