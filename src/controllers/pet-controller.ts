import express from 'express'
import { UploadedFile } from 'express-fileupload';
import { PetDto } from '../dtos/index';
import { Pet } from '../models/index';
import { PetRepository } from '../repository/index';

const router: express.Router = express.Router();

router.route('/')
	.get(async (req, res) => {
		try {
			const pets = await PetRepository.findAll();
			if(pets.length > 0) {
				res.status(200).send(pets);
			} else {
				res.status(204).send();
			}
		} catch(error) {
			res.status(500).send(`Houve um erro ao processar a requisição:\n${error}`);
		}
	})
	.post(async (req, res) => {
		const data = req.body;
		let dto: PetDto = {
			Name: data.Name
		};
		if(req.files?.Profile != null && req.files?.Profile != undefined) {
			const profile: UploadedFile = req.files.Profile as UploadedFile;
			dto.Profile = {
				Data: profile.data,
				Name: profile.name,
				Type: profile.mimetype
			};
			try {
				const pet = Pet.FromDto(dto);
				dto = await PetRepository.save(pet);
				res.status(201).send(`Criado o pet #${dto.Id} com o nome ${dto.Name}`);
			} catch (error) {
				res.status(400).send(`Erro ao salvar o pet\n${error}`);
			}
		}
	});

router.route('/:id')
	.delete(async (req, res) => {
		const id: number = parseInt(req.params.id);
		const deleted = await PetRepository.drop(id);
		if(deleted) {
			res.status(200).send(`Pet #${id} excluído.`);
		} else {
			res.status(404).send(`Pet #${id} não encontrado.`);
		}
	})
	.get(async (req, res) => {
		const id: number = parseInt(req.params.id);
		try {
			const pet = await PetRepository.findOne(id);
			if(pet != null) {
				res.status(200).send(pet);
			} else {
				res.status(400).send(`Pet #${id} não encontrado.`)
			}
		} catch(error) {
			res.status(500).send(`Erro ao obter o Pet #${id}\n${error}`);
		}
	})
	.put(async (req, res) => {
		/**
		 * quando a requisição enviar os parâmetros na forma de caminha na URL e não por
		 * query string, o array que contém esses valores, é a propriedade params da requisição.
		 */
		const id: number = parseInt(req.params.id);
		try {
			const pet = await PetRepository.findOne(id);
			if(pet != null) {
				res.status(200).send(`alteração de dados do pet #${id}`);
			} else {
				res.status(404).send(`Pet #${id} não encontrado!`);
			}
		} catch (error: any) {
			res.status(500).send(`Erro ao alterar o pet ${id}\n${error}`);
		}
	});

export default router;