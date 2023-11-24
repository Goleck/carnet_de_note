import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

const utilisateur = ({utilisateur}) => {
    return <>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{utilisateur.pseudo}</Card.Title>
                <Card.Text>{utilisateur.eta_ville}
                </Card.Text>
                <Link to={"/utilisateur/"+utilisateur.eta_id}><Button variant="primary">Voir utilisateur</Button></Link>
            </Card.Body>
        </Card>
    </>;
};

export default utilisateur;