// const businessModels = require('./database');
const { neo4jgraphql, AuthenticationError } = require('neo4j-graphql-js');
// const businessModels = neo4jgraphql;
const { PubSub, withFilter } = require('graphql-subscriptions');
// import { neo4jgraphql } from 'neo4j-graphql';
const uuidv1 = require('uuid/v1');

let businessModels = neo4jgraphql;

const NEW_BUSINESS_MODEL = 'NEW_BUSINESS_MODEL';
const DELETED_BUSINESS_MODEL = 'DELETED_BUSINESS_MODEL';
const BUSINESS_MODEL_ON_EDIT = 'BUSINESS_MODEL_ON_EDIT';



const resolvers = {
    Query: {
        businessModels: (object, params, ctx, info) => {
                console.log(JSON.stringify(neo4jgraphql(object, params, ctx, info), null, 2))
                return neo4jgraphql(object, params, ctx, info)
            }
            // businessModels: (parent, { searchString }) => {
            //     return !searchString ?
            //         businessModels :
            //         businessModels.filter(
            //             (businessModel) => businessModel.name.includes(searchString)
            //         );
            // }
    },
    Mutation: {
        createBusinessModel: (parent, { name }, { pubsub }) => {
            const businessModel = {
                id: uuidv1(),
                name: name,
                content: {
                    keyPartners: '',
                    keyActivities: '',
                    valueProposition: '',
                    customerRelationships: '',
                    CustomerSegments: '',
                    keyResources: '',
                    channels: '',
                    costStructure: '',
                    revenueStreams: ''
                },
            };
            businessModels.push(businessModel);
            console.log("try to create!")

            pubsub.publish(NEW_BUSINESS_MODEL, {
                newBusinessModel: businessModel
            });

            return businessModel;
        },
        editBusinessModel: (parent, { id, name, content }, { pubsub }) => {
            console.log("update: " + name);
            let businessModel;
            businessModels.forEach((bm) => {
                if (bm.id === id) {
                    bm.name = name ? name : bm.name,
                        bm.content = content ? content : bm.content,
                        businessModel = bm;
                }
            });

            pubsub.publish(BUSINESS_MODEL_ON_EDIT, {
                businessModelOnEdit: businessModel
            });

            return businessModel;
        },
        deleteBusinessModel: (parent, { id }, { pubsub }) => {
            console.log("deleting: " + id)
            let businessModel = businessModels.find(bm => bm.id = id);
            console.log("deleting: " + businessModel.name)
            businessModels.splice(businessModels.indexOf(businessModel), 1);

            pubsub.publish(DELETED_BUSINESS_MODEL, {
                deletedBusinessModel: businessModel
            });

            return businessModel;
        }
    },
    Subscription: {

        newBusinessModel: {
            subscribe: withFilter(
                (_, args, { pubsub }) => {
                    console.log('REGISTER TOPIC businessModelAdded')
                    return pubsub.asyncIterator([NEW_BUSINESS_MODEL])
                },
                (payload, variables) => {
                    console.log(`Check if filter satisfied ${payload} ${variables}`)
                    return true
                }
            )
        },
        businessModelOnEdit: {
            subscribe: (parent, args, { pubsub }) => {
                try {
                    pubsub.asyncIterator(BUSINESS_MODEL_ON_EDIT).then(() => {})
                } catch (e) {
                    console.log("businessModelOnEdit catch block")
                }
            }
        },
        deletedBusinessModel: {
            subscribe: (parent, args, { pubsub }) => {
                try {
                    pubsub.asyncIterator(DELETED_BUSINESS_MODEL).then(() => {})
                } catch (e) {
                    console.log("deletedBusinessModel catch block")
                }
            }
        }
    }
};


module.exports = resolvers;