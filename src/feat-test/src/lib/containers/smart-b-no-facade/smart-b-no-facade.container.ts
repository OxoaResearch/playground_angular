import { Component, ViewEncapsulation } from "@angular/core";
@Component({
  selector: "smart-b-no-facade",
  encapsulation: ViewEncapsulation.None,
  templateUrl: "./smart-b-no-facade.container.html"
})
export class SmartBNoFacadeContainer {
  isCollapsed$ = this.sandbox.isCollapsed$;


  public save(): void {
    this.nameService.save(this.name).then(() => {
      this.router.navigate([".."]);
    });
  }
}
