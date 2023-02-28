import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent {

  //{} as Post sets up default
  @Input() DisplayPosts:Post = {} as Post;
  @Output() deleted = new EventEmitter<Post>()
  
  upvote():void{
    this.DisplayPosts.thoughtfuls++;
  }

  deletePost():void{
    this.deleted.emit(this.DisplayPosts);
  }
  
}
