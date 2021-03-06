const { Schema, model } = require("mongoose");

const schema = Schema({
	guildID: { type: String, default: "" },
	userID: { type: String, default: "" },
	names: { type: Array, default: [] },
});

module.exports = model("britaNames", schema);