import { db } from "../db.js";

export const getUsers = (request, response) =>{
    const busca = "SELECT * FROM usuarios"

    db.query(busca, (err, data) => {
        if(err) return response.json(err);

        return response.status(200).json(data);
    })
}

export const getLogin = (request, response) =>{
    const busca = `SELECT * FROM usuarios WHERE email = "${request.body.email}" AND senha = "${request.body.senha}"`
    

    const values = [
        request.body.email,
        request.body.senha
    ]

    db.query(busca, (err, data) => {
        if(err) return response.json(err);
        
        /* console.log(data)
        response.json(data[0]) */
        return response.status(200).json(data)
    })
}

export const addUser = (request, response) => {
    const busca = "INSERT INTO usuarios(`email`, `senha`) VALUES(?)"

    const values = [
        request.body.email,
        request.body.senha
    ];

    db.query(busca, [values], (err) => {
        if (err) return response.json(err);

        return response.status(200).json("Usuário criado com sucesso!!")
    })
}

export const deleteUser = (request, response) => {
    const busca = "DELETE FROM usuarios WHERE `id` = ?"

    db.query(busca, request.params.id, (err) => {
        if (err) return response.json(err);

        return response.status(200).json("Usuário deletado com sucesso!!")
    })
}


