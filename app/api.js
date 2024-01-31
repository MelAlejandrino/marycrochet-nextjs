const cache = {};

export async function fetchProducts(url) {
    const cachedData = cache[url];
    if (cachedData) {
        return cachedData;
    }

    const response = await fetch(url);
    const responseData = await response.json();

    if (response.status !== 200) {
        console.error('Error fetching data:', responseData.error.message);
        return { data: [], nextPage: null };
    } else {
        const data = responseData.data.sort(() => Math.random() - 0.5);
        const nextPage = responseData.paging && responseData.paging.next;

        cache[url] = { data, nextPage };

        return { data, nextPage };
    }
}
