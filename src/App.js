import React, {Component} from 'react';
import axios from 'axios';
import AddTrans from './AddTrans';
import EditTrans from './EditTrans';
import ListTrans from './ListTrans';
import './App.css';

const initTrans = {
	id: '',
	key: '',
	en: '',
	pl: '',
	version: ''
};

class App extends Component {

	state = {
		currentTranslation: initTrans,
		translations: []
	};

	addTrans = async (translation) => {
		const response = await axios.post("http://localhost:8180/common/translation", translation);
		this.setState({...this.state, currentTranslation: this.formatTrans(response.data)});
		this.loadAll();
	};

	editTrans = async (translation) => {
		if (!translation.id) {
			return;
		}

		const response = await axios.put(`http://localhost:8180/common/translation/${translation.id}`, translation);
		this.setState({...this.state, currentTranslation: this.formatTrans(response.data)});
		this.loadAll();
	};


	deleteTrans = async (id) => {
		await axios.delete(`http://localhost:8180/common/translation/${id}`);
		this.setState({...this.state, currentTranslation: initTrans});
		this.loadAll();
	};

	selectTrans = (id) => {
		const found = this.state.translations.find(trans => trans.id === id);
		this.setState({...this.state, currentTranslation: this.formatTrans(found)});
	};

	loadAll = async () => {
		const response = await axios.get("http://localhost:8180/common/translations");
		this.setState({...this.state, translations: response.data});
	};

	formatTrans = (translation) => {
		return {
			id: translation.id,
			key: translation.key,
			en: translation.definitions.en,
			pl: translation.definitions.pl,
			version: translation.version
		};
	};

	componentDidMount() {
		this.loadAll();
	}

	render() {
		return (
			<div>
				<section className="container">
					<div className="one">
						<AddTrans onAddTrans={this.addTrans}/>
					</div>
					<div className="two">
						<EditTrans
							currentTranslation={this.state.currentTranslation}
							onEditTrans={this.editTrans}
							onDeleteTrans={this.deleteTrans}
						/>
					</div>
					<div className="three">
						<ListTrans translations={this.state.translations} onSelectTrans={this.selectTrans}
											 onDeleteTrans={this.deleteTrans}/>
					</div>
				</section>
			</div>
		)
			;
	}
}

export default App;
