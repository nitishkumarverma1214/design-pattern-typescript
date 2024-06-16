export class BlogPost {
    constructor(private _title: string, private _content: string){}

    public get title(){
        return this._title;
    }
    public get content(){
        return this._content;
    }
    createPost(){}
    updatePost(){}
    deletePost(){}
}