# Introduction to Serverless 

A serverless is a spectrum of solutions servers are managed by someone else
allow to scale up and down easily
pay for what you use. 

### Benefits of Serveless
* Low entry barrier
* Cost efficient
* High-availability and scalability



## Serverless Components
* **FaaS** (Function as a service) : write code in individual functions and deploy them to a platform to be executed, e.g - AWS Lambda, Azure Functions ... etc.

* **Datastores**: Storage of data e.g S3, DynamoDb,Firebase.
  
* **Messaging**: Send messages from one application to another, e.g, Amazon SQS,Google pub/sub ... etc.

* **Services**: Services that provide functionalities where we don't need to manage servers; i.e. authentication, ML, video processing,  e.g Auth, Big Data, ML ... etc.

        
         We can mix serverless with not serverless. 


#### Function as a Service - FaaS
* Split application into small functions
* Event driven
* Pay per invocation
* Rest is handled by a cloud provider

##### Different Event sources for our AWS Lambda function. 
  * There are more than 40 Event sources but here are few
  
![FaaS](./img/faas.png)

* we can directly configure Memory and Timeout for an AWS Lambda function.

### Lambda function vs AWS Lambda
*  AWS Lambda - is a computing service that runs code in response to events from Amazon Web Services.
  
*  Lambda function - is a single function connected to an event source running in AWS Lambda.

### [AWS Lambda limitations ](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html)
* At most 3GB of memory per execution
* Functions can run no more that 15 minutes
* Can only write files to /tmp folder
* Limited number of concurrent executions - (limit can be lifted!)
* Event size up to 6 MB - (256 Kb Asynchronous)

### Error Handling 
![error handling](./img/errorhandle.png)
  * **Request/response method**: If there's an error in the function, then it will return immediately to the caller, which can process the error from the Lambda function.
  * **Async method:** Instead of returning an error to the user, AWSLambda will return HTTP 202 code to the user and it will store a request into an internal queue. Additionally, it will try to call the Lambda function up to 3 times. If all of those times result into an error, then it will store the event into a "dead-letter queue", which stores all the events that the Lambda function failed to process.
### Serverless Benefits

|     Pros    |      Cons        |
| --------|:--------------------:|
| Easy to develop & low cost  | Not for heavy workloads  |
| Scalability and reliability  | platform limitaions |
| focus on business value | vendor lock-in |


### API Gateway
* Entry point for API users
* Pass requests to other services
* Process incoming requests

### API Gateway End point Types 
  ![Edge End point](./img/edge.png )\
   ![Regional End point](./img/regional.png )
    ![Private End point](./img/private.png )

N.B - Edge optimazed is better if our API is to be used by geographically distributed group of users.

#### Lambda integration modes

* **Proxy** - passes all request information to a Lambda function. Easier to use.
* **Non-proxy** - allows to transform incoming request using **Velocity Template Language**


### DynamoDB
  * NoSQL database 
      * Key-value store - every item should have key 
      * Document datastore - every item can be a complex document
  * Scalable Database 
  * Low latency 
  * Serverless 
  * High Avaliablity 

### DynamoDB Features 
  * Schemaless 
  * Query via API
  * ACID Transaction (**A**tomicity **C**onsistency **I**solation **D**urability)
  * Update Streams
  * Global Tables 
  * Backups 

 ![DynamoDB](./img/dynamodb.png )

### DynamoDB Capacity Modes

DynamoDB has two capacity modes:

* **Provisioned capacity** - we need to define the maximum amount of read/write requests DynamoDB can handle. The higher the limit we set, the more we have to pay per month. Requests are throttled if we go above the specified limit.
  
* **On-Demand** - DynamoDB will handle as many requests as we send, and we pay per-request. Can be more expensive comparing to Provisioned capacity, but is better for applications with unpredictable traffic patterns.

N.B - Every item in DynamoDB should have a partition key.



### Serverless 
* Standardized way of deploying an application
* create necessary resources
* Manage Applications - Remove applications, call functions, ru application locally 
  
#### Serverless Providers
  * **Serverless** framework - its the most developed 
  * **Zappa** is another serverless app and only supports Python.
  * **Serverless Application Model(SAM)** - from AWS, CloudFormation extention.
  * **Claudia.js** - it only supports Node.js and AWS. 

#### Why Serverless Framework
  * Its the most popular framework
  * Dozons of plugins 
  * Huge Community 
  * It can be used with AWS, Azure, Google Cloud, Kubeless, IBM OpenWhisk and etc.
  * It supports many programming languages as well.
  
### YAML
  * Common configuration file format 
  * Superset of JSON, yaml is more concise format 
  * Indentation with spaces like phyton 
  
  
   ![yamlvsjson](./img/yamlvsjson.png )

   

  * [Resource to convert from YAML code to JSON and vice versa](https://www.json2yaml.com/)
  *  [Serverless Plugins](https://www.serverless.com/plugins/)