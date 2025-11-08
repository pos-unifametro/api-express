// SELECT * FROM tb_vehicles;
let veiculos = [
    {
        id: 1,
        placa: 'PNO-7745',
        marca: 'Chevrolet',
        modelo: 'Celta',
        ano: 2010,
        cor: 'Rosa',
        descricao: 'CHASSI 123'
    },
    {
        id: 2,
        placa: 'ABC-1234',
        marca: 'Volkswagen',
        modelo: 'Fusca',
        ano: 1972,
        cor: 'Azul',
        descricao: 'CHASSI 456'
    }
];

import express from "express";

const router = express.Router();

router.get('/api/veiculos', (req, res) => {
    res.json(veiculos);
});

// Rota para buscar um veículo pelo ID
router.get('/api/veiculos/:id', (req, res) => {
    const { id } = req.params;
    const veiculo = veiculos.find(v => v.id === parseInt(id));

    if (!veiculo) {
        return res.status(404).json({ message: 'Veículo não encontrado' });
    }

    res.json(veiculo);
});

// Rota para cadastrar um novo veículo
router.post('/api/veiculos', (req, res) => {
    const { placa, marca, modelo, ano, cor, descricao } = req.body;
    
    // Cria um novo veículo com base nos dados enviados
    const novoVeiculo = {
        id: veiculos.length + 1, // ID automático com base no tamanho do array
        placa,
        marca,
        modelo,
        ano,
        cor,
        descricao
    };

    //INSERT INTO...
    veiculos.push(novoVeiculo);
    res.status(201).json(novoVeiculo);
});

// Rota para editar um veículo
router.put('/api/veiculos/:id', (req, res) => {
    const { id } = req.params;
    const { placa, marca, modelo, ano, cor, descricao } = req.body;

    let veiculo = veiculos.find(v => v.id === parseInt(id));
    
    if (!veiculo) {
        return res.status(404).json({ message: 'Veículo não encontrado' });
    }

    // Atualiza os dados do veículo
    veiculo = { ...veiculo, placa, marca, modelo, ano, cor, descricao };
    veiculos = veiculos.map(v => (v.id === parseInt(id) ? veiculo : v));

    res.json(veiculo);
});

// Rota para excluir um veículo
router.delete('/api/veiculos/:id', (req, res) => {
    const { id } = req.params;
    const veiculoIndex = veiculos.findIndex(v => v.id === parseInt(id));

    if (veiculoIndex === -1) {
        return res.status(404).json({ message: 'Veículo não encontrado' });
    }

    // Remove o veículo do array
    veiculos.splice(veiculoIndex, 1);
    res.status(204).send();  // Sem conteúdo, mas com código de sucesso
});

export default router;