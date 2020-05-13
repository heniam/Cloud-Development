export const config = {
  "dev": {
    "username": "udagramheniamdev",
    "password": "udagramheniamdev",
    "database": "udagramheniamdev",
    "host": "udagramheniamdev.cyf1w3cd5dum.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "DEPLOYED",
    "aws_media_bucket": "udagram-henok-dev"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagramheniamdev",
    "host": "",
    "dialect": "postgres"
  },
  "jwt":{
    "secret":"helloworld"
  }
}
// export const config = {
//   "dev": {
//     "username": process.env.POSTGRESS_USERNAME,
//     "password": process.env.POSTGRESS_PASSWORD,
//     "database": process.env.POSTGRESS_DATABASE,
//     "host": process.env.POSTGRESS_HOST,
//     "dialect": "postgres",
//     "aws_region": process.env.AWS_REGION,
//     "aws_profile": process.env.AWS_PROFILE,
//     "aws_media_bucket": process.env.AWS_MEDIA_BUCKET,
//   },
//   "prod": {
//     "username": "",
//     "password": "",
//     "database": "udagram_prod",
//     "host": "",
//     "dialect": "postgres"
//   },
//   "jwt": {
//     "secret": process.env.JWT_SECRET
//   }

// }