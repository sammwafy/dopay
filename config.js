const dev = process.env.NODE_ENV !== 'production';
const { URL } = process.env;
export const server = dev ? 'http://localhost:3000' : URL;