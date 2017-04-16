
# TODO 

15.04.2017
https://movie-ranking.herokuapp.com/

- changed my learning technique, trying to comment everything i do, so i can be able to visualize data placement. (or at least try)

- modal (DEAD)
I guess i'm not able to do this // I made it with ng2-bootstrap using ViewChild, ModalDirective and ModalModule. Sadly my modal didn't have bootstrap style.
It's something with ng2-bootstrap working with bootstrap 3 and is not used to bootstrap4? Maybe gonna come back later with more knownledge. Removing modal -> doing input instead.


- rating :id
Managed to get ratings for every bar.
Problem is averageRating. Tried to maybe map my averageRating to IMovie array but i think it's bad idea.
Gonna try to push data from movie-detail.component to movie-list.component. (DEAD)
Average rating inside movie-detail.component,


- input - 
poor styling
input works but doesn't give me IRating data type.

- searchbar
- asceding/descending
- vote :id
- http instead of hardcoded db


# MovieRating

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
