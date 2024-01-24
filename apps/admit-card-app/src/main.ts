import { Handler } from 'aws-lambda';

console.log("test");

if(process.env["NODE_ENV"] == "local"){
        
}

export const handler: Handler = async (event, context) => {
    console.log('EVENT: \n' + JSON.stringify(event, null, 2));
    return context.logStreamName;
};