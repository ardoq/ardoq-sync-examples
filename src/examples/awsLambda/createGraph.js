import { awsProps } from '../../../config';

export default data => {
    // accept response from aws lambda call

    const graph = {
        components: [],
        references: [],
    }

    data.Functions.forEach(element => {
        const {
            FunctionArn,
            FunctionName,
            Runtime
        } = element
        let o = {
            customId: FunctionArn,
            workspace: "lambdas",
            name: FunctionName,
            type: "AWS Lambda",
            fields: {
                runtime: Runtime,
                arn: FunctionArn,
                cloudwatchLogUrl: `https://${awsProps.region}.console.aws.amazon.com/cloudwatch/home?region=${awsProps.region}#logStream:group=/aws/lambda/${FunctionName}`,
                awsResourceUrl: `https://${awsProps.region}.console.aws.amazon.com/lambda/home?region=${awsProps.region}#/functions/${FunctionName}`,
            }
        }; 

        graph.components.push(o)
    });

    return graph

}