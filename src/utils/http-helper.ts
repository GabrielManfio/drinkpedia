import HttpResponse from "../model/http-response";

export const ok = async (data: null): Promise<HttpResponse> => ({
    statusCode: 200,
    body: data
});


export const noContent = async (): Promise<HttpResponse> => ({
    statusCode: 204,
    body: null
});

export const badRequest = async (): Promise<HttpResponse> => ({
    statusCode: 400,
    body: null
});

export const created = async (): Promise<HttpResponse> => ({
    statusCode: 201,
    body: "SUcessful"
})
