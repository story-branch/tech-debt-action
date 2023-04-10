const core = require('@actions/core');
const github = require('@actions/github');

try {
  const techDebtToken = core.getInput('tech-debt-token');
  console.log(`Hello ${techDebtToken}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("created-tickets", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
