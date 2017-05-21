import {Component} from 'angular2/core';

import {NgFor} from 'angular2/common';
import {seccomp} from './second';


@Component({
   // directives:[NgFor],
    selector: 'my-app',
    template: `<h1>Dear MPL students welcome in the world of Angular 2.0</h1>
    {{id}} {{name}}    
    
   <h1>{{title}}</h1>
    <h2>My favorite course is: {{myfav}}</h2>
    <p>courses:</p>
    <ul>
    <!--foreach(var i in arrname) -->
      <li *ngFor="#course of courses">
        {{ course }}
      </li>
    </ul>
   <p *ngIf="myfav.length >1">student is genius!</p>

<button (click)="onClickMe()">Click me!</button>
    {{Message}}
    
    
     <input #box (keyup)="values=box.value">
    <p [style.background.color]="'yellow'">{{values}}</p>
    <!-- key filteration -->
    
   <input #ent (keyup.enter)="val=ent.value">
    <p>{{val}}</p> 
    <!--   new program   -->
    enter course <input #newcourse
      (keyup.enter)="addcourse(newcourse.value)"
        />

    <button (click)=addcourse(newcourse.value)>Add</button>

    <ul><li *ngFor="#course of courses">{{course}}</li></ul>
<sec></sec>
     `  ,
     
     directives:[seccomp]
      //interpolation
    
    
})
export class AppComponent { 
    
    public id  = 2;
    public name = 'khadija';
    public contact = {name:"john" ,id:11 , lastname:"papa" , phone:"92832938282" , email : "www.sdfh.com" }
    public showdata = false;
    public onselect(){
        this.showdata = true;
    }
     title = 'course list';
  courses = ['PF', 'java', 'c#', 'MPL'];
  myfav = this.courses[3,1];
   Message = '';

  onClickMe(){
    this.Message ='button presses!';
  }
    //key implement
    values='';
    val = '';
    
  addcourse(newcourse:string) {
    if (newcourse) {
      this.courses.push(newcourse);
    }
  }
    
}