var AWS = require("aws-sdk");

// create an object of s3 service
var s3 = new AWS.S3({apiVersion: '2006-03-01'});

exports.handler = (event) => {

      // create a params object

      var params = {
        Bucket: "mylambdaexamplebucket",
         CreateBucketConfiguration: {
            LocationConstraint: "ap-south-1"
           }
       };
    
       // invoke the function
       s3.createBucket(params, (err, data) =>{

         if(err) { console.log('Some error occured')}
         if(data) { console.log(data); }
       });

}
