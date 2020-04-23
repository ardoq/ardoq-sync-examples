export const apiProps = {
    authToken: '<my ardoq token>',
    org: '<my ardoq org name>',
    url: 'https://app.ardoq.com/api/', // change to <yoursubdomain.arodq.com/api>, or us.ardoq.com
};

export const workspaceProps = {
    workspaceId: '<your workspace ID>',
    awsLambdaWorkspaceId: '<your workspace ID>',
    awsS3WorkspaceId: '<your workspace ID>',
};

export const awsProps = {
    region: 'eu-west-1', // or whatever
};

export const awsCredentials = { // grab these from IAM
    accessKeyId: null,
    secretAccessKey: null,
};