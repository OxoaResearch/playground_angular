import { Component, ViewEncapsulation } from "@angular/core";
import {GoodSandboxFacade} from '../../services/facade.service';
import { SomeUtilService } from "../../services/some-util.service";
@Component({
  selector: "smart-a",
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./smart-a.container.html"
})
export class SmartAContainer {
  isCollapsed$ = this.someUtilService.isCollapsed$;

  constructor(private readonly someUtilService: SomeUtilService, private readonly facade: GoodSandboxFacade) {}

  // public save(): void {
  //   this.nameService.save(this.name).then(() => {
  //     this.router.navigate([".."]);
  //   });
  // }
}
