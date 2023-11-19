import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './@features/chat/pages/chat/chat.component';

const routes: Routes = [
  {path : "public" , loadChildren : () => import('./@public/public.module').then((m)=> m.PublicModule)},
  { path: 'chat',  component: ChatComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MatchaRoutingModule { }
