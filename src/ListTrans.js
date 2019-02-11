import React, {Component} from 'react';
import './ListTrans.css';

class ListTrans extends Component {

	onDeleteClick = (event, id) => {
		event.stopPropagation();
		this.props.onDeleteTrans(id);
	};

	render() {
		const rows = this.props.translations.map((item) => {
			return (
				<tr key={item.id} onClick={() => this.props.onSelectTrans(item.id)}>
					<td>{item.id}</td>
					<td>{item.key}</td>
					<td>{item.definitions.en}</td>
					<td>{item.definitions.pl}</td>
					<td>
						<button  onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) this.onDeleteClick(e, item.id) } }>
							Delete
						</button>
					</td>
				</tr>
			);
		});

		return (
			<table>
				<thead>
				<tr>
					<th>ID</th>
					<th>Key</th>
					<th>English</th>
					<th>Polish</th>
					<th>Operations</th>
				</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		);
	}
}

export default ListTrans;
