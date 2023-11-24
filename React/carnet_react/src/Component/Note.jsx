import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-hot-toast';
import noteService from '../Service/noteService';
import NouvelleNote from './NouvelleNote';

const NoteList = ({ note, onDelete, onEdit, isEditing }) => {
    const handleDeleteNote = async () => {
      try {
        await noteService.deleteNoteById(note.id_note);
        toast.success(`La note ${note.id_note} a été supprimée`);
        onDelete(note.id_note);
      } catch (error) {
        console.error('Erreur lors de la suppression de la note', error);
      }
    };
  

    return (
        <>
          {isEditing ? (
            <NouvelleNote
              onNoteAdd={(editedNote) => {
                console.log('Note éditée :', editedNote);
                onEdit(null);
              }}
              note={note || {}} // Assurez-vous que note est toujours défini
            />
          ) : (
            <Card style={{ width: '40rem' }}>
              <Card.Body>
                <Card.Header as="h5">{note.titre}</Card.Header>
                <Card.Text>{note.categorie}</Card.Text>
                <Card.Text>Édité le : {note.date}</Card.Text>
                <Card.Text>{note.contenu}</Card.Text>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button type="button" onClick={() => onEdit(note.id_note)} style={{ marginRight: '10px' }}>
                    Modifier
                  </Button>
                  <Button type="button" onClick={handleDeleteNote} style={{ marginRight: '10px' }}>
                    Supprimer
                  </Button>
                </div>
              </Card.Body>
            </Card>
          )}
          <br />
        </>
      );
    };
    
    export default NoteList;