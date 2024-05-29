const revalidate = 1;

export async function asynApiCall(requestConfig) {
  async function makeCall() {
    const { url, ...props } = requestConfig;

    try {
      const response = await fetch(url, {
        ...props,
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        switch (response.status) {
          case 429:
            throw {
              errorMessage:
                "Error fetching data. Please check your network connection.",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 404:
            throw {
              errorMessage: "Resource not found. Please try again.",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 400:
            throw {
              errorMessage: "Bad Request",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 401:
            throw {
              errorMessage: "Unauthorized",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 402:
            throw {
              errorMessage: "Payment Required",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 403:
            throw {
              errorMessage: "Forbidden",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 404:
            throw {
              errorMessage: "Not Found",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 405:
            throw {
              errorMessage: "Method Not Allowed",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 406:
            throw {
              errorMessage: "Not Acceptable",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 407:
            throw {
              errorMessage: "Proxy Authentication Required",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 408:
            throw {
              errorMessage: "Request Timeout",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 409:
            throw {
              errorMessage: "Conflict",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 410:
            throw {
              errorMessage: "Gone",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 411:
            throw {
              errorMessage: "Length Required",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 412:
            throw {
              errorMessage: "Precondition Failed",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 413:
            throw {
              errorMessage: "Payload Too Large",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 414:
            throw {
              errorMessage: "URI Too Long",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 415:
            throw {
              errorMessage: "Unsupported Media Type",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 416:
            throw {
              errorMessage: "Range Not Satisfiable",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 417:
            throw {
              errorMessage: "Expectation Failed",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 418:
            throw {
              errorMessage: "I'm a teapot",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 422:
            throw {
              errorMessage: "Unprocessable Entity",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 429:
            throw {
              errorMessage: "Too Many Requests",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 431:
            throw {
              errorMessage: "Request Header Fields Too Large",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 450:
            throw {
              errorMessage: "Blocked by Windows Parental Controls",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 451:
            throw {
              errorMessage: "Unavailable For Legal Reasons",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 456:
            throw {
              errorMessage: "Unrecoverable Error",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 460:
            throw {
              errorMessage: "Client Closed Connection",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 463:
            throw {
              errorMessage: "No Response",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 494:
            throw {
              errorMessage: "Request Header Too Large",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 495:
            throw {
              errorMessage: "SSL Certificate Error",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 499:
            throw {
              errorMessage: "Client Closed Request",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 500:
            throw {
              errorMessage: "Internal Server Error",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 501:
            throw {
              errorMessage: "Not Implemented",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 502:
            throw {
              errorMessage: "Bad Gateway",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 503:
            throw {
              errorMessage: "Service Unavailable",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 504:
            throw {
              errorMessage: "Gateway Timeout",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 505:
            throw {
              errorMessage: "HTTP Version Not Supported",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 506:
            throw {
              errorMessage: "Variant Also Negotiates",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 507:
            throw {
              errorMessage: "Insufficient Storage",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 508:
            throw {
              errorMessage: "Loop Detected",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 510:
            throw {
              errorMessage: "Not Extended",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 511:
            throw {
              errorMessage: "Network Authentication Required",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 520:
            throw {
              errorMessage: "Unknown Error",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 521:
            throw {
              errorMessage: "Web Server Is Down",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;

          case 522:
            throw {
              errorMessage: "Connection Timed Out",
              from: url,
              errorDetails: response.statusText,
              ErrorResponse: await response.json(),
            };
            break;
        }
      }
    } catch (error) {
      if (error === "TypeError: Failed to fetch") {
        throw {
          errorMessage:
            "Error fetching data. Please check your network connection.",
          from: url,
          errorDetails: { message: "NetworkDown ", error },
        };
      }

      if (error === "TypeError: NetworkDown") {
        throw {
          errorMessage:
            "Error fetching data. Please check your network connection.",
          from: url,
          errorDetails: { message: "NetworkDown ", error },
        };
      }

      if (error === "TypeError: ServerDown") {
        throw {
          errorMessage:
            "Error fetching data. Please check your network connection.",
          from: url,
          errorDetails: { message: "ServerDown ", error },
        };
      }

      throw error;
    }
  }
  return { promise: makeCall() };
}
