import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {

 
  @Output() submitted = new EventEmitter<Post>
  newPost:Post = {} as Post;
  display: boolean= false;


  // toggleDisplay():void{
  //   let result:Post = {
  //     title: this.newPost.title,
  //     thought: this.newPost.thought
  //   };
  // }

  toggleDisplay():void{
    this.display = !this.display;
  }
  AddPost():void {
    let result: Post= {
      title: this.newPost.title,
      thought: this.newPost.thought,
      thoughtfuls: 0
    };


    this.submitted.emit(result);
  }
}
