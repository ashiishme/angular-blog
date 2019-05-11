import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogApiService } from './blog-api.service';

import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { SingleComponent } from './blog/single/single.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
	{path: '', children: [
		{path: '', component: HomeComponent},
	    {path: '', component: HeaderComponent, outlet: 'header'},
	    {path: 'blog', component: BlogComponent},
	    {path: 'blog/:postname', component: SingleComponent},
	    {path: 'contact', component: ContactComponent},
	]},

	{path: '**', redirectTo: ''}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
