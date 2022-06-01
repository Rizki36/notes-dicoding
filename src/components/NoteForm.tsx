import React from 'react';
import { NoteType } from 'utils';

type NoteFormState = {
  title: string;
  body: string;
  titleErrMsg: string | null;
};

type NoteFormProps = {
  // eslint-disable-next-line no-unused-vars
  handleAddNote: (note: NoteType) => void;
};

class NoteForm extends React.Component<NoteFormProps, NoteFormState> {
  constructor(props: any) {
    super(props);

    this.state = {
      title: '',
      body: '',
      titleErrMsg: null,
    };
  }

  handleTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // limit to 50 chars
    // this.setState({ title: this.state.title.substring(0, 50) });

    this.setState({ title: e.target.value });
  };

  handleBodyInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ body: e.target.value });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // validate title is required
    if (this.state.title.length === 0) {
      this.setState({ titleErrMsg: 'Title is required' });
      return;
    }

    // validate title max chars
    const titleMaxLength = 50;
    if (this.state.title.length > titleMaxLength) {
      this.setState({ titleErrMsg: `Title must be less than ${titleMaxLength} chars` });
      return;
    }

    this.props.handleAddNote({
      id: +new Date(),
      title: this.state.title,
      body: this.state.body,
      archived: false,
      createdAt: new Date().toString(),
    });

    this.setState({ titleErrMsg: null, body: '', title: '' });
  };

  render() {
    return (
      <form className="note-form" onSubmit={this.handleSubmit}>
        <h4 className="note-form__title">Create New Note</h4>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-input px-4 py-3"
            id="title"
            value={this.state.title}
            onInput={this.handleTitleInput}
          />
          {this.state.titleErrMsg && (
            <div className="alert alert-danger">{this.state.titleErrMsg}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-textarea px-4 py-3"
            id="description"
            value={this.state.body}
            onInput={this.handleBodyInput}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default NoteForm;
