function stringToParams(key, value) {
    const searchParams = new URLSearchParams();
    searchParams.set(key, value);
    const params = searchParams.toString();
    return params;
}

export default stringToParams;