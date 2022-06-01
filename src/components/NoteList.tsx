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

  /** filter notes by archive status */
  const filteredNotes = notes.filter((note) => note.archived === archived);

  return (
    <div className="note-list">
      <div className="note-list__title">{title}</div>

      <hr className="border border-gray-100 my-6 w-full" />

      <div className="note-list__container">
        {!!filteredNotes.length &&
          filteredNotes.map((note) => (
            <NoteListItem
              key={note.id}
              note={note}
              handleArchiveNote={handleArchiveNote}
              handleDeleteNote={handleDeleteNote}
            />
          ))}

        {!filteredNotes.length && (
          <div className="note-list-item">
            <div className="note-list-item__title text-center">
              No {archived ? 'archived' : 'active'} notes
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NoteList;
