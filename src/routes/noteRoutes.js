const express = require("express")
const noteRoute = express.Router();
const { readNotes, updateNote, createNote, deleteNote } = require("../controllers/notesController")
const auth = require("../middlewares/auth")

noteRoute.get("/", auth, readNotes)

noteRoute.post("/", auth,  createNote)

noteRoute.delete("/:id", auth, deleteNote)

noteRoute.put("/:id", auth, updateNote)



module.exports = noteRoute