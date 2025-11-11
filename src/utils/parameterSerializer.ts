/**
 * Parameter Serializer
 *
 * Utility to serialize query parameters for API requests
 */

/**
 * Serialize object parameters to query string format
 * Handles arrays, nested objects, and null/undefined values
 */
const parameterSerializer = (params: Record<string, any>): string => {
    const searchParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
        if (value === null || value === undefined) {
            // Skip null and undefined values
            return;
        }

        if (Array.isArray(value)) {
            // Handle arrays - add each item with same key
            value.forEach((item) => {
                if (item !== null && item !== undefined) {
                    searchParams.append(key, String(item));
                }
            });
        } else if (typeof value === 'object') {
            // Handle nested objects - stringify
            searchParams.append(key, JSON.stringify(value));
        } else {
            // Handle primitive values
            searchParams.append(key, String(value));
        }
    });

    return searchParams.toString();
};

export default parameterSerializer;

