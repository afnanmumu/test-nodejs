const mongoose = require('mongoose');

const tenantSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

const Tenant = mongoose.model('Tenant', tenantSchema);

module.exports = Tenant;
