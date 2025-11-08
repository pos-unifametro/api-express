import veiculosValidator from "../validator/veiculos.validator.js";

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

const controller = {
    findAll: (req, res) => {
        res.json(veiculos);
    },
    find: (req, res) => {
        const veiculo = buscarVeiculoPeloId(req.params.id);

        if (!veiculo) {
            return veiculoNaoEncontradoResponse(res);
        }

        res.json(veiculo);
    },
    save: (req, res) => {
        try {
            veiculosValidator.validateCreate(req.body);
            
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
        } catch (error) {
            res.status(422).send({
                "error": error.message
            });
        }    
    },
    update: (req, res) => {
        const { id } = req.params;
        const { placa, marca, modelo, ano, cor, descricao } = req.body;

        let veiculo = buscarVeiculoPeloId(id);
        
        if (!veiculo) {
            return veiculoNaoEncontradoResponse(res);
        }

        // Atualiza os dados do veículo
        veiculo = { ...veiculo, placa, marca, modelo, ano, cor, descricao };
        veiculos = veiculos.map(v => (v.id === parseInt(id) ? veiculo : v));

        res.json(veiculo);
    },
    remove: (req, res) => {
        const veiculo = veiculos.find(v => v.id === parseInt(id));

        if (!veiculo) {
            return veiculoNaoEncontradoResponse(res);
        }

        // Remove o veículo do array
        veiculos.splice(veiculo, 1);
        res.status(204).send();
    },
};

const buscarVeiculoPeloId = (id) => {
    return veiculos.find(v => v.id === parseInt(id));
};

const veiculoNaoEncontradoResponse = (res) => {
    res.status(404).json({ message: 'Veículo não encontrado' })
};

export default controller;