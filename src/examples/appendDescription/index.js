import { getAggregatedWorkspace, updateComponent } from 'ardoq-sdk-js';
import { apiProps, workspaceProps } from '../../../config';

 
const main = async () => {
  const workspace = await getAggregatedWorkspace(apiProps, workspaceProps.awsLambdaWorkspaceId);
  for (const component of workspace.components) {
    await updateComponent(apiProps, {
      ...component,
      description: (component.description || '') + '\nVisisted by script',
    });
  }
};
 
main();