const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const app = express();

const swaggerOptions = {
    swaggerDefinition: {
        info: {
         title:  'Project API',
        version: '1.0.0'
    }
},
apis: ['app.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

/**
 * @swagger
 * /apis:
 *   get:
 *     description: Get all apis
 *     responses:
 *       200:
 *         description: Success
 * 
 */

app.get('/apis', (req,res) => {
  res.send([
      {
          id: 1,
          title: 'Api'
      }

  ])
});

/**
 * @swagger
 * /apis:
 *   post:
 *     description: Create a new api
 *     parameters:
 *     - name: title
 *       description: title of the api
 *       in: formData
 *       required: true
 *       type: string
 *     responses:
 *       201:
 *         description: Created
 * 
 */

app.post('/apis', (req, res) => {
    res.status(201).send();
})

app.listen(5000, () => console.log("listening on 5000"));