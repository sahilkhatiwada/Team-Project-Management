/**
 * A utility function to get a list of http status codes
 *
 * @returns {Object} - An object containing the http status codes
 * @property {number} OK - 200
 * @property {number} CREATED - 201
 * @property {number} ACCEPTED - 202
 * @property {number} NO_CONTENT - 204
 * @property {number} BAD_REQUEST - 400
 * @property {number} UNAUTHORIZED - 401
 * @property {number} FORBIDDEN - 403
 * @property {number} NOT_FOUND - 404
 * @property {number} METHOD_NOT_ALLOWED - 405
 * @property {number} CONFLICT - 409
 * @property {number} UNPROCESSABLE_ENTITY - 422
 * @property {number} TOO_MANY_REQUESTS - 429
 * @property {number} INTERNAL_SERVER_ERROR - 500
 * @property {number} NOT_IMPLEMENTED - 501
 * @property {number} BAD_GATEWAY - 502
 * @property {number} SERVICE_UNAVAILABLE - 503
 * @property {number} GATEWAY_TIMEOUT - 504
 */
const httpConfig = () => ({
// success response
OK: 200,
CREATED: 201,
ACCEPTED: 202,
NO_CONTENT: 204,

// CLIENT ERRORS RESPONSE
BAD_REQUEST: 400,
UNAUTHORIZED: 401,
FORBIDDEN: 403,
NOT_FOUND: 404,
METHOD_NOT_ALLOWED: 405,
CONFLICT: 409,
UNPROCESSABLE_ENTITY: 422,
TOO_MANY_REQUESTS: 429,

// SERVER ERRORS RESPONSE
INTERNAL_SERVER_ERROR: 500,
NOT_IMPLEMENTED: 501,
BAD_GATEWAY: 502,
SERVICE_UNAVAILABLE: 503,
GATEWAY_TIMEOUT: 504,

});

export const HTTPSTATUs = httpConfig();

export type HttpStatusCodeType = (typeof HTTPSTATUs)[keyof typeof HTTPSTATUs];