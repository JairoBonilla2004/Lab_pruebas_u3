const app = express()
const PORT = process.env.PORT;

app.get('/',(req, resp)=>{

});

app.listen(PORT, ()=>{
    console.log("Servidor corriendo en el puerto "+PORT)
});