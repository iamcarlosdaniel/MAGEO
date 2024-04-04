import EventModel from '../models/event.model.js'

export const  getEvents = async (req, res) => {
    res.json('getFormsEvents');
}

export const createEvent = async (req, res) => {
    res.json('createEvent');
}

export const getEvent = async (req, res) => {
    res.josn('getEvent');
}

export const deleteEvent = async (req, res) => {
    res.json('deleteEvent');
}

export const updateEvent = async (req, res) => {
    res.json('updateEvent');
}