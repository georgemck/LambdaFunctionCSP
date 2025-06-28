/*
Look what Amazon Q Developer's AI generated!

*/

export const handler = async (event) => {
    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
            'Content-Security-Policy': "default-src *; script-src * 'unsafe-inline' 'unsafe-eval'; style-src * 'unsafe-inline'; img-src * data:; font-src *; connect-src *; media-src *; object-src *; child-src *; frame-src *; worker-src *; frame-ancestors *; form-action *; base-uri *;",
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': '*'
        },
        body: JSON.stringify({
            message: 'Lambda function with open CSP policy',
            timestamp: new Date().toISOString()
        })
    };
    
    return response;
};

