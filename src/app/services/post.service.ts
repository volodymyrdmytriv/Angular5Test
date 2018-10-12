import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {

  api: string = "https://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(`${this.api}/posts`);
  }

  add(post) {
    return this.http.post(`${this.api}/posts`, JSON.stringify(post));
  }

  remove(post) {
    return this.http.delete(`${this.api}/posts/${post.id}`);
  }

  update(post) {
    return this.http.patch(`${this.api}/posts/${post.id}`, JSON.stringify(post));
  }
}