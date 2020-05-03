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






























