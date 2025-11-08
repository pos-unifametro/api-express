function validateCreate(params) {
    if (!params.placa || !params.marca || !params.modelo || !params.ano) {
        throw new Error('dados invalidos');
    }
}

export default {
    validateCreate,
};