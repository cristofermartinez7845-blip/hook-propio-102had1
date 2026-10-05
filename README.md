# Hook Propio — useTemporizador

Proyecto de la tarea "Bibliotecas propias: un Custom Hook Documentado" (102HAD1).

## Qué hace

Implementa un custom hook `useTemporizador` que maneja una cuenta regresiva con controles de iniciar, pausar y reiniciar. Se usa en dos componentes distintos (`Cronometro` y `CronometroCorto`) que se muestran simultáneamente en `App.jsx`, demostrando que cada instancia mantiene su propio estado de forma independiente.

Documentación completa del hook en [`src/hooks/README.md`](./src/hooks/README.md).

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Abre `http://localhost:5173` en el navegador.

## Análisis

**1. ¿Qué lógica encapsula el hook y por qué corresponde a un hook y no a una función utilitaria?**

El hook encapsula el manejo de una cuenta regresiva: cuántos segundos quedan, si está corriendo o no, y el intervalo que descuenta un segundo cada vez. Esto requiere mantener estado que persiste entre renders y que, al cambiar, provoca que el componente se vuelva a dibujar — eso solo lo puede hacer un hook (usando `useState`/`useEffect`), no una función utilitaria pura como las de `formato.js`, que solo transforma datos de entrada a salida sin memoria ni efectos.

**2. ¿Por qué los dos componentes no comparten el estado aunque usen el mismo hook?**

Cada vez que un componente llama a `useTemporizador(...)`, React crea una instancia de estado independiente para esa llamada específica, aunque provenga de la misma función. Es como ejecutar la misma receta dos veces con ingredientes propios: comparten el procedimiento, no el resultado. En las capturas se ve claramente: al iniciar solo el Cronómetro A, su contador baja mientras el Cronómetro B permanece detenido en su valor inicial.

**3. Si el hook se publicara como paquete npm en la versión 1.0.0, ¿qué cambio exigiría 2.0.0 y cuál solo 1.1.0?**

Un cambio que rompa la interfaz actual —por ejemplo, renombrar `segundos` a `tiempoRestante`, quitar `reiniciar`, o cambiar el orden/tipo de los parámetros— exigiría la versión **2.0.0**, porque el código de quienes ya usan el hook dejaría de funcionar. En cambio, agregar una funcionalidad nueva sin tocar lo existente —como un parámetro opcional extra o una función adicional que no reemplace ninguna actual— solo requeriría **1.1.0**, al ser compatible hacia atrás.