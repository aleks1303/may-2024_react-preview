const baseUrl = 'https://jsonplaceholder.typicode.com';

const urls = {
    users:{
        allusers:'/users',
        byId:(id:string): string => `${urls.users.allusers}/${id}`,
        },
    posts:{
        allposts:'/posts',
        byId:(id:string): string => `${urls.posts.allposts}/${id}`,
    }
}
export {
    baseUrl,
    urls
}