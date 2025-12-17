import Fastify from 'fastify'
import { CalculadoraRouter } from './routes/calculator.router'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import path from 'path'

const fastify = Fastify({ logger: true })

const openapiPath = path.join(__dirname, '../openapi.yaml')

fastify.register(fastifySwagger, {
  mode: 'static',
  specification: {
    path: openapiPath,
    baseDir: path.dirname(openapiPath)
  }
})

fastify.register(fastifySwaggerUi, {
  routePrefix: '/docs',
  uiConfig: {
    docExpansion: 'list',
    deepLinking: false
  }
})

fastify.register(CalculadoraRouter)

fastify.get('/', async () => {
  return { message: 'MCP Server corriendo' }
})

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
