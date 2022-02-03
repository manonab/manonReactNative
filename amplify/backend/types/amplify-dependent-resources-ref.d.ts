export type AmplifyDependentResourcesAttributes = {
    "function": {
        "myAppApiFunction": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "myApp": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}