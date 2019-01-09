import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { StoreModule } from '@ngrx/store';
import {
  tasksReducer,
  initialState as tasksInitialState
} from './+state/tasks.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    NxModule.forRoot(),
    StoreModule.forRoot(
      { tasks: tasksReducer },
      {
        initialState: { tasks: tasksInitialState },
        metaReducers: !environment.production ? [storeFreeze] : []
      }
    ),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
