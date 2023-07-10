import express from 'express';
import mysql from 'mysql';
import logger from 'morgan';
import cors from 'cors';

const app = express();

//middelwares
app.use(logger('dev'));
app.use(express.json())
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//db
const db = mysql.createConnection({
    host:"b1ijjxz5rrexa2df8icl-mysql.services.clever-cloud.com",
    user:"uv6bwjvga2ykaecy",
    password:"Rucfb83O3xPJlDcUldUa",
    database:"b1ijjxz5rrexa2df8icl"
})

//configuraciones

app.set('port', process.env.PORT || 3333)

app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port'));
})


//rutas

app.get('/', (req, res)=>{
    db.query('SELECT * FROM dibudahlia',
    (err, result)=>{
        if(err){ console.log(err)}
       else{res.send(result);}
        })
   
});

app.get('/dibujo/:id', (req, res)=>{

    const params = req.params;

    db.query('SELECT * FROM dibudahlia WHERE id = ' + params.id,
    (err, result)=>{
        if(err){ console.log(err)}
       else{res.send(result); }
        })


   
});

app.get('/year/:year', (req, res)=>{

    const params = req.params;

    db.query('SELECT * FROM dibudahlia WHERE year LIKE "' + params.year +'"',
    (err, result)=>{
        if(err){ console.log(err)}
       else{res.send(result);console.log(result)}
        })


   
});




app.post("/create", (req, res)=>{
    const nombre = req.body.nombre;
    const ano = req.body.ano;

    db.query('INSERT INTO xxx(a,b) VALUES (?,?)', [nombre, ano],(err,result)=>{
        if(err){ console.log(err); }
        else {res.send("Empleado registrado con exito")}
    });

});