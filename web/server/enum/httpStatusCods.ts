enum HttpCodes {
    // 200 Http Request
    SUCCESS = 200,

    // 400 Http Request
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    PAYMENT_REQUIRED = 402,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    NOT_ACCEPTABLE = 406,
    CONFLICTS = 409,
    PRECONDITION_FAILED = 412,

    PRECONDITION_REQUIRED = 428,

    // 500 Http Request
    SERVER_ERROR = 500,
}

export default HttpCodes
