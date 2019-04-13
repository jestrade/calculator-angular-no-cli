import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HelloComponent} from "./app.component";



@NgModule({
    imports:      [BrowserModule, FormsModule ], 
    bootstrap:    [HelloComponent],  
    declarations: [HelloComponent] 
})

export class AppModule {
    
}
