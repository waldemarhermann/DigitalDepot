/* Die index.js-Datei ist die Hauptdatei der Anwendung. Sie importiert die connectToDatabase-Funktion aus database.js und ruft sie auf, um eine Verbindung zur Datenbank herzustellen. Die index.js-Datei definiert auch die Express-App und startet den Webserver. Es handelt sich also um die Startdatei der Anwendung, die die verschiedenen Teile zusammenführt.
 */


import dotenv from 'dotenv';

import connectToDatabase from './database.js';
import express from 'express';

//Routes
import productRoutes from './routes/productRoutes.js';

dotenv.config();
connectToDatabase();
const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;

app.use('/api/products', productRoutes);
/* app.use('/api/products', productRoutes) definiert eine Route /api/products in der Express-Anwendung app und gibt an, dass die Routenlogik, die in productRoutes definiert ist, für diese Route verwendet werden soll.

Wenn der Server eine Anfrage erhält, die an die Route /api/products gesendet wird, wird die entsprechende Funktion in productRoutes ausgeführt, um die Anfrage zu verarbeiten und eine Antwort zurückzugeben. */

app.listen(port, () => {
  console.log(`Server runs on Port ${port}.`);
});
