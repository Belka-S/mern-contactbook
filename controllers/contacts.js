const createError = require('http-errors');

const { Contact } = require('../models/contact');

// GET
const getAll = async (req, res) => {
  const { page = 1, limit = 5, favorite = [true, false] } = req.query;
  const skip = (page - 1) * limit;

  const contacts = await Contact.find(
    { owner: req.user._id, favorite: { $exists: true, $in: favorite } },
    '-createdAt -updatedAt',
    { skip, limit },
  ).populate('owner', 'name email');
  res.json({ status: 'success', code: 200, data: { result: contacts } });
};

const getById = async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findById(id);
  if (!contact) throw createError(404, `Contact id=${id} not found`);
  res.json({ status: 'success', code: 200, data: { result: contact } });
};

// POST
const add = async (req, res) => {
  const { _id: owner } = req.user;
  const newContact = await Contact.create({ ...req.body, owner });
  res.status(201).json({ status: 'success', code: 201, data: { result: newContact } });
};

// PUT
const updateById = async (req, res) => {
  const { id } = req.params;
  const updatedContact = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!updatedContact) throw createError(404, `Contact id=${id} not found`);
  res.json({ status: 'success', code: 200, data: { result: updatedContact } });
};

// PATCH
const updateFavoriteById = async (req, res) => {
  const { id } = req.params;
  const updatedContact = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!updatedContact) throw createError(404, `Contact id=${id} not found`);
  res.json({ status: 'success', code: 200, data: { result: updatedContact } });
};

// DELEETE
const removeById = async (req, res) => {
  const { id } = req.params;
  const deletedContact = await Contact.findByIdAndDelete(id);
  if (!deletedContact) throw createError(404, `Contact id=${id} not found`);
  res.json({ status: 'success', code: 200, data: { result: deletedContact } });
};

module.exports = { getAll, getById, add, updateById, updateFavoriteById, removeById };
