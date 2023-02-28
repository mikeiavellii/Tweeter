import { Component } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent {

  posts:Post[] = [
    {
      title:"You can call me Melvin",
      thought:"This was the the sentence I read on the bathroom stall",
      thoughtfuls:0
    },
    {
      title:"When life gives you lemons",
      thought:"Sequeeze them in life's eyes.",
      thoughtfuls:0
    },
  ];
  

  
  AddPost(newPost:Post):void{
    this.posts.push(newPost);
  }
  display: boolean = false

  OnDelete(p:Post):void{
    let index:number = this.posts.findIndex(post => post == p);
    this.posts.splice(index, 1)
  }

}
