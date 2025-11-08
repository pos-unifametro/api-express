let clientes = [
    {
        id: 1,
        nome: 'Chiquim das Tapiocas',
        endereco: 'Rua X, 123 - Two Brothers Park',
        cpf: '123.123.123-12'
    },
    {
        id: 2,
        nome: 'Maria do Sabor',
        endereco: 'Avenida Central, 456 - Mercado',
        cpf: '987.654.321-00'
    }
];

import express from "express";

import findAll from "./../middleware/cliente/findAllClients.middleware.js";

const app = express.Router();

app.use(express.json());

app.get('/api/clientes', findAll);

// Rota para buscar um cliente pelo ID
app.get('/api/clientes/:id', (req, res) => {
    const { id } = req.params;
    const cliente = clientes.find(c => c.id === parseInt(id));

    if (!cliente) {
        return res.status(404).json({ message: 'Cliente não encontrado' });
    }

    res.json(cliente);
});

// Rota para cadastrar um novo cliente
app.post('/api/clientes', (req, res) => {
    const { nome, endereco, cpf } = req.body;
    
    // Cria um novo cliente com base nos dados enviados
    const novoCliente = {
        id: clientes.length + 1, // ID automático com base no tamanho do array
        nome,
        endereco,
        cpf
    };

    clientes.push(novoCliente);
    res.status(201).json(novoCliente);
});

// Rota para editar um cliente
app.put('/api/clientes/:id', (req, res) => {
    const { id } = req.params;
    const { nome, endereco, cpf } = req.body;

    let cliente = clientes.find(c => c.id === parseInt(id));
    
    if (!cliente) {
        return res.status(404).json({ message: 'Cliente não encontrado' });
    }

    // Atualiza os dados do cliente
    cliente = { ...cliente, nome, endereco, cpf };
    clientes = clientes.map(c => (c.id === parseInt(id) ? cliente : c));

    res.json(cliente);
});

// Rota para excluir um cliente
app.delete('/api/clientes/:id', (req, res) => {
    const { id } = req.params;
    const clienteIndex = clientes.findIndex(c => c.id === parseInt(id));

    if (clienteIndex === -1) {
        return res.status(404).json({ message: 'Cliente não encontrado' });
    }

    // Remove o cliente do array
    clientes.splice(clienteIndex, 1);
    res.status(204).send();  // Sem conteúdo, mas com código de sucesso
});

export default app;