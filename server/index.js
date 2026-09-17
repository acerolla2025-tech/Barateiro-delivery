const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/admin', express.static('admin'));

const products = [
 {id:1,name:'Arroz',stock:20,price:25.90},
 {id:2,name:'Cebola',stock:10,price:5.99}
];

app.get('/api/products',(req,res)=>res.json(products));

app.post('/api/login',(req,res)=>{
 const ok = req.body.user === 'admin' && req.body.password === '123456';
 res.json({success: ok});
});

app.listen(PORT,()=>console.log('Barateiro Fase 1 online'));
