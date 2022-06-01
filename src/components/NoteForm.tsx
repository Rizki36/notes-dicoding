import React from 'react';

interface NoteFormState {
  title: string;
  description: string;
  titleErrMsg: string | null;
}
class NoteForm extends React.Component<{}, NoteFormState> {
  constructor(props: any) {
    super(props);

    this.state = {
      title: '',
      description: '',
      titleErrMsg: null,
    };
  }

  handleTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // limit to 50 chars
    // this.setState({ title: this.state.title.substring(0, 50) });

    this.setState({ title: e.target.value });
  };

  handleDescriptionInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ description: e.target.value });
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

    this.setState({ titleErrMsg: null });
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
            value={this.state.description}
            onInput={this.handleDescriptionInput}
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
