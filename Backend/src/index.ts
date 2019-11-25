import { GraphQLServer, PubSub } from 'graphql-yoga';

const documents = [
	{
		id: "1",
		title: 'J.K. Rowling',
		content: 'This is a new Document!!'
	},
	{
		id: "2",
		title: 'Michael Crichton',
		content: 'This is another new Document!!!'
	}
];

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
			let id = documents.length + 1;
			const document = {
				id: '' + id,
				title: title,
				content: ''
			};
			documents.push(document);

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
			subscribe: (parent, args, { pubsub }) => pubsub.asyncIterator(NEW_DOCUMENT)
		},
		documentOnEdit: {
			subscribe: (parent, args, { pubsub }) => pubsub.asyncIterator(DOCUMENT_ON_EDIT)
		},
		deletedDocument: {
			subscribe: (parent, args, { pubsub }) => pubsub.asyncIterator(DELETED_DOCUMENT)
		}
	}
};

const pubsub = new PubSub();

const server = new GraphQLServer({
	typeDefs: './src/schema.graphql',
	resolvers,
	context: { pubsub }
});

server.start(() => console.log('Server is running on http://localhost:4000/'));
