import { Component, OnInit } from '@angular/core';
import { AppError } from 'src/app/common/app-error';
import { BadInput } from 'src/app/common/bad-input';
import { NotFoundError } from 'src/app/common/not-found-error';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.postService.getAll()
      .subscribe(response => {
        this.posts = response;
      });
  }

  createPost(input: HTMLInputElement) {
    this.postService.create(input)
      .subscribe(response => {
      },
        (error: AppError) => {
          if (error instanceof BadInput) {
            // this.form.setErrors(error.originalError);
          }
          else
            throw error;
        });
  }

  updatePost(post: any) {
    this.postService.update(post)
      .subscribe(response => {
        console.log(response);
      });
  }

  deletePost(post: any) {
    this.postService.delete(post.id)
      .subscribe(response => {
        console.log(response);
        let indextoD = this.posts.indexOf(post);
        this.posts.splice(indextoD, 1)
      },
        (error: AppError) => {
          if (error instanceof NotFoundError)
            alert('This post has already been deleted');
          else
            throw error;
        });
  }
}
