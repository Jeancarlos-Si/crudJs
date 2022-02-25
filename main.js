'use strict'

const openCloseModal = () => document.getElementById('modal')
    .classList.toggle('active')


    //Crud - create read update delete 


    const tempClient = {
        nome: "Fernando",
        email: "jeancarlos.souza@hotmail.com",
        celular: "98841514",
        cidade: "Sao roque"
    }



    //CRUD CREATE
    const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
    const setLocalStorage =  (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))
                                                                //Key       //mudar tipo    //parametro      
    //VAI SALVAR NO LocalStorge setITEM envia o que 
    //esta sendo escrito em parametro
    
    const deleteClient = (index) => {
        const dbClient = readClient()
        dbClient.splice(index,1)
        setLocalStorage(dbClient)
    }

    const updateClient = (index, client) => {
        const dbClient = readClient()
        dbClient[index] = client
        setLocalStorage(dbClient)
    }

    const readClient = () => getLocalStorage()
    
    const createClient = (client) => {
        const dbClient = getLocalStorage()
        dbClient.push(client)
        setLocalStorage(dbClient)
    }

document.getElementById('cadastrarCliente')
    .addEventListener('click', openCloseModal)

document.getElementById('modalClose')
    .addEventListener('click', openCloseModal)