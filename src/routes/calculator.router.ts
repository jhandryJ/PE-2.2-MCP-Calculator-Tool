import { FastifyInstance } from 'fastify';
import calculatorTools from '../tools/calculator.tools.json';

interface CalculadoraRequest {
    operacion: 'sumar' | 'restar' | 'multiplicar' | 'dividir';
    a: number;
    b: number;
}


export const CalculadoraRouter = (Fastify: FastifyInstance) => {
    Fastify.post<{ Body: CalculadoraRequest }>(
        '/V1/tools/calculadora',
        {
            schema: {
                description: 'Calculadora de operaciones aritméticas básicas',
                tags: ['calculadora'],
                body: calculatorTools.inputSchema,
                response: {
                    200: {
                        type: 'object',
                        properties: {
                            result: { type: 'number' },
                            operacion: { type: 'string' }
                        }
                    },
                    400: {
                        type: 'object',
                        properties: {
                            error: { type: 'string' },
                        }
                    },
                }
            }
        },

        (request, reply) => {
            const { operacion, a, b } = request.body;
            let result: number = 0;
            switch (operacion) {
                case 'sumar':
                    result = a + b;
                    break;
                case 'restar':
                    result = a - b;
                    break;
                case 'multiplicar':
                    result = a * b;
                    break;
                case 'dividir':
                    if (b === 0) {
                        reply.status(400).send({ error: 'Division por 0 es invalido' });
                        return;
                    }
                    result = a / b;
                    break;
            }
            return ({ result });
        }
    )
}