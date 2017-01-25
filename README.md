# kgd-ng2-widgets
Common widgets, that I may need for my projects. I Upload because maybe other user finds them userful!.  
## Installation
``` npm install -s kgd-ng2-widgets ```

## Widgets

### Countdown
__Usage:__ Import __KgdNg2WidgetsModule__ in your module for example  
```
import { KgdNg2WidgetsModule } from 'kgd-ng2-widgets';
@NgModule({
    declarations: ...
    imports: [ ..., KgdNg2WidgetsModule ]
    providers: ...
})
export class AppModule { }
```
Then you can use it in any of your templates like: 
```
<kgd-countdown [targetDate]="myTerminationDate"></kgd-countdown>
``` 
where __myTerminationDate__ is a javascript Date object representing when will the countdown end.  
__Notice:__ The countdown uses the __current timestamp__ as start point.

If you want you can bind to the __done__ event, using onDone
```
<kgd-countdown [targetDate]="myTerminationDate" (onDone)="doSomething()"></kgd-countdown>
```
## Pull request wanted!
Could you find out how to use separate template and styles file, please tell me how!, thanks in advance!

## Changelog

### 1.2.1
Configure the module to be like recent versions of Angular want it
NOTICE: Had to include the style and the template inside the ts file, because looks like imposible to compile it and separately include in the module importing this lib
### 1.2.0
Allow binding to done event
### 1.1.0
Allow importing the module, instead of having to import the component and use in the declarations.
Useful in the future when may be a lot more of widgets!
### 1.0.1
Fix the readme of npm