



import express from 'express';
import axios from 'axios';




const OMDB_API_URL = 'http://www.omdbapi.com/';

const API_KEY = process.env.OMDB_API_KEY;


export const searchMovies = async (req, res)=>{
    const {title} = req.query;
 

    if (!title){
        return res.status(400).json({error: 'Enter movie title'});
    } try {
        const response = await axios.get(OMDB_API_URL, {
            params: {
                s: title,
                apikey: API_KEY
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch movies' });
    }
};



export const getMovieDetails = async (req, res)=>{
    const {id} = req.params;

    try {
        const response = await axios.get(OMDB_API_URL, {
            params:{
                i: id,
                apikey: API_KEY
            }
        });
        if (response.data.Response === 'False'){
            return res.status(404).json({error: response.data.Error});
        }
        res.json(response.data);
    } catch (error) {
        console.error(error.message, 'Could not get movie');
        res.status(500).json({error: 'No movies for you.  Maybe ever.  I just do not know'});
    }
};

