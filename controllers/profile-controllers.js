import express from 'express';
import { users } from '../constants/users.js';
/**
 * 
 * @param {express.Request} request;
 * @param {express.Response} response; 
 */
export const getMyProfile = (request, response) => {
    response.json({
        profile_picture : 'https://source.unsplash.com/random/?Woman',
        name: 'Atsiilah Thufailah',
        email: 'atsiilah@gmail.com',
        location: 'Jakarta'
    });
}

/**
 * 
 * @param {express.Request} request;
 * @param {express.Response} response; 
 */
export const getProfileById = (request, response) => {
    /* REQUEST PARAMETER */
    //const userId = request.params.userId;

    /* QUERY PARAMETER */
    const userId = request.query.userId;
    const userData = users[userId];

    if(!userData) {
        response.status(404).json({
            message: 'Data Not Found',
        });
        return;
    };

    response.json({
        users : users[userId]
    });
}