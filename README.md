# Cloud Computing

## Types of Cloud Computing
#### Infrastructure-as-a-Service (IaaS)
The provider supplies virtual server instances, storage, and mechanisms for you to manage servers. E.g - AWS, BlueOcean
#### Platform-as-a-Service (PaaS) 
A platform of development tools hosted on a provider's infrastructure. E.g GoDaddy, saleforce  
#### Software-as-a-Service (SaaS)
A software application that runs over the Internet and is managed by the service provider. E.g gmail, office365


## Cloud Deployment Models
#### Public Cloud
A public cloud makes resources available over the Internet to the general public.
#### Private Cloud
A private cloud is a proprietary network that supplies services to a limited number of people.

#### Hybrid Cloud
A hybrid model contains a combination of both a public and a private cloud.

*The hybrid model is a growing trend in the industry for those organizations that have been slow to adopt the cloud due to being in a heavily regulated industry. The hybrid model gives organizations the flexibility to slowly migrate to the cloud.*


## Global Infrastructure
#### Region
A region is considered a geographic location or an area on a map.
#### Availability Zone
An availability zone is an isolated location within a geographic region and is a physical data center within a specific region.
#### Edge Location
An edge location is as a mini-data center used solely to cache large data files closer to a user's location.
#### Additional Information
* There are more Availability Zones (AZs) than there are Regions.
* There should be at least two AZs per Region.
* Each region is located in a separate geographic area.
* AZs are distinct locations that are engineered to be isolated from failures.*

N.B - IAM -- Identity and Access Management


## Elastic Cloud Compute - EC2
Elastic Cloud Compute or EC2 is a foundational piece of AWS' cloud computing platform and is a service that provides servers for rent in the cloud.

#### Spot Requests 
The Instance terminate if it goes moe than the allocated price/bid.

#### Reserved Instances 
You Sign a conteact for you EC2 and pay upfront and long term plans, you get a huge discount.

#### Dedicted Host 
This is where you have a dedicated hardware and you wont share a server/hardware with others.

#### Schedule Instance 
A custom start and stop time for the instance. 

## Elastic Block Store(EBS)
Elastic Block Store (EBS) is a storage solution for EC2 instances and is a physical hard drive that is attached to the EC2 instance to increase storage.


## Virtual Private Cloud (VPC)
Virtual Private Cloud or VPC allows you to create your own private network in the cloud. You can launch services, like EC2, inside of that private network. A VPC spans all the Availability Zones in the region.

VPC allows you to control your virtual networking environment, which includes:

* IP address ranges
* subnets
* route tables
* network gateways




## Lambda
AWS Lambda provides you with computing power in the cloud by allowing you to execute code without standing up or managing servers.

An application developed using Lambdas is considered to be ***serverless***, because you are not concerened with servers and only pay when you code runs.

* Lambdas have a time limit of 15 minutes.(Means that the timeout limit is 15 mins.)
* The code you run on AWS Lambda is called a “Lambda function.”
* Lambda code can be triggered by other AWS services.
* AWS Lambda supports Java, Go, PowerShell, Node.js, C#/.NET, Python, and Ruby. There is a Runtime API that allows you to use other programming languages to author your functions.
* Lambda code can be authored via the console.


## Elastic Beanstalk
Elastic Beanstalks is an *orchestration service* that allows you to deploy a web application at the touch of a button by spinning up (or provisioning) all of the services that you need to run your application.

* Elastic Beanstalk can be used to deployed web applications developed with Java, .NET, PHP, Node.js, Python, Ruby, Go, and Docker.
* You can run your applications in a VPC.


## Storage in the Cloud
Storage and database services in the cloud provide a place for companies to collect, store, and analyze the data they've collected over the years at a massive scale.The benefit of cloud storage, Durability, Availability and Scalability. 

### Storage & Database Services
* Amazon Simple Storage Service (Amazon S3)
* Amazon Simple Storage Service (Amazon S3)
* Glacier
* DynamoDB
* Relational Database Service (RDS)
* Redshift
* ElastiCache
* Neptune
* Amazon DocumentDB

### S3 & S3 Glacier
Amazon Simple Storage Service (or S3) is an object storage system in the cloud.

#### Storage Classes
S3 offers several storage classes, which are different data access levels for your data at certain price points.

* Standard 
* Glacier
* Glacier Deep Archive
* Intelligent-Tiering
* Standard Infrequent Access
* One Zone-Infrequent Access

N.B - Glacier - most used for data archiving, cheaper than S3 but data retival can be few minutes or hours. Its mostly used with monthly logs and audit reports as it isnt frequently used. 


### DynamoDB
DynamoDB is a NoSQL document database service that is fully managed. Unlike traditional databases, NoSQL databases, are schema-less. 

Schema-less simply means that the database doesn't contain a fixed (or rigid) data structure.

*N.B -  ARN means (Amazon Resource Name)*

### Relational Database Service (RDS)
RDS (or Relational Database Service) is a service that aids in the administration and management of databases. 

RDS assists with database administrative tasks that include upgrades, patching, installs, backups, monitoring, performance checks, security, etc.

### Redshift
Redshift is a cloud data warehousing service to help companies manage big data. 

Redshift allows you to run fast queries against your data using SQL, ETL, and BI tools. Redshift stores data in a column format to aid in fast querying.

### Content Delivery In The Cloud (CDN)
A Content Delivery Network (or CDN) speeds up delivery of your static and dynamic web content by caching content in an Edge Location close to your user base.

* The benefits of a CDN is, low latency, decreased server load and 
better user experience.


### Cloud Front
CloudFront is used as a global content delivery network (CDN). Cloud Front speeds up the delivery of your content through Amazon's worldwide network of mini-data centers called *Edge Locations*.

CloudFront works with other AWS services, as shown below, as an origin source for your application:
* Amazon S3
* Elastic Load Balancing
* Amazon EC2
* Lambda@Edge
* AWS Shield

N.B - Cloud front has a Restriction Tab, which can allow you to use it a security mechanism to allow who can access it.


## Security In The Cloud
### AWS Shield
AWS Shield is a managed DDoS (or Distributed Denial of Service) protection service that safeguards web applications running on AWS.

AWS Shield is a service that you get "out of the box", it is always running (automatically) and is a part of the free standard tier. If you want to use some of the more advanced features, you'll have to utilize the paid tier.

### AWS Web Application Firewall(WAF)
AWS WAF (or AWS Web Application Firewall) provides a firewall that protects your web applications.

WAF can stop common web attacks by reviewing the data being sent to your application and stopping well-known attacks. E.g SQL Injection, Cross-site Scripting(XSS) ..etc.

### Identity & Access Management(IAM)
Identity & Access Management (IAM) is an AWS service that allows us to configure who can access our AWS account, services, or even applications running in our account. 

*IAM is a global service and is automatically available across ALL regions.*


## Networking in Cloud
### Route 53
Route 53 is a cloud domain name system (DNS) service that has servers distributed around the globe used to translates human-readable names like www.google.com into the numeric IP addresses like 74.125.21.147.

* Allows you to register a domain name (or manage an existing)
* Routes internet traffic to the resources for your domain
* Checks the health of your resources
  
## Elasticity in the Cloud
One of the main benefits of the cloud is that it allows you to stop guessing about capacity when you need to run your applications.

With elasticity, your servers, databases, and application resources can automatically scale up or scale down based on load.

### EC2 Auto Scaling
EC2 Auto Scaling is a service that monitors your EC2 instances and automatically adjusts by adding or removing EC2 instances based on conditions you define in order to maintain application availability and provide peak performance to your users.

You can configure EC2 Auto Scaling to send messages Via Simple Notification Services(SNS) when launching or terminating an instance.

### Elastic Load Balancing
Elastic Load Balancing automatically distributes incoming application traffic across multiple servers.

Elastic Load Balancer is a service that:
* Balances load between two or more servers
* Stands in front of a web server
* Provides redundancy and performance


## Messaging in the Cloud

There are often times that users of your applications need to be notified when certain events happen. Notifications, such as text messages or emails can be sent through services in the cloud. 

### Simple Notification Service
Amazon Simple Notification Service (or SNS) is a cloud service that allows you to send notifications to the users of your applications.

SNS allows you to decouple the notification logic from being embedded in your applications and allows notifications to be published to a large number of subscribers.

### Queues
A queue is a data structure that holds requests called *messages*. Messages in a queue are commonly processed in order, first in, first out (FIFO).

### Simple Queue Service(SQS)
Amazon Simple Queue Service (SQS) is a fully managed message queuing service that allows you to integrate queuing functionality in your application. SQS offers two types of message queues: *standard and FIFO.*

## Containers in the Cloud
Enterprises are adopting container technology at an explosive rate. A container consists of everything an application needs to run: the application itself and its dependencies (e.g. libraries, utilities, configuration files), all bundled into one package.

Each container is an independent component that can run on its own and be moved from environment to environment.

### Elastic Container Service (ECS)
ECS is an orchestration service used for automating deployment, scaling, and managing of your containerized applications. ECS works well with Docker containers by:
* launching and stopping Docker containers
* scaling your applications
* querying the state of your applications


## Logging & Auditing in The Cloud
Logging provides visibility into your cloud resources and applications.

### Cloud Trail
Cloud Trail allows you to audit (or review) everything that occurs in your AWS account. Cloud Trail does this by recording all the AWS API calls occurring in your account and delivering a log file to you.

### Cloud Watch
Cloud Watch is a service that monitors resources and applications that run on AWS by collecting data in the form of logs, metrics, and events.

## Infrastructure as Code
### Cloud Formation
AWS Cloud Formation allows you to model your entire infrastructure in a text file template allowing you to provision AWS resources based on the scripts you write.


## Amazon Cognito
**Amazon Cognito** is an Amazon Web Services (AWS) product that controls user authentication and access for mobile applications on internet-connected devices. It basically takes care of security and authentications for us.


---

## Automatic Bug Reporting
[Sentry](https://sentry.io/welcome/) to automatically catch errors and provide a stack trace to developers so we can quickly find and fix bugs!


## Testing Concurrency
[Siege](https://www.joedog.org/siege-manual/) is a lightweight CLI tool to create a large number of concurrent requests to simulate this kind of situation. It basically helps us to make a ton of fake requests and fake users so that we can simulation a situaton we might face in real world. This is used before we deploy unlike the next examples, which we can use in the real world.

*Must be cautious before running these kinds of tests on AWS infrastructure to prevent your local IP from being blocked or your services being suspended.*


## Monitoring the State of the System


* [CloudFlare ](https://www.cloudflare.com) for improved DNS with monitoring and failover capabilities.
* [DataDog](https://www.datadoghq.com/product/)for stack performance and health status.
* AWS also has native tools to help monitor performance **CloudWatch**.