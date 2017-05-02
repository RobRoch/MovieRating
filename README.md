Used:
- npm : 4.0.5
- node: 6.9.2

To run this : NPM INSTALL -> NG SERVE

# TODO 

28.04.2017
https://movie-ranking.herokuapp.com/

# In v3
- try to connect to my own mongodb and publish it.

# In v2:
- change input to something nicer, maybe i'll get this modal working and some star choosing rating.
- solve problem with input formValues (hardwritten other numbers than 1-5 make error, but after choosing 1-5 it's not pushing 
values to db - stackoverlow this maybe)
- add movies (if possible with those dbs? I guess it can be blocked)


# Already done in v2:
- try to get rid of performance issue,
Used BehaviorSubject. It's much faster now. Cool.

- hardcoded maxValue - use maxValue of those 5 ratings.
Used math operator in html to get maxValue. It's working fine.
Still i don't like that much logic in html file, but got some typing errors for now.


# Already done in v1:
- changed my learning technique, trying to comment everything i do, so i can be able to visualize data placement. (or at least try)

- modal (DEAD)
I guess i'm not able to do this // I made it with ng2-bootstrap using ViewChild, ModalDirective and ModalModule. Sadly my modal didn't have bootstrap style.
It's something with ng2-bootstrap working with bootstrap 3 and is not used to bootstrap4? Maybe gonna come back later with more knownledge. Removing modal -> doing input instead.

- rating :id
Big issue! Downloading all rating 5 times and then filtering to get values.
After input again! Gonna try BehaviorSubject.

- input vote- 
Poor styling with number type.
Maybe change it later.

- searchbar
It's working fine, choose to use search button with it.

- asceding/descending
It's working. Works like this (normal -> asc -> desc -> asc -> desc -> etc.)

- http instead of hardcoded db
After few days it's working. Observables made this hard for me ;)

- error input vote
Only when null i get error. When other numbers than 1-5, it's doing nothing.


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
