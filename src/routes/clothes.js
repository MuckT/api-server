'use strict';

const express = require('express')

const { Clothes } = require('../models/index')

const router = express.Router()

// Restful Route Declarations
router.get('/clothes', getClothes)
router.get('/clothes/:id', pieceOfClothing)
router.post('/clothes', createPieceOfClothing)
router.put('/clothes/:id', updatePieceOfClothing)
router.delete('/clothes/:id', deletePieceOfClothing)

// Restful Router Handlers
async function getClothes(req, res) {
  let clothes = await Clothes.retrieve()
  res.status(200).json(clothes)
}

async function pieceOfClothing(req, res) {
  const id = ~~req.params.id
  let pieceOfClothing = await Clothes.retrieve(id)
  res.status(200).json(pieceOfClothing)
}

async function createPieceOfClothing(req, res) {
  let pieceOfClothingData = req.body
  let pieceOfClothing = await Clothes.create(pieceOfClothingData)
  res.status(200).json(pieceOfClothing)
}

async function updatePieceOfClothing(req, res) {
  const id = ~~req.params.id
  const pieceOfClothingData = req.body
  let updatedPieceOfClothing = await Clothes.update(id, pieceOfClothingData)
  res.status(200).json(updatedPieceOfClothing)
}

async function deletePieceOfClothing(req, res) {
  const id = ~~req.params.id
  let deletedPieceOfClothing = await Clothes.delete(id)
  res.status(200).json(deletedPieceOfClothing)
}

module.exports = router
