// Import the framework and instantiate it
import Fastify from 'fastify'
import { CalculadoraRouter } from './routes/calculator.router'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'

const fastify = Fastify({
  logger: true
})
// Registrar Swagger
fastify.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'MCP para calcular operaciones basicas',
      description: 'API para operaciones aritméticas básicas usando MCP',
      version: '1.0.0'
    },
    servers: [
      { 
        url: 'http://localhost:3000',
        description: 'Servidor local' 
      }
    ],
    tags: [
      { 
        name: 'Calculadora', 
        description: 'Calculadora de operaciones' 
      }
    ]
  }
})

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
fastify.get('/', async (request, reply) => {
  return { message: 'MCP Server corriendo' }
})

// Iniciar servidor
const star = async () => {
  try {
    await fastify.listen({ port: 3000 })
    console.log('Server listening on http://localhost:3000')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

star()
