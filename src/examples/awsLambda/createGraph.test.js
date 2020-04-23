import createGraph from './createGraph';
import exampleLambdas from '../../mockData/exampleLambdas.json';

const graph = {
    components: [
        {
          customId: 'arn:aws:lambda:eu-west-1:086297312111:function:twilioCallback', // same as arn
          workspace: 'lambdas',
          name: 'twilioCallback',
          type: 'AWS Lambda',
          fields: {
            runtime: 'nodejs8.10',
            arn: 'arn:aws:lambda:eu-west-1:086297312111:function:twilioCallback',
          awsResourceUrl: 'https://eu-west-1.console.aws.amazon.com/lambda/home?region=eu-west-1#/functions/twilioCallback',
          cloudwatchLogUrl: 'https://eu-west-1.console.aws.amazon.com/cloudwatch/home?region=eu-west-1#logStream:group=/aws/lambda/twilioCallback',
            }
        },
        {
            customId: 'arn:aws:lambda:eu-west-1:086297312111:function:ardoq-slack-integration-dev-aviato', // same as arn
            workspace: 'lambdas',
            name: 'ardoq-slack-integration-dev-aviato',
            type: 'AWS Lambda',
            fields: {
              runtime: 'nodejs10.x',
              arn: 'arn:aws:lambda:eu-west-1:086297312111:function:ardoq-slack-integration-dev-aviato',
              awsResourceUrl: 'https://eu-west-1.console.aws.amazon.com/lambda/home?region=eu-west-1#/functions/ardoq-slack-integration-dev-aviato',
              cloudwatchLogUrl: 'https://eu-west-1.console.aws.amazon.com/cloudwatch/home?region=eu-west-1#logStream:group=/aws/lambda/ardoq-slack-integration-dev-aviato',
              }
          },
    ],
    references: [],
};



test('createGraph function is defined', () => {
    expect(typeof createGraph).toEqual('function');
  });

test('createGraph function returns formatted result', () => {
    expect(createGraph(exampleLambdas)).toEqual(graph);
});