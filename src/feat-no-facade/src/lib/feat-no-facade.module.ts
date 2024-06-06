import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {CommonSandbox} from "./common.sandbox";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {AuthenticatedGuard} from "./authenticated.guard";
import {RealTime} from "./realtime";
import { SmartBNoFacadeContainer } from "./containers/smart-b-no-facade/smart-b-no-facade.container";

@NgModule({
    imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterModule, HttpModule],
    declarations: [SmartBNoFacadeContainer],
    exports: [],
    providers: [CommonSandbox, AuthenticatedGuard, RealTime]
})
export class FeatNoFacadeModule {
}