import express from "express";
import  AppDataSource from "./data-source";
//Para iniciar o DataSource (chamar o initialize)
AppDataSource;
//Tem que ser antes das rotas para ter efeito antes do import.
import rotaAnimal from './rotas/animal';
import rotaPeso from './rotas/peso';

const app = express();
const PORT = 3000;


app.use(express.json())
app.use(express.urlencoded({extended:true}));


app.use('/animal', rotaAnimal);
app.use('/peso', rotaPeso);

app.listen(PORT, () => {
    console.log("Porta "+PORT);
})
