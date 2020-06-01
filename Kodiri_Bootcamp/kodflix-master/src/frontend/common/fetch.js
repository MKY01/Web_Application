export default function fetchData(endpoint) {
    return fetch(endpoint).then(response => response.json());
}