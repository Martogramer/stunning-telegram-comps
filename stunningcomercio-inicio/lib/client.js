import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client =sanityClient({
    projectId: '8i6c3j58',
    dataset: 'production', 
    apiVersion: "2022-08-11",
    useCdn: true,
    token: process.env.TOKEN_SANITY,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

