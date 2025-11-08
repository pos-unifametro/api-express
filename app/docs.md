# API

## Veiculo

- Buscar todos
- Buscar um
- Cadastrar
- Editar
- Excluir

**Endpoint:** `/api/veiculos`

Body/Response
```json
{
    "id": 1,
    "placa": "PNO-7745",
    "marca": "Chevrolet",
    "modelo": "Celta",
    "ano": 2010,
    "cor": "Rosa",
    "descricao": "CHASSI 123"
}
```

## Cliente

- Buscar todos
- Buscar um
- Cadastrar
- Editar
- Excluir

**Endpoint:** `/api/clientes`

Body/Response
```json
{
    "id": 1,
    "nome": "Chiquim das Tapiocas",
    "endereco": "Rua X, 123 - Two Brothers Park",
    "cpf": "123.123.123-12"
}
```