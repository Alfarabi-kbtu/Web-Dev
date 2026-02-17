/*
Components in Angular
Components are the foundational building blocks for any Angular application. Each component has three parts:

TypeScript class
HTML template
CSS styles
*/
/*
import {Component} from '@angular/core';

@Component({
  selector: 'app-root', This is the HTML tag name of the componen
  template: ` Hello fghsrtrh `, This is an inline template, You can write normal HTML here:
  styles: `These are inline styles, :host refers to the component’s own element (<app-root>
    :host {
      color: blue;
    }
  `,
})
export class App {} this class holds the logic of the component
*/
/*Angular evaluates the contents of the {{ }} and renders the output in the template.*/

/*
Adding reference to a user
template: `<app-user />`, imports: [User]
Adding more markup
template: `
<section><app-user /></section>
`,
*/

/*
Control flow @if
@Component({
  ...
  template: `
    @if (isLoggedIn) {
      <p>Welcome back, Friend!</p>
    }
  `,
})
export class App {
  isLoggedIn = true;
}

example
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    @if (isServerRunning) {
      <span>Yes, the server is running</span>
    } @else {
      <span>No, the server is not running</span>
    }
  `,
})
export class App {
  isServerRunning = true;
}

*/

/*
Control flow @for
Here's an example of how to use the @for syntax in a component:
@Component({
  ...
  template: `
    @for (os of operatingSystems; track os.id) {
      {{ os.name }}
    }
  `,
})
export class App {
  operatingSystems = [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'MacOS'}, {id: 'linux', name: 'Linux'}];
}

import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    @for (user of users; track user.id) {
      <p>{{ user.name }}</p>
    }
  `,
})
export class App {
  users = [
    {id: 0, name: 'Sarah'},
    {id: 1, name: 'Amy'},
    {id: 2, name: 'Rachel'},
    {id: 3, name: 'Jessica'},
    {id: 4, name: 'Poornima'},
  ];
}
*/

/*
Property Binding in Angular
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.css'],
  template: ` <div [contentEditable]="isEditable"></div> `,
})
export class App {
  isEditable = true;
}
component->
export class AppComponent {
  imageUrl = 'https://example.com/photo.png';
}
template->
<img [src]="imageUrl">

*/

/*
Event handling
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <section (mouseover)="showSecretMessage()">
      There's a secret message for you, hover to reveal:
      {{ message }}
    </section>
  `,
})
export class App {
  message = '';

  showSecretMessage() {
    this.message = 'Way to go 🚀';
  }
}
General syntax:
(eventName)="statement"

binding->
<section (mouseover)="showSecretMessage()">
method->
showSecretMessage() {
  this.message = 'Way to go 🚀';
}

*/

/*
Inputs
To create an input property, add the input() function to initialize a property of a component class:
class User {
  occupation = input<string>();
}

import {Component, input} from '@angular/core';

@Component({
  selector: 'app-user',
  template: ` <p>The user's name is {{ name() }}</p> `,
})
export class User {
  readonly name = input<string>();
}

*/

/*
Output
@Component({...})
class Child {
  incrementCountEvent = output<number>();
}
class Child {
  ...
  onClick() {
    this.count++;
    this.incrementCountEvent.emit(this.count);
  }
}
addItem() {
  this.addItemEvent.emit('🐢');
}

import {Component, output} from '@angular/core';

@Component({
  selector: 'app-child',
  styles: `
    .btn {
      padding: 5px;
    }
  `,
  template: ` <button class="btn" (click)="addItem()">Add Item</button> `,
})
export class Child {
  readonly addItemEvent = output<string>();

  addItem() {
    this.addItemEvent.emit('🐢');
  }
}
*/

/*
Forms overview
input field->
<label for="framework">
  Favorite Framework:
  <input id="framework" type="text" />
</label>

import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
@Component({
...
imports: [FormsModule],
})
export class User {}

Add binding->
<label for="framework">
  Favorite Framework:
  <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
</label>

import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>{{ username }}'s favorite framework: {{ favoriteFramework }}</p>
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>
  `,
  imports: [FormsModule],
})
export class User {
  favoriteFramework = '';
  username = 'youngTech';
}
*/

/*
Form control value
Show the value of the input field in the template
@Component({
  selector: 'app-user',
  template: `
    ...
    <p>Framework: {{ favoriteFramework }}</p>
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>
  `,
})
export class User {
  favoriteFramework = '';
}
...
@Component({
  selector: 'app-user',
  template: `
    ...
    <button (click)="showFramework()">Show Framework</button>
  `,
  ...
})
export class User {
  favoriteFramework = '';
  ...
  showFramework() {
    alert(this.favoriteFramework);
  }
}

import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>Framework: {{ favoriteFramework }}</p>
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>
    <button (click)="showFramework()">Show Framework</button>
  `,
  imports: [FormsModule],
})
export class User {
  favoriteFramework = '';
  username = 'youngTech';

  showFramework() {
    alert(this.favoriteFramework);
  }
}
*/

/*
Import ReactiveForms module
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  template: `
    <form>
      <label>Name
        <input type="text" />
      </label>
      <label>Email
        <input type="email" />
      </label>
      <button type="submit">Submit</button>
    </form>
  `,
  imports: [ReactiveFormsModule],
})

Create the FormGroup object with FormControls
import {ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
...
export class App {
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });
}

Link the FormGroup and FormControls to the form
<form [formGroup]="profileForm">
  <label>
    Name
    <input type="text" formControlName="name" />
  </label>
  <label>
    Email
    <input type="email" formControlName="email" />
  </label>
  <button type="submit">Submit</button>
</form>

Handle update to the form
...
<h2>Profile Form</h2>
<p>Name: {{ profileForm.value.name }}</p>
<p>Email: {{ profileForm.value.email }}</p>

Access FormGroup values
handleSubmit() {
  alert(
    this.profileForm.value.name + ' | ' + this.profileForm.value.email
  );
}

Add ngSubmit to the form
<form [formGroup]="profileForm" (ngSubmit)="handleSubmit()"></form>
*/

/*
Validating forms
Import Validators
import {ReactiveFormsModule, Validators} from '@angular/forms';
@Component({...})
export class App {}

Add validation to form
profileForm = new FormGroup({
  name: new FormControl('', Validators.required),
  email: new FormControl('', [Validators.required, Validators.email]),
});

Check form validation in template
<button type="submit" [disabled]="!profileForm.valid">Submit</button>
*/

/*
Pipe
 pipe is a TypeScript class with a @Pipe decorator. Here's an example:
 import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name: 'star',
})
export class StarPipe implements PipeTransform {
  transform(value: string): string {
    return `⭐️ ${value} ⭐️`;
  }
}

Create the ReversePipe
@Pipe({
  name: 'reverse'
})

Implement the transform function
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    let reverse = '';
    for (let i = value.length - 1; i >= 0; i--) {
      reverse += value[i];
    }
    return reverse;
  }
}

Use the ReversePipe in the template
@Component({
  ...
  template: `Reverse Machine: {{ word | reverse }}`
  imports: [ReversePipe]
})

import {Component} from '@angular/core';
import {ReversePipe} from './reverse.pipe';

@Component({
  selector: 'app-root',
  template: ` Reverse Machine: {{ word | reverse }} `,
  imports: [ReversePipe],
})
export class App {
  word = 'You are a champion';
}
*/