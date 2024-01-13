import { Routes } from '@angular/router';

import { TechnologiesComponent } from './technologies/technologies.component';
import { BooksComponent } from './books/books.component';
import { InvalidComponentComponent } from './invalid-component/invalid-component.component';

export const routes: Routes = [
    {path :'',component : TechnologiesComponent},
    {path : 'technologies' , component : TechnologiesComponent},
    {path : 'books' , component : BooksComponent},
    {path :'**', component: InvalidComponentComponent}
];
