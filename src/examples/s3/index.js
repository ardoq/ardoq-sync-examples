import { sync, FieldType } from "ardoq-sdk-js";
import AWS from 'aws-sdk';
import { apiProps, workspaceProps } from '../../../config';

var s3 = new AWS.S3();

const fields = [
    {
        name: "bucketUrl",
        label: "Bucket Url",
        type: FieldType.URL,
      },
      {
          name: 's3ObjectSize',
          label: 'S3 Object Size',
          type: FieldType.NUMBER,
      },
      {
        name: 's3StorageClass',
        label: 'S3 Storage Class',
        type: FieldType.TEXT,
    },
    
];

const workspaces = {
    s3: workspaceProps.awsS3WorkspaceId,
};
 
const createGraph = async () => {
    const graph = {
        components: [],
        references: [],
    }
    const { Buckets } = await s3.listBuckets().promise();

    for (let b of Buckets) {
        const { Name } = b;
        graph.components.push(
            {
                customId: Name,
                workspace: "s3",
                name: Name,
                type: "Amazon S3 Bucket",
                fields: {
                    bucketUrl: 'https://s3.console.aws.amazon.com/s3/buckets/' + Name,
                }
            }
        )
        
        // comment out this section if you don't want to sync all objects to ardoq ( could take some time to fetch all data from aws with nested http requests)
        let objects = await s3.listObjectsV2({Bucket: Name}).promise();
        for (let o of objects.Contents) {
            const { Key, Size, StorageClass } = o;
            graph.components.push(
                {
                    customId: Key,
                    workspace: "s3",
                    name: Key,
                    type: "Amazon S3 Object",
                    parent: Name,
                    fields: {
                        s3ObjectSize: Size,
                        s3StorageClass: StorageClass,
                    }
                }
            )
        }
       
    }
    return graph;
}

const main = async () => {

    const graph = await createGraph();
    sync(apiProps, workspaces, graph, fields);
};

main();