/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0

ABOUT THIS NODE.JS EXAMPLE: This example works with Version 3 (V3) of the AWS JavaScript SDK,
which is scheduled for release later in 2020. The prerelease version of the SDK is available
at https://github.com/aws/aws-sdk-js-v3. The 'SDK for JavaScript Developer Guide' for V3 is also
scheduled for release later in 2020, and the topic containing this example will be hosted at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/cloudwatch-examples-sending-events.html.

Purpose:
cwe_putevents.js demonstrates how to send custom events to Amazon CloudWatch Events so they can be matched with rules.

Inputs:
- REGION
- RESOURCE_ARN

Running the code:
node cwe_putevents.js REGION RESOURCE_ARN
*/
// snippet-start:[cwEvents.JavaScript.v3.cwe.putEvents]
// Import required AWS SDK clients and commands for Node.js
const {CloudWatchEvents, PutEventsCommand} = require("@aws-sdk/client-cloudwatch-events");
// Set the AWS Region
const region = process.argv[2];
// Create CloudWatch service object
const cwevents = new CloudWatchEvents(region);
// Set the parameters
const params = {
  Entries: [
    {
      Detail: '{ \"key1\": \"value1\", \"key2\": \"value2\" }',
      DetailType: 'appRequestSubmitted',
      Resources: [
        process.argv[3], //RESOURCE_ARN
      ],
      Source: 'com.company.app'
    }
  ]
};

async function run() {
  try {
    const data = await cwevents.send(new PutEventsCommand(params));
    console.log("Success, event sent; requestID:", data.$metadata.requestId);
  }
  catch(err){
    console.log("Error", err);
  }
};
run();
// snippet-end:[cwEvents.JavaScript.v3.cwe.putEvents]
exports.run = run; //for unit tests only
