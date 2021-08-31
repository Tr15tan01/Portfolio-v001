import React from 'react';
import Firebase from 'firebase/app';
import 'firebase/database';
import '../css/Articles.css';
import firebaseConfig from '../utils/config';

class Modal extends React.Component {
	// state = {};

	componentDidMount () {
		try {
			Firebase.initializeApp(firebaseConfig);

			Firebase.database().ref('users').once('value', (snap) => {
				console.log(snap.val());
			});
		} catch (err) {
			err && console.log(err.message);
		}
	}

	render () {
		return (
			<div id="myModal" className={this.props.defineClasses()}>
				<div className="modal-content">
					<div className="modal-header">
						<span onClick={this.props.showArticle} className="close">
							&times;
						</span>
						<h2>Modal Header</h2>
					</div>
					<div className="modal-body">
						<p>{this.props.subtitle}</p>

						<p>Some text in the Modal Body</p>
						<p>Generated test goes here</p>
						<p>{this.props.articleContent}</p>
					</div>
					<div className="modal-footer">
						<h3>Modal Footer</h3>
					</div>
				</div>
			</div>
		);
	}
}
export default Modal;
