const { Type } = require("../models/models.js");
const apiError = require("../error/apiError.js");

class TypeController {
  async create(req, res) {
    const { name } = req.body;
    const type = await Type.create({ name });
    return res.json(type);
  }

  async getAll(req, res) {}
}

module.exports = new TypeController();
