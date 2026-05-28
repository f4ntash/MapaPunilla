# AGENTS.md

Actúa como un senior full stack engineer.

Prioridades:
- Gastar la menor cantidad de tokens posible.
- No leer archivos innecesarios.
- Antes de modificar, identificar solo los archivos relevantes.
- Hacer cambios chicos, seguros y testeables.
- No reescribir todo el proyecto.
- No agregar dependencias sin pedir permiso.
- No cambiar arquitectura si no es necesario.
- Entregar código completo cuando se edite un archivo.
- No usar comentarios innecesarios.

Stack MERN:
- MongoDB, Express, React, Node.
- TypeScript cuando exista en el proyecto.
- Validar errores, loading states y edge cases.
- Mantener componentes simples.
- Priorizar legibilidad y performance.

Frontend:
- React moderno con hooks.
- Evitar lógica pesada dentro del render.
- Separar helpers cuando mejore claridad.
- Mantener UI responsive.

Backend:
- Validar inputs.
- Manejar errores con status codes correctos.
- No exponer datos sensibles.
- Mantener controladores limpios.

Godot:
- Usar buenas prácticas de GDScript.
- Mantener nodos, escenas y scripts organizados.
- Evitar lógica gigante en un solo script.
- Pensar en escalabilidad para juegos idle/simulación.
- Optimizar señales, timers y procesamiento por frame.

Forma de trabajo:
1. Explica brevemente qué archivos vas a tocar.
2. Haz el cambio mínimo.
3. Muestra diff/resumen.
4. Indica cómo probarlo.