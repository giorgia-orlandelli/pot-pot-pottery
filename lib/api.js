import client from './sanity';

const product = `
    ...,
    'image': image.asset->url
`

const home = `
    ...,
    'image': image.asset->url
`

const products = `
    ...,
   'products': products[]->{name, price, slug, 'image':image.asset->url}
`

export async function getAllProducts() {
    const results = await client
    .fetch(`*[_type == "product"]{${product}}`);

    return results;
}


export async function getArchivePage() {
    const results = await client
    .fetch(`*[_type == "archive"]{${products}}`);

    return results;
}


export async function getHomePage() {
    const results = await client
    .fetch(`*[_type == "home"]{${home}}`);

    return results;
}


export async function getProductByslug(slug) {
    const result = await client
    .fetch(`*[_type == "product" && slug.current == $slug]{${product}}`,
     {slug}).then((res) => res?.[0]);

    return result;
}