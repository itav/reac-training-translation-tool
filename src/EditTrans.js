import React, {Component} from 'react';
import './EditTrans.css';


class EditTrans extends Component {

	constructor(props) {
		super(props);

		this.state = {
			translation: {...this.props.currentTranslation}
		};
	}

	componentWillReceiveProps(nextProps, nextContext) {
		this.setState({...this.state, translation: nextProps.currentTranslation});
	}

	onKeyChange = event => {
		const newTranslation = {...this.state.translation, key: event.target.value};
		this.setState({...this.state, translation: newTranslation});
	};

	onEnChange = event => {
		const newEn = {...this.state.translation, en: event.target.value};
		this.setState({...this.state, translation: newEn});
	};

	onPlChange = event => {
		const newPl = {...this.state.translation, pl: event.target.value};
		this.setState({...this.state, translation: newPl});
	};

	onFormUpdateSubmit = event => {
		event.preventDefault();
		this.props.onEditTrans(this.state.translation);
	};

	onFormDeleteSubmit = (event) => {
		event.preventDefault();
		if (this.state.translation.id && window.confirm('Are you sure you wish to delete this item?')) {
			this.props.onDeleteTrans(this.state.translation.id);
		}
	};

	render() {
		return (
			<form
				className="editTransForm"
				onSubmit={this.onFormUpdateSubmit}
			>
				<h3>Edit</h3>
				<label>ID</label>
				<input className="disabled" type="text" disabled={true} value={this.state.translation.id}/>

				<label>Trans Key</label>
				<input type="text" onChange={this.onKeyChange} value={this.state.translation.key}/>

				<label>English translation</label>
				<textarea onChange={this.onEnChange} value={this.state.translation.en}/>

				<label>Polish translation</label>
				<textarea onChange={this.onPlChange} value={this.state.translation.pl}/>

				<label>Version</label>
				<input className="disabled" type="text" disabled={true} value={this.state.translation.version}/>

				<div className="buttons">
					<button type="submit" value="update">Update</button>
					<button type="button" onClick={(event) => this.onFormDeleteSubmit(event)}>Delete</button>
				</div>
			</form>
		);
	}
}

export default EditTrans;