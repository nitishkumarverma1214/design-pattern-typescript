import { Comment } from "./Comment";
import { CreateBlog } from "./CreateBlog";
import { ShareBlog } from "./ShareBlog";

export class Admin implements Comment, CreateBlog, ShareBlog{
    makeComment(): void {
        console.log('make comment')
    }
    createBlog(): void {
        console.log('Create new blog post')
    }
    shareBlog(): void {
        console.log('share blog')
    }

}