import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies:string[];
  hello: any;
  posts: Post[];
  isEdit: boolean = false;

  constructor(private dataService:DataService) { 
    console.log('constructor ran...')

    this.name = 'thiago colen';
    this.age = 40;
    this.email = 'asdasd@asdasd.com'
    this.address = {
      street: '50 Main st',
      city: 'Boston',
      state: 'MA'
    }
    this.hobbies = [
      'sleep',
      'sleep more'
    ];
    this.hello = 'Opa'

    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  ngOnInit() {
    console.log('ngOnInit ran...')
  }

  onClick(){
    this.name='asdasdas';
    this.hobbies.push('opa, new hobbie');
  }

  addHobby(hobby) {
    console.log(hobby)
    this.hobbies.unshift(hobby)
    return false
  }

  deleteHobby(hobby) {
    console.log(hobby)
    for(let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1)
      }
    }     
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}


interface Address {
  street: string,
  city: string,
  state: string
}

interface Post{
  id: number,
  title: string,
  body: string,
  userId: number
}