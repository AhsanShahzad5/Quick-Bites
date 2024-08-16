import express, { Request, Response } from 'express';
import User from '../models/UserModel';

const test = (req: Request, res: Response) => {
    res.json({ message: 'welcome to test' });
}
const createCurrentUser = async(req: Request, res: Response) => {
    try {
        const { auth0Id } = req.body;
        //if user exisits alr
        const existingUser = await User.findOne({ auth0Id });

        if (existingUser) {
            return res.status(200).send();
        }

        const newUser = new User(req.body);
        await newUser.save();
        //convert the document version wixhi has extra things to a simple js object
        res.status(201).json(newUser.toObject());
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error creating user" });
    }
};



export { test, createCurrentUser }