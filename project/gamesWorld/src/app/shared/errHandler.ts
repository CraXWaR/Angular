export function errHandler(error: any) {
    if (error.includes('ValidationError')) {
        return error.split(': ')[2]
    } else {
        return error
    }
}