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

### Lambda function vs AWS Lambda
*  AWS Lambda - is a computing service that runs code in response to events from Amazon Web Services.
  
*  Lambda function - is a single function connected to an event source running in AWS Lambda.

### [AWS Lambda limitations ](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html)
* At most 3GB of memory per execution
* Functions can run no more that 15 minutes
* Can only write files to /tmp folder
* Limited number of concurrent executions
* Event size up to 6 MB

### Error Handling 
![error handling](./img/errorhandle.png)

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

#### Lambda integration modes

* **Proxy** - passes all request information to a Lambda function. Easier to use.
* **Non-proxy** - allows to transform incoming request using **Velocity Template Language**






### DynamoDB