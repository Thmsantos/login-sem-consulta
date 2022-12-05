const database = require('../config/index');
const loginModels = require('../models/index')

class medicoControllers {
    static async inserir(req, res){
        let new_data = req.body
        await database.sync()
        await loginModels.create(new_data)
        res.send("Dado adicionado")
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
         /*    let updated = await loginModels.update(
            {situacao: 'logado'},
            {
                where: { cpf: cpf },     
            }) */
            console.log('foi')
        }else{
            res.send('login inválido')
            console.log('nao foi')
        }
    }
}




module.exports = medicoControllers;