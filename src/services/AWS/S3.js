const AWS = require('./aws');

s3 = new AWS.S3({apiVersion: '2006-03-01'});

const BUCKET_NAME = "aws-codestar-us-east-1-424135468230";

async function get_buckets() {
  return new Promise((resolve, reject) => {
    s3.listBuckets(function(err, data) {
      if (err) {
        // perhaps throw an error
        reject(err);
      } else {
        resolve(data.Buckets);
      }
    });
  });
}


async function bucket_exists() {
  return new Promise((resolve, reject) => {
    s3.headBucket({
      Bucket: BUCKET_NAME
    }, function(err, data) {
      if(err) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
}

async function create_bucket() {
  return new Promise((resolve, reject) => {
    s3.createBucket({
      Bucket: BUCKET_NAME
    }, function(err, data) {
      if(err) {
        console.log(err);
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
}

async function upload_frame(camera_id, frame_id, file) {
  return new Promise(async (resolve, reject) => {
    await s3.putObject({
      Body: file,
      Bucket: BUCKET_NAME,
      Key: `frames/${camera_id}/${frame_id}`
    });

    await s3.putObject({
      Body: file,
      Bucket: BUCKET_NAME,
      Key: `latest_frames/${camera_id}`
    }, function(err, data) {
      if(err) {
        console.log(err);
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
}

async function upload_annotated_frame(camera_id, file) {
  return new Promise(async (resolve, reject) => {
    await s3.putObject({
      Body: file,
      Bucket: BUCKET_NAME,
      Key: `annotated/${camera_id}`
    }, function(err, data) {
      if(err) {
        console.log(err);
        resolve(false);
      } else {
        console.log(data);
        resolve(true);
      }
    });
  });
}

async function get_latest_frame(camera_id) {
  return new Promise((resolve, reject) => {
    s3.getObject({
      Bucket: BUCKET_NAME,
      Key: `latest_frames/${camera_id}`
    }, function(err, data) {
      if(err) {
        resolve(err);
      } else {
        console.log(data.Body);
        resolve(data.Body);
      }
    });
  });
}

async function get_annotated_frame(camera_id) {
  return new Promise((resolve, reject) => {
    s3.getObject({
      Bucket: BUCKET_NAME,
      Key: `annotated/${camera_id}`
    }, function(err, data) {
      if(err) {
        resolve(err);
      } else {
        console.log(data.Body);
        resolve(data.Body);
      }
    });
  });
}

async function upload_mask(camera_id, file) {
  return new Promise((resolve, reject) => {
    s3.putObject({
      Body: file,
      Bucket: BUCKET_NAME,
      Key: `masks/${camera_id}`
    }, function(err, data) {
      if(err) {
        console.log(err);
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
}

module.exports = {
  get_buckets,
  bucket_exists,
  create_bucket,
  upload_frame,
  upload_mask,
  get_latest_frame,
  upload_annotated_frame
};
