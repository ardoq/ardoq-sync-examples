# Ardoq sync examples

Examples of how to use the 'sync' feature from ardoq-sdk-js. The following examples are provided:

 * AWS lambda sync
 * AWS S3 sync (including bucket names and objects)
 * Simple example of modifying the description field by interating through a list of workspace components.

# Requirements

* Ardoq instance with API access
* One of the examples will be creating a sync from a source data source (AWS lambda), and updating the lambda workspace in ardoq. AWS required for this with some lambda functions.

# Run

Running the simple 'append description function'
```bash
npm run start
``` 

Running the AWS lambda sync
```bash
npm run lambda
``` 


Running the AWS S3 sync. This will sync all buckets, and then loop through all buckets to fetch the objects within.
```bash
npm run s3
``` 

# TEST
```bash
jest --watch
```

# TODO

 * AWS 
   * infer role workspace from lambda properties
   * SQS
   * ECS
   * DynamoDB