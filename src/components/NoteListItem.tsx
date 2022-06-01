import React from 'react';
import { NoteType, showFormattedDate } from 'utils';

type NoteListItemProps = {
  note: NoteType;
  // eslint-disable-next-line no-unused-vars
  handleDeleteNote: (id: number) => void;
  // eslint-disable-next-line no-unused-vars
  handleArchiveNote: (id: number, toArchived: boolean) => void;
};

const NoteListItem: React.FC<NoteListItemProps> = (props) => {
  const { note, handleArchiveNote, handleDeleteNote } = props;

  return (
    <div className="note-list-item" key={note.id}>
      <div className="note-list-item__title">{note.title}</div>
      <div className="note-list-item__createdat">{showFormattedDate(note.createdAt)}</div>

      <div className="flex">
        <div className="note-list-item__body">{note.body}</div>
        <div className="note-list-item__actions">
          <button
            className="btn btn-primary"
            onClick={() => handleArchiveNote(note.id, !note.archived)}
          >
            {note.archived ? 'Unarchive' : 'Archive'}
          </button>
          <button className="btn btn-danger" onClick={() => handleDeleteNote(note.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteListItem;
