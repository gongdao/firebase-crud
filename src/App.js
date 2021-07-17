import React, { Component } from "react";
import { database } from "./firebase";
import _ from "lodash";
//import "./App.css";
import { connect } from "react-redux";
import { getNotes, saveNotes } from "./actions/notesAction";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			body: "",
			notes: {}
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.renderNotes = this.renderNotes.bind(this);
	}

	componentDidMount() {
		getNotes();
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const note = {
			title: this.state.title,
			body: this.state.body
		};
		this.props.saveNotes(note);
		//database.push(note);
		this.setState({
			title: "",
			body: ""
		});
	}

	renderNotes() {
		return _.map(this.props.notes, (note, key) => {
			return (
				<div key='key'>
					<h2> {note.title}</h2>
					<p>{note.body}</p>
				</div>
			);
		});
	}

	render() {
		return (
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-sm-6 col-sm-offset-3 m-5'>
						<form onSubmit={this.handleSubmit}>
							<div className='form-group'>
								<input
									onChange={this.handleChange}
									value={this.state.title}
									type='text'
									name='title'
									className='form-control no-border'
									placeholder='Title...'
									required
								/>
							</div>

							<div className='form-group'>
								<textarea
									onChange={this.handleChange}
									value={this.state.body}
									type='text'
									name='body'
									className='form-control no-border mt-2'
									placeholder='Body...'
									required
								/>
							</div>

							<div className='form-group'>
								<button
									type='submit'
									className='btn btn-primary col-sm-12 mt-2'
								>
									Save
								</button>
							</div>
						</form>
						{this.renderNotes()}
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		notes: state.notes
	};
}

export default connect(mapStateToProps, { getNotes, saveNotes })(App);
