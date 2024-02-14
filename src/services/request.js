function parseJSON(data) {
    const formData = new FormData();
    for (const key in data) {
        formData.append(key, data[key]);
    }
    return formData;
}

async function request(url, data = null, method = "GET", type = "FORM_DATA") {
    const options = {
        method,
        headers: {},
    };

    if (localStorage.getItem("token")) {
        options.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
    }

    if (type === "JSON") {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
    } else if (data) {
        options.body = parseJSON(data);
    }

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            const errorResponse = await response.text();
            throw new Error(`HTTP error! Status: ${response.status}, Body: ${errorResponse}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Hata oluştu:", error);
        throw error;
    }
}

export const get = (url) => request(url);
export const post = (url, data) => request(url, data, "POST");
export const postJSON = (url, data) => request(url, data, "POST", "JSON");
export const put = (url, data) => request(url, data, "PUT");
export const putJSON = (url, data) => request(url, data, "PUT", "JSON");
export const del = (url) => request(url, null, "DELETE");
export const delJSON = (url, data) => request(url, data, "DELETE", "JSON");
export const patch = (url, data) => request(url, data, "PATCH");
export const patchJSON = (url, data) => request(url, data, "PATCH", "JSON");
export const head = (url) => request(url, null, "HEAD");
export const headJSON = (url, data) => request(url, data, "HEAD", "JSON");
