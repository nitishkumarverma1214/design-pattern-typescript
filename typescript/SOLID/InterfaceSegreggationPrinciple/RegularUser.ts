import { Comment } from "./Comment";
import { ShareBlog } from "./ShareBlog";

export class RegularUser implements Comment, ShareBlog{
    makeComment(): void {
        console.log('make comment')
    }
    shareBlog(): void {
        console.log('share blog')
    }

}