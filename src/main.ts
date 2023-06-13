import * as core from "@actions/core"
import * as github from '@actions/github'

try {
    const name = core.getInput('who-to-greet')
    console.log(`Hello ${name}!`);
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);

    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
} catch (error: any) {
    core.setFailed(error.message)
}