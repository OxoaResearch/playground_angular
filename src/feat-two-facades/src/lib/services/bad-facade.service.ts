import { Injectable } from '@angular/core';
@Injectable()
export class BadSandboxFacade {
//   // BAD: Sandbox facade can not hold state, only pass it through
//   public readonly user$ = new BehaviorSubject<User>(null);
//   // BAD: Sandbox facade can not contain logic, not even map functionality
//   public readonly countries$ = this.masterDataState.getCountries().pipe(
//     map(resp => resp.elements)
//   );
//   // BAD: Custom selectors here is also logic
//   public readonly chatboxOpen$ this.store.select(() => createSelector(...)));
//   // BAD: constructing objects is also logic, only pass things through
//   public addUser(firstName: string, lastName: string): Observable<User>{
//     return this.userService.add({firstName, lastName});
//   }
//   // BAD: Sandbox facade can not contain logic, also no navigation logic
//   public addCourse(course: Course): Observable<Course> {
//     return this.courseService.add(course).pipe(
//       tap(() => this.router.navigate('../'))
//     )
//   }
//   // BAD: Sandbox facade can not contain logic, also no state management logic
//   public addBook(book: Book): void {
//     this.bookService.add(book).subscribe(book => this.store.dispath(...))
//   }
//   // BAD: Sandbox facade can not contain specific orchestration logic
//   // this would be redundant and the urge of reusing would be too big
//   public addLearningSuite(learningSuite: LearningSuite)
//       : Observable<{book: Book, course: Course}> {
//     return combineLatest({
//       book: this.bookService.add(learningSuite.book),
//       course: this.courseService.add(learningSuite.course)
//     })
//   }
}
