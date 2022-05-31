require('dotenv').config();
const Event = require('./event.model')

Event
async function getAllEvents(req, res) {
  const { status } = req.query;
  try {
    const events = await Event.find();
    res.status(200).json( events );
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err });
  }
}

async function retrieveEvent(req, res) {
  const { id } = req.params;
  try {
    const event = await Event.findById(id);
    res.status(200).json(event);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err });
  }
}

async function createEvent(req, res, next) {
  let data = req.body;
  data.imageURL = req.file.path;
  console.log(data);
  try {
    const eventSaved = await Event.create(data)
    return res.status(200).json(eventSaved)
    
  } catch(err) {
    console.log(err)
    res.status(400).json({ error: err})
  } 
}



async function updateEvent(req, res) {
  const { id } = req.params
  const info = req.body;
  const {roles} = req.body;
  try {

    if(roles){
      const foundRoles = await Role.find({name: {$in: roles}})
      info.roles = foundRoles
    }
    const user = await User.findByIdAndUpdate(id, info, { new: true })
    res.status(200).json(user)
  } catch(err) {
    res.status(400).json({ error: err})
  }
}

async function addAttende(req, res) {
  const { id } = req.params
  const {userId} = req.query;
  console.log(userId)
  try {
    const eventUpdated = await Event.findByIdAndUpdate(id,  { $addToSet : { attendees: userId } }, { new: true })
    res.status(200).json(eventUpdated)
  } catch(err) {
    res.status(400).json({ error: err})
  }
}

async function deleteEvent(req, res) {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted succesfully", user });
  } catch (error) {
    res.status(500).json({ error });
  }
}

module.exports = {
    getAllEvents,
    retrieveEvent,
    createEvent,
    updateEvent,
    deleteEvent,
    addAttende,
};
