import{v4 as uuidv4} from 'uuid';

let users = [];


export const createUser = (req, res) => {
    const user = req.body;
    users.push({... user, id: uuidv4() });
    res.send("User with the name " +user.firstName+ " added to the DB");
 }

 export const getUsers = (req,res) => {
    res.send(users);
}

export const getUserById = (req,res) => {
    const { id } = req.params; //mesmo que const id = req.params.id
    
    //encontrar o usuário com arquele ID, filtrando o array a partir do id passado por url
    const foundUser = users.find((user)=> user.id == id);
    
    res.send(foundUser);
}

export const deleteUser = (req,res) => {
    const {id} = req.params;//pega o id passado por parametro na url

    users = users.filter((user) => user.id!=id);//filtra o array de users, mantendo apenas os que n tem id igual ao procurado

    res.send("User with the id:" +id + " was deleted from the DB sucessfully");
}

export const patchUser =  (req,res) => {
    const {id} = req.params;
    const {firstName,lastName,age} = req.body;

    const user = users.find((user)=>user.id==id);

    if(firstName){ //se houver algo nesse campo
        user.firstName = firstName
    }

    if(lastName){ //se houver algo nesse campo
        user.lastName = lastName
    }

    if(age){ //se houver algo nesse campo
        user.age = age
    }

    res.send("User with the id: " +id+ " has been updated");
}