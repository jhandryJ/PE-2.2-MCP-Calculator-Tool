# PE-2.2 CALCULATOR – API MCP

API REST desarrollada con **Fastify + TypeScript**, diseñada para procesar operaciones aritméticas básicas (suma, resta, multiplicación y división).
El proyecto integra **Swagger** para documentar la API, emplea **JSON Schema** para validar los datos de entrada y utiliza una arquitectura modular siguiendo buenas prácticas de desarrollo.

---

## **Estructura del Proyecto**

El proyecto está organizado de forma clara y modular:

```

PE-2.2-CALCULATOR/
│
├── capturas/                  # Evidencias y pruebas
├── node_modules/              # Dependencias del entorno
│
├── src/
│   ├── routes/
│   │   └── calculator.router.ts     # Control de la operación calculadora
│   │
│   ├── tools/
│   │   └── calculator.tools.json    # Esquema de validación de entrada
│   │
│   └── index.ts                     # Servidor, configuración y Swagger
│
├── package.json
├── package-lock.json
└── tsconfig.json

```

---

## **Descripción General**

La API expone un endpoint principal utilizado para resolver operaciones matemáticas básicas:

```

POST /tools/calculadora

````

El flujo general de funcionamiento es el siguiente:

1. El usuario envía un cuerpo JSON que incluye la operación a realizar y dos valores numéricos.
2. Los datos pasan por un sistema de validación definido en un archivo JSON.
3. Según la operación solicitada, el sistema ejecuta el cálculo.
4. Se devuelve un resultado exitoso o un mensaje de error si la petición es inválida.

La API está diseñada para operar de forma segura, validada y documentada.

---

## **Principales Funcionalidades**

Permite ejecutar **cuatro operaciones aritméticas**:

- Suma  
- Resta  
- Multiplicación  
- División  

Otras características importantes:

- Validación estricta del JSON recibido mediante un esquema formal.
- Documentación automática accesible desde **/docs** gracias a Swagger UI.
- Manejo robusto de errores, incluyendo división entre cero.
- Arquitectura modular que separa rutas, herramientas y configuración principal.
- Implementación completa con **TypeScript** para mejorar la calidad del código.

---

## **Instalación del Proyecto**

Para instalar las dependencias del entorno:

```bash
npm install
````

---

## **Ejecución del Servidor**

Para iniciar el servidor en modo desarrollo:

```bash
npm run dev
```

Una vez levantado, el servidor estará disponible en:

```
http://localhost:3000
```

---

## **Documentación Swagger**

La documentación interactiva generada automáticamente está disponible en:

```
http://localhost:3000/docs
```

Desde Swagger UI se puede:

* Ver cómo funciona el endpoint
* Revisar los parámetros requeridos
* Probar la API desde el navegador
* Consultar las respuestas posibles

---

## **Funcionamiento del Endpoint**

El endpoint de la calculadora:

* **Recibe** un objeto JSON con la operación a realizar y los valores numéricos.
* **Valida** que la operación sea una de las permitidas y que los números sean válidos.
* **Ejecuta** la operación correspondiente.
* **Responde** con el resultado o con un mensaje de error si los datos no cumplen el esquema.

La validación evita entradas incorrectas, propiedades adicionales y operaciones inválidas.

---

## **Pruebas Realizadas**

Se realizaron pruebas con los siguientes escenarios utilizando Swagger UI:

### Suma

Entrada válida → retorna el resultado correcto.

### Resta

Entrada válida → devuelve el resultado esperado.

### Multiplicación

Entrada válida → operación correcta.

### División

Entrada válida → resultado calculado correctamente.

### División entre cero

La API responde con un **error 400**, indicando que la operación no es válida.

### Validación de esquema

Si el usuario envía datos incorrectos, faltantes o con propiedades adicionales, la API los rechaza de forma segura.

---

## **Resultado Final del Proyecto**

Esta API cumple con los requisitos del MCP:

* Arquitectura limpia y estructurada
* Operaciones matemáticas funcionales
* Manejo seguro y validado de entrada
* Documentación clara con Swagger
* Buenas prácticas de desarrollo con TypeScript y Fastify

Es una solución lista para ser integrada o ampliada.

---

## 🔐 Seguridad y Autenticación

Aunque la autenticación no está implementada en esta versión, la documentación OpenAPI incluye esquemas de seguridad con el objetivo de mostrar buenas prácticas de diseño de APIs.

### Esquemas documentados:

* **API Key**: Uso de una clave enviada en el header `X-API-KEY`
* **Bearer Token (JWT)**: Autenticación basada en tokens JWT

### Mitigación de Tool Poisoning

Para prevenir ataques de Tool Poisoning, el API documenta la validación estricta de entradas, control de acceso y limitación de solicitudes automatizadas no autorizadas.

---

## 📦 Versionado del API

El MCP Calculator Tool utiliza versionado semántico (SemVer):

* **MAJOR**: Cambios incompatibles
* **MINOR**: Nuevas funcionalidades compatibles
* **PATCH**: Correcciones y mejoras internas

Ejemplos:

* `1.0.0` → Versión inicial
* `1.1.0` → Nueva operación matemática
* `2.0.0` → Cambio en estructura de respuestas

La estrategia de versionado por URL (`/api/v1`) permite mantener compatibilidad con clientes existentes y facilitar la evolución del API.

---

## **Autor**

**Jhandry Jaramillo**
Práctica PE-2.2 – MCP
Universidad Internacional del Ecuador (UIDE)

````