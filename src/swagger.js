//SWAGGER
const path = require('path');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerSpec =

{
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API",
            version: "1.0",
            description: "API de Roberto Rodríguez Núñez para documentarla con Swagger. todos los métodos de la API funcionan de manera real.",
            contact: {
                name: "Roberto Rodríguez Núñez",
                email: "roberto.s252272@cesurformacion.com",
                url: "https://api.com"
            },
            license: {
                name: "GPLv3",
                url: "https://www.gnu.org/licenses/gpl-3.0.en.html"
            },
        },
        paths: {
            "/api/hombres": {
                get: {
                    summary: "Devuelve a todos los hombres que se encuentran en el sistema",
                    tags: [
                        "Hombres"
                    ],
                    responses: {
                        200: {
                            description: "Lista de hombres.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                id: {
                                                    type: "integer",
                                                    format: "int64"
                                                },
                                                name: {
                                                    type: "string"
                                                }
                                            }, example: {

                                                "id": 1,
                                                "name": "Juan Perez"
                                            }
                                        }
                                    }
                                }

                            }
                        }
                    }
                }
            },
            "/api/hombres/{id}": {
                get: {
                    summary: "Devuelve un hombre de la API filtrando por ID",
                    tags: [
                        "Hombres"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID del hombre a recoger",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "Se ha recogido un hombre.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            name: {
                                                type: "string"

                                            }
                                        }, example: {
                                            "name": "Juan Perez"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                delete: {
                    summary: "Borra un hombre de la API",
                    tags: [
                        "Hombres"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID del hombre a eliminar",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "Se ha eliminado un hombre.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string"
                                            }
                                        },
                                        example: {
                                            "message": "Hombre eliminado"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/api/hombres/{name}": {
                post: {
                    summary: "Añade un hombre a la API con id dinámico",
                    tags: [
                        "Hombres"
                    ],
                    parameters: [
                        {
                            name: "name",
                            in: "path",
                            description: "Nombre del hombre a añadir",
                            required: true,
                            type: "string",
                            format: "string"
                        }
                    ],
                    responses: {
                        200: {
                            description: "Un hombre.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string"
                                            }
                                        },
                                        example: {
                                            "message": "Se ha añadido un nuevo hombre."
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/api/hombres/{id}/{name}": {
                put: {
                    summary: "Actualizar un hombre de la API",
                    tags: [
                        "Hombres"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID del hombre a actualizar",
                            required: true,
                            type: "integer",
                            format: "int64"
                        },
                        {
                            name: "name",
                            in: "path",
                            description: "Nombre del hombre a actualizar",
                            required: true,
                            type: "string",
                            format: "string"
                        }
                    ],
                    responses: {
                        200: {
                            description: "Se ha actualizado un hombre.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string"
                                            }
                                        },
                                        example: {
                                            "message": "Hombre actualizado"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/api/mujeres": {
                get: {
                    summary: "Devuelve a todas las mujeres que se encuentran en el sistema",
                    tags: [
                        "Mujeres"
                    ],
                    responses: {
                        200: {
                            description: "Lista de mujeres.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                id: {
                                                    type: "integer",
                                                    format: "int64"
                                                },
                                                name: {
                                                    type: "string"
                                                }
                                            }, example: {

                                                "id": 1,
                                                "name": "María García"
                                            }
                                        }
                                    }
                                }

                            }
                        }
                    }
                }
            },
            "/api/mujeres/{id}": {
                get: {
                    summary: "Devuelve una mujer de la API filtrando por ID",
                    tags: [
                        "Mujeres"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID de la mujer a recoger",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "Se ha obtenido una mujer por el ID.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            name: {
                                                type: "string"

                                            }
                                        }, example: {
                                            "name": "María García"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                delete: {
                    summary: "Borra una mujer de la API",
                    tags: [
                        "Mujeres"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID de la mujer a eliminar",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "Se ha borrado una mujer de la API.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string"
                                            }
                                        },
                                        example: {
                                            "message": "Mujer eliminada"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/api/mujeres/{name}": {
                post: {
                    summary: "Añade una mujer a la API con id dinámico",
                    tags: [
                        "Mujeres"
                    ],
                    parameters: [
                        {
                            name: "name",
                            in: "path",
                            description: "Nombre de la mujer a añadir",
                            required: true,
                            type: "string",
                            format: "string"
                        }
                    ],
                    responses: {
                        200: {
                            description: "Se ha añadido una nueva mujer",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string"
                                            }
                                        },
                                        example: {
                                            "message": "Mujer añadida."
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "/api/mujeres/{id}/{name}": {
                put: {
                    summary: "Actualizar una mujer de la API",
                    tags: [
                        "Mujeres"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID de la mujer a actualizar",
                            required: true,
                            type: "integer",
                            format: "int64"
                        },
                        {
                            name: "name",
                            in: "path",
                            description: "Nombre de la mujer a actualizar",
                            required: true,
                            type: "string",
                            format: "string"
                        }
                    ],
                    responses: {
                        200: {
                            description: "Se ha actualizado una mujer.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string"
                                            }
                                        },
                                        example: {
                                            "message": "Mujer actualizado"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
    },
    apis: [path.join(__dirname, 'routes/*.js')]
};
const swaggerDocs = (app, port) => {

    app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));
    console.log(`Documentación de Swagger disponible en http://localhost:${port}/api/docs`);
}

module.exports = { swaggerDocs };
