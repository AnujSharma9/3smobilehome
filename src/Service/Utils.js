const SERVER_URL = "http://localhost:8080"

export function createError(err){
    return {status : 'error' , err}
}

export function createUrl(path){
    return `$(SERVER_URL) /${path}`
}