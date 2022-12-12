const database = require('../config/index');
const loginModels = require('../models/index')
const nodemailer = require('nodemailer');

class medicoControllers {

    static async Attsenha(req, res){
        let newPass = req.body.senha
        let cpfs = req.body.cpf
        await database.sync()
        let requisition = await loginModels.update(
            {senha : newPass},
            {
                where: { cpf: cpfs },     
            })
        res.send(requisition)
        console.log(requisition)
    }

    static async verificarSenha(req, res){
        let cpfs = req.body.cpf
        let code_banco = {}
        let code_front = req.body.numero
        await database.sync()
        let requisition = await loginModels.findOne({
            raw : true, where: {cpf : cpfs}
        })
        code_banco = requisition.numero
        if (code_banco == code_front){
            res.send('foi')
        }else{
            res.send('codigo ou cpf errados')
        }
    }

    static async recuperarSenha(req, res){
        let cpfs = req.body.cpf
        let emails = {}
        await database.sync()
        let requisition = await loginModels.findOne({
            raw : true, where: {cpf : cpfs}
        })
        emails = requisition.email
        
        let num_Dois = []
        for(let x = 0; x < 5; x++){
            let numero = Math.floor(Math.random() * 10)
            num_Dois.push(numero)
        }
        num_Dois = num_Dois.join("")
        
        let numero = num_Dois 

        if (numero =! 0){
            let requisition = await loginModels.update(
                {numero: num_Dois},
                {
                    where: { cpf: cpfs },     
                })
        }

        let transporter = nodemailer.createTransport({
            service: 'hotmail',
            auth: {
                user: "thiagosantos135@outlook.com",
                pass: "Thiago2004"
            }
        });

        let mailOptions = {
            from: 'thiagosantos135@outlook.com',
            to: emails, 
            subject: 'rec de senha',
            html: `<h1>${num_Dois}</h1>`
        };

        transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
                console.log(err);
            }
            console.log('Email Esent!!!');
        });
        res.send('enviado')
        }

    static async inserir(req, res){
        let v = false
        let new_data = req.body
        await database.sync()
        await loginModels.create(new_data)
        res.send('foi')
    }

    static async validacao_login(req, res){
        let cpf = req.body.cpf
        let senha = req.body.senha
        let x = false

        await database.sync()

        let requisition = await loginModels.findOne({
            where: { cpf: cpf },     
        })

        let senha_correta = requisition.senha

        if (senha === senha_correta){
            x = true
            res.send('senha correta')
            console.log('foi')
        }else{
            res.send('login inválido')
            console.log('nao foi')
        }
    }

    static async excluir(req, res){
        let cpf = req.body.cpf
        await database.sync

        let requisition = await loginModels.destroy({
            where: {cpf : cpf}
        })

        res.send('excluido')
    }
}




module.exports = medicoControllers;