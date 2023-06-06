export default function handleResponse(
  status: Number,
  data: any,
  message: string | null = null
) {
  if (status === 200) {
    // Success
    return {
      status,
      success: true,
      message,
      data: data,
    };
  } else if (status === 201) {
    // Resource created
    return {
      status,
      success: true,
      message: message || "Resource created successfully.",
      data: data,
    };
  } else if (status === 204) {
    // No content
    return {
      status,
      success: true,
      message: message || "No content available.",
      data: null,
    };
  } else if (status === 400) {
    // Bad request
    return {
      status,
      success: false,
      error: "Bad request.",
      message: message || "The request was invalid or cannot be served.",
    };
  } else if (status === 401) {
    // Unauthorized
    return {
      status,
      success: false,
      error: "Unauthorized.",
      message: message || "Authentication credentials are missing or invalid.",
    };
  } else if (status === 403) {
    // Forbidden
    return {
      status,
      success: false,
      error: "Forbidden.",
      message: message || "You do not have permission to access this resource.",
    };
  } else if (status === 404) {
    // Not found
    return {
      status,
      success: false,
      error: "Not found.",
      message: message || "The requested resource could not be found.",
    };
  } else if (status === 409) {
    // Conflict - User already exists
    return {
      status,
      success: false,
      error: "Conflict.",
      message: message || "Another conflict error occurred.",
    };
  } else if (status === 500) {
    // Internal server error
    return {
      status,
      success: false,
      error: "Internal server error.",
      message: message || "An unexpected error occurred on the server.",
    };
  } else {
    // Other status codes
    return {
      status,
      success: false,
      error: "Unknown error.",
      message: message || "An unexpected error occurred on the server.",
    };
  }
}
