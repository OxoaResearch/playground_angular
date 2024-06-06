import { Component, ViewEncapsulation } from "@angular/core";
import {BadSandboxFacade} from '../../services/bad-facade.service';

@Component({
  selector: "smart-c-bad-facade",
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./smart-c-bad-facade.container.html"
})
export class SmartCBadFacadeContainer {


  constructor(private readonly facade: BadSandboxFacade) {}
  // public save(): void {
  //   this.nameService.save(this.name).then(() => {
  //     this.router.navigate([".."]);
  //   });
  // }
}
