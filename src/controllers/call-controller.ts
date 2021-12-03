import express from 'express';
import moment from 'moment';
import { CallDto } from '../dtos/index';
import { CallRepository } from '../repository/index';

const router: express.Router = express.Router();
moment.locale('pt-BR');

router.route('/')
	.get(async(req, res) => {
		try {
			const calls = await CallRepository.findAll();
			if(calls.length > 0) {
				res.status(200).send(calls);
			} else {
				res.status(204).send();
			}
		} catch (error) {
			res.status(500).send(`Houve um erro ao processar a requisição:\n${error}`);
		}
	})
	.post(async (req, res) => {
		let dto: CallDto = req.body;
		dto.Date = new Date(moment(dto.Date, 'DD/MM/YYYY').format('YYYY-MM-DD'));
		try {
			const call = await CallRepository.save(dto);
			res.status(201).send(`Criado o atendimento ${call.Id}`);
		} catch(error) {
			res.status(400).send(`Erro na na criação do atendimento:\n${error}`)
		}
	});

router.route('/:id')
	.delete(async (req, res) => {
		const id = parseInt(req.params.id);
		const deleted = await CallRepository.drop(id);
		if(deleted) {
			res.status(200).send(`Atendimento #${id} excluído.`);
		} else {
			res.status(404).send(`Atendimento #${id} não encontrado.`);
		}
	})

export default router;