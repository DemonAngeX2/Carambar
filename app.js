// app.js

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const blagueRoutes = require('./views/blagueRoutes');

const app = express();

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'API de Blagues',
      version: '1.0.0',
      description: 'Une API de blagues pour votre divertissement',
    },
  },
  apis: ['app.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api/blagues', blagueRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
