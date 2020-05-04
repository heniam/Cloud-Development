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

