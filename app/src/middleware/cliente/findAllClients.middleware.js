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

export default function (req, res) {
    res.send(clientes);
}