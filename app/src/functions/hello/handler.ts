import 'source-map-support/register'

// import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
// import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda'

// import schema from './schema';

const hello = async (event) => {
    return `Hello ${event.body.name}, welcome to the exciting Serverless world!`
    // return formatJSONResponse({
    //   message: `Hello ${event.body.name}, welcome to the exciting Serverless world!`,
    //   event,
    // });
}

export const main = middyfy(hello)
