/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0

ABOUT THIS NODE.JS EXAMPLE: This example works with Version 3 (V3) of the AWS JavaScript SDK, 
which is scheduled for release later in 2020. The prerelease version of the SDK is available
at https://github.com/aws/aws-sdk-js-v3. The 'SDK for JavaScript Developer Guide' for V3 is also
scheduled for release later in 2020, and the topic containing this example will be hosted at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide//sns-examples-sending-sms.html.

Purpose:
sns_listnumbersoptedout.js demonstrates how to retrieve a list of phone numbers that have opted out of receiving Amazon SMS messages.

Inputs:
- REGION (into command line below)

Running the code:
node sns_listnumbersoptedout.js REGION
 */
// snippet-start:[sns.JavaScript.v3.SMS.listPhoneNumbersOptedOut]

// Import required AWS SDK clients and commands for Node.js
const {SNS, ListPhoneNumbersOptedOutCommand} = require("@aws-sdk/client-sns");
// Set the AWS Region
const region = process.argv[2];
// Create SNS service object
const sns = new SNS(region);

async function run() {
  try {
    const data = await sns.send(new ListPhoneNumbersOptedOutCommand({}));
    console.log('Success. Opted-out phone numbers:', data.phoneNumbers);
  } catch (err) {
    console.error(err, err.stack);
  }
};
run();
// snippet-end:[sns.JavaScript.v3.SMS.listPhoneNumbersOptedOut]
exports.run = run; //for unit tests only
