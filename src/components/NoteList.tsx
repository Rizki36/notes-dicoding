import React, { FC } from 'react';
import { NoteType } from 'utils';

import NoteListItem from './NoteListItem';

type NoteListProps = {
  title: string;
  notes: NoteType[];
  archived: boolean;
  // eslint-disable-next-line no-unused-vars
  handleDeleteNote: (id: number) => void;
  // eslint-disable-next-line no-unused-vars
  handleArchiveNote: (id: number, toArchived: boolean) => void;
};

const NoteList: FC<NoteListProps> = (props) => {
  const { title, archived, handleArchiveNote, handleDeleteNote, notes } = props;

  const filteredNotes = notes.filter((note) => note.archived === archived);

  return (
    <div className="note-list">
      <div className="note-list__title">{title}</div>
      <div className="note-list__container">
        {filteredNotes.map((note) => (
          <NoteListItem
            key={note.id}
            note={note}
            handleArchiveNote={handleArchiveNote}
            handleDeleteNote={handleDeleteNote}
          />
        ))}
      </div>
    </div>
  );
};

export default NoteList;
