import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import utilisateurService from '../Service/utilisateurService';

const UtilisateurDetails = () => {
    const {id} = useParams();
    const [utilisateur, setUtilisateurs] = useState({});

    const fetchUtilisateurByID = async () => {
        try {
            const response = await utilisateurService.fetchUtilisateurById(id);
            setUtilisateurs(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchUtilisateurByID()
    }, []);

    return <>
        {utilisateur.id_utilisateur}
        {utilisateur.pseudo}
    </>;
};

export default UtilisateurDetails;