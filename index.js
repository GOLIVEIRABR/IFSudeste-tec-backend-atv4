const express = require('express');
const app = express();

const exemplo = (req, res, next) => {
  console.log("teste");
  next();
}

const exemplo2 = (req, res, next) => {
  console.log("teste2");
  next();
}


app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname+'/site'));
app.use('/contato', express.static(__dirname+'/site/contact.html'));
app.post('/contato', exemplo, exemplo2, (req,res)=>{
  console.log("Nome: "+req.body.name);
  console.log("Email: "+req.body.email);
  console.log("Assunto: "+req.body.subject);
  console.log("Mensagem: "+req.body.message);
  res.redirect('/contato');
})

app.use('*', (req, res) => {
  res.status(404).send("Link inválido: 404");
})

app.listen(3000, () => console.log("Servidor escutando na porta 3000..."));