import { Injectable } from '@angular/core';
@Injectable()
export class GoodSandboxFacade {
  // // GOOD: Pass through observables direcly
  // public readonly users$ = this.authService.user$;
  // // GOOD: Pass through observables through initial function
  // public readonly countries$ = this.masterDataState.getCountries();
  // // GOOD: Query parts of state management framework
  // public readonly chatboxOpen$ this.store.select(selectChatbox());
  // // GOOD: Pass through public functions from certain services
  // public addUser(user: User): Observable<User>{
  //   return this.userService.add(user);
  // }
  // // GOOD: Sandbox facade abstracts the
  // // state management framework away
  // public storeUser(user: User): void{
  //   this.store.dispatch(new addUserAction(user))
  // }
}
