
const customFetch = async (url, options) => {
    const req = await fetch(url, options);
    return req.json();
};

export const httpGet = async (url) => {
    return customFetch(url);
}

export const httpPost = async (url, options) => {
    return customFetch(url, {
        headers: {
            Accept: 'appliation/json',
            'Content-Type': 'application/json',
        },
        method: 'POST',
        ...options,
    });
}

export const httpPatch = async (url, options) => {
    return customFetch(url, {
        headers: {
            Accept: 'appliation/json',
            'Content-Type': 'application/json',
        },
        method: 'PATCH',
        ...options,
    });
}

export const httpDelete = async (url, options) => {
    return customFetch(url, {
        headers: {
            Accept: 'appliation/json',
            'Content-Type': 'application/json',
        },
        method: 'DELETE',
        ...options,
    });
}