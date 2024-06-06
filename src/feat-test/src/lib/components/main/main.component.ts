import {Component} from "@angular/core";
@Component({
    selector: "main",
    template: `<ng-content><navbar></navbar><number-picker></number-picker></ng-content>`
})
export class MainComponent {
}