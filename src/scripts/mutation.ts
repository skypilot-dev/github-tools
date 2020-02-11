import { Integer } from '@skypilot/common-types';
import { graphQlClient } from '../graphql/client';

const query = `
  query FindIssueID($issueNumber:Int!) {
    repository(owner:"skypilotcc", name:"toolchain") {
      issue(number:$issueNumber) {
        id
      }
    }
  }
`;

const mutation = `
  mutation AddReactionToIssue($issueId:String!) {
    addReaction(input:{ subjectId: $issueId, content:HOORAY }) {
      reaction {
        content
      }
      subject {
        id
      }
    }
}`;

interface RepositoryIssueIdQueryResult {
  repository: {
    issue: {
      id: string;
    };
  };
}

async function getIssueId(issueNumber: Integer): Promise<string> {
  const result: RepositoryIssueIdQueryResult = await graphQlClient.request(query, {
    issueNumber,
  });
  console.log('result:', result);
  const { repository: { issue: { id } } } = result;
  return id;
}

async function setReaction(issueNumber: Integer): Promise<string> {
  const result: RepositoryIssueIdQueryResult = await graphQlClient.request(query, {
    issueNumber,
  });
  const { repository: { issue: { id } } } = result;

  return graphQlClient.request(mutation, {
    issueId: id,
  });
}

getIssueId(10)
  .then(result => console.log(result))
  .catch(e => console.error(e));

setReaction(10)
  .then(result => console.log(result))
  .catch(e => console.error(e));

