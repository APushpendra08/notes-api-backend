const note = require('../models/note');
const noteModel = require('../models/note')

const createNote = async (req, res) =>{
    const {title, description} = req.body;
    const newNote = new noteModel({
        title : title,
        description : description,
        userId : req.userId
    })

    try{
        await newNote.save();
        res.status(201).json({newNote, success : true})
    } catch(error){
        console.log(error)
        res.status(500).json({success : false, message : error.message})
    }
}

const readNotes = async (req, res) => {
    
    
    try {
        const notes = await noteModel.find({userId : req.userId})
        res.status(200).json({notes, success : true})
    } 
    catch(error){
        console.log(error)
        res.status(500).json({success : false, message : error.message})
    }


}

const updateNote = async (req, res) => {
    const id = req.params.id
    const {title, description} = req.body;

    const newNote = {
        title : title,
        description : description,
        userId : req.userId
    }

    try{
        await noteModel.findByIdAndUpdate(id, newNote, {new : true})
        res.status(200).json({newNote, success : true})
    } catch(error){
        console.log(error)
        res.status(500).json({success : false, message : error.message})
    }
}

const deleteNote = async (req, res) => {
    const id = req.params.id

    try{
        await noteModel.findByIdAndDelete(id)
        res.status(202).json({success : true, message : "Delete successful"})
    } catch(error){
        console.log(error)
        res.status(500).json({success : false, message : error.message})
    }
}

module.exports = {
    createNote, 
    readNotes, 
    updateNote,
    deleteNote
}