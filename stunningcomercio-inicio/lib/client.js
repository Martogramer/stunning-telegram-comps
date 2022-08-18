import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client =sanityClient({
    projectId: 'r76kx3qa',  
    apiVersion: 'production',
    useCdn: true,
    token: process.env.TOKEN_SANITY,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

