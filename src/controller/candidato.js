const {response, request} = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Candidato = require('../store/modules/candidatos');

const candidatosGet = async (req = request, res = response) => {
    const { limit = 5, page = 1 } = req.query;
    const query = { status: true };

    const skip = limit * (page - 1);

    const [ candidatos, totalCandidatos ] = await Promise.all([
                                                Candidato.find(query)
                                                    .skip(Number(skip))
                                                    .limit(Number(limit)),
                                                Candidato.countDocuments(query)
                                            ]);

    res.json({
        candidatos,
        totalCandidatos
    });
}


const candidatosPost = async (req, res) => {
    const { nombre, apellido, corrreo, celular, direccion, fechaNa, profesion, rol } = req.body;

    const candidato = new Candidato({ nombre, apellido, corrreo, celular, direccion, fechaNa, profesion, rol });


    await candidato.save();

    res.json({ candidato });
}

const candidatosGetBySKU = (req, res) => {
    res.json({ msg: "get by SKU Candidato controller" });
}

const candidatosPut = async (req, res) => {
    const { id } = req.params;
    const { _id, nombre, ...data } = req.body;

    const candidato = await Candidato.findByIdAndUpdate(id, data, { new: true });

    res.json(candidato);
}

const candidatosDelete = async (req, res) => {
    const { id } = req.params;

    // Eliminación fisica de registros en db
    // const user = await User.findByIdAndDelete( id );

    const candidato = await Candidato.findByIdAndUpdate(id, { status: false });

    res.json(candidato);
}

module.exports = {
    candidatosGet,
    candidatosPost,
    candidatosPut,
    candidatosDelete
}