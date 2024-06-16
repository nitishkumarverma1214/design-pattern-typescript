import { BlogPost } from "./BlogPost";

export class RenderBlogPost {

    displayHTML(post: BlogPost){
        return `<h1>${post.title}</h1><p>${post.content}</p>`;
    }
}