import { sync, FieldType } from "ardoq-sdk-js";
import AWS from 'aws-sdk';
import { apiProps, workspaceProps, awsProps } from '../../../config';
import createGraph from './createGraph';

var lambda = new AWS.Lambda(awsProps);

const fields = [
  {
    name: "arn",
    label: "ARN",
    type: FieldType.TEXT,
  },
  {
    name: "runtime",
    label: "Runtime",
    type: FieldType.TEXT,
  },
  {
    name: 'cloudwatchLogUrl',
    label: 'Cloudwatch Logs URL',
    type: FieldType.URL,
  },
  {
    name: 'awsResourceUrl',
    label: 'AWS Resource URL',
    type: FieldType.URL,
  },
];
const workspaces = {
  lambdas: workspaceProps.awsLambdaWorkspaceId
};

const main = async () => {
  const lambdas = await lambda.listFunctions().promise();
  const graph = createGraph(lambdas);
  sync(apiProps, workspaces, graph, fields);
};

main();