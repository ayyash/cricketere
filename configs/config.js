
const WebConfig = {

    "API": {
        "apiRoot": "http://localhost:8888/api"
    },
    "Auth": {
        "userAccessKey": "edash.user",
        "shortTerm": 4,
        "longTerm": 2160
    },
    "Cache": {
        "Timeout": 1,
        "Key": "edash.cache",
        "ResetKey": "edash.20220216"
    },
    "Upload": {
        "chunkSize": 5242880,
        "imageFormat": ["gif", "jpg", "png", "webp", "jpeg", "svg"],
        "imageMaxSize": 1048576,
        "siteUrl": "https://dashboard.vaes.dev"
    },
    "Storage": {
        "link": "https://vaes-files.s3.me-south-1.amazonaws.com/"
    },
    "Seo": {
        "gaEnabled": false
    },
    "isServed": true
};

