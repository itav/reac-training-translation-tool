import React, {Component} from 'react';
import './AddTrans.css';

const initTrans = {
	key: "",
	en: "",
	pl: ""
};

class AddTrans extends Component {

	state = {
		translation: initTrans
	};

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

	onFormSubmit = event => {
		event.preventDefault();
		this.props.onAddTrans(this.state.translation);
		this.setState({...this.state, translation: initTrans});
	};

	render() {
		return (
			<form
				className="addTransForm"
				onSubmit={this.onFormSubmit}
			>
				<h3>Add</h3>
				<label>Trans Key</label>
				<input type="text" onChange={this.onKeyChange} value={this.state.translation.key}/>

				<label>English translation</label>
				<textarea onChange={this.onEnChange} value={this.state.translation.en}/>

				<label>Polish translation</label>
				<textarea onChange={this.onPlChange} value={this.state.translation.pl}/>

				<button type="submit">save</button>
			</form>
		);
	}
}

export default AddTrans;