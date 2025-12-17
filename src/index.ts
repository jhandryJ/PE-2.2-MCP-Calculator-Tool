import Fastify from 'fastify'
import { CalculadoraRouter } from './routes/calculator.router'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import path from 'path'

const fastify = Fastify({ logger: true })

// Ruta del archivo OpenAPI
const openapiPath = path.join(__dirname, '../openapi.yaml')

// Registrar Swagger usando OpenAPI estático
fastify.register(fastifySwagger, {
  mode: 'static',
  specification: {
    path: openapiPath,
    baseDir: path.dirname(openapiPath)
  }
})

// Registrar Swagger UI
fastify.register(fastifySwaggerUi, {
  routePrefix: '/docs',
  uiConfig: {
    docExpansion: 'list',
    deepLinking: false
  }
})

// Registrar rutas
fastify.register(CalculadoraRouter)

// Ruta raíz
fastify.get('/', async () => {
  return { message: 'MCP Server corriendo' }
})

// Iniciar servidor
const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
    console.log('Server listening on http://localhost:3000')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
