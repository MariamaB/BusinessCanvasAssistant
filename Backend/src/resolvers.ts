import documents from './database';
import { PubSub, withFilter } from 'graphql-subscriptions';
const uuidv1 = require('uuid/v1');

// const NEW_DOCUMENT = gql`
// mutation creatDocument($title: String!) {
//   creatDocument(title: $title) {
// 	id
// 	title
// 	content
//   }
// }
// `;
const NEW_DOCUMENT = 'NEW_DOCUMENT';
const DELETED_DOCUMENT = 'DELETED_DOCUMENT';
const DOCUMENT_ON_EDIT = 'DOCUMENT_ON_EDIT';


const resolvers = {
	Query: {
		documents: (parent, { searchString }) => {
			return !searchString
				? documents
				: documents.filter(
						(document) => document.title.includes(searchString) || document.content.includes(searchString)
					);
		}
	},
	Mutation: {
		creatDocument: (parent, { title }, { pubsub }) => {
			const document = {
				id: uuidv1(),
				title: title,
				content: ''
			};
			documents.push(document);
			console.log("try to create!")

			pubsub.publish(NEW_DOCUMENT, {
				newDocument: document
			});

			return document;
		},
		editDocument: (parent, { id, content }, { pubsub }) => {
			let document;
			documents.forEach((docs) => {
				if (docs.id === id) {
					docs.content = content,
					document = docs;
					}
				}
			);

			pubsub.publish(DOCUMENT_ON_EDIT, {
				documentOnEdit: document
			});

			return document;
		},
		deleteDocument: (parent, { id }, { pubsub }) => {
			// this.documents.splice(documents.indexOf(documents.filter((document) => (document.id = id))[0]), 1);

			pubsub.publish(DELETED_DOCUMENT, {
				deletedDocument: id
			});

			return id;
		}
	},
	Subscription: {

		newDocument: {
			subscribe: withFilter(
				(_, args,{pubsub}) => { 
					console.log('REGISTER TOPIC documentAdded')  // eslint-disable-line no-console
					return pubsub.asyncIterator([NEW_DOCUMENT]) 
				  },
				  (payload, variables) => {
					console.log(`Check if filter satisfied ${payload} ${variables}`) // eslint-disable-line no-console
					return true
				  }
			)
		},
		documentOnEdit: {
			subscribe: (parent, args, { pubsub }) => {
				try {
					pubsub.asyncIterator(DOCUMENT_ON_EDIT).then(() =>{})
				} catch (e) {
				console.log("documentOnEdit catch block")
				}
			}
		},
		deletedDocument: {
			subscribe: (parent, args, { pubsub }) => {
				try {
					pubsub.asyncIterator(DELETED_DOCUMENT).then(() =>{})
				} catch (e) {
				console.log("deletedDocument catch block")
				}
			}
		}
	}
};


export default resolvers;