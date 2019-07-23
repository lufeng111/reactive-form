# ResponsiveForm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## 响应式表单
<!-- 
创建响应式表单的步骤：
1：创建一个数据模型： 是指保存表单数据的数据结构，简称模型，它由定义在angular的Forms模块中的三个类FormControl, FormGroup, FormArray组成，
FormControl：
1：它是构成表单的基本单位，通常情况下它代表一个input元素，但是也可以代表一个更复杂的UI组件，比如日历，下拉选择块，FormControl保存着与其关联的html元素当前的值以及元素的校验状态，还有元素是否被修改过等信息，

FormGroup：既可以代表表单的一部分，也可以代表整个表单，是多个FormControl的集合，FormGroup将多个FormControl的值和状态聚集在一起，如果一个FormControl是无效的，那么整个FormGroup就是无效的，在管理表单中多个相关联的字段时，FormGroup是很方便的，比如一个日期范围有两个input字段一个起始日期一个截止日期，这两个input就可以被放到一个FormGroup里面，当这两个字段中的任何一个值无效时，都会显示一个错误信息，

FormArray：和FormGroup 是类似的，但是他有一个额外的长度属性，一般来说FormGroup 用来代表整个表单或者表单字段的一个固定的子集，比如前面看到reactive-form.component 中的 form和to这两个字段的固定的一个子集，FormArray用来代表可以增长的字段集合，举个例子表单上有email的框，一个用户可能有多个email，这时候就可以用FormArray，让用户输入任意数量的email地址，

2：使用一些指令将模板中的html元素连接到数据模型上
 -->
## 响应式表单的类和指令, 这些指令和类全部都来自于ReactiveFormsModule模块
<!-- 
三个类：FormGroup， FormArray， FormControl
三个类对应的指令：
FormGroup： formGroup, formGroupName
FormArray:  formArrayName
FormControl: formControl，formControlName，

formGroup和formControl 是属性绑定时使用的指令，FormArray不能通过属性绑定的方式来绑定的，
formGroupName，formGroupName，formControlName是可以使用属性的名字来连接数据模型和dom元素的
响应式表单是不可引用的（不可以声明模板本地变量来引用这个指令的实例），

formArrayName: 和formControlName 一样，必须用在formGroup范围内，

FormControl: 不能用在FormGroup 的内部，只能用在外部，
注意：formGroup，formControl 都需要属性绑定语法 [formGroup]="formModel"， [formControl]="username"

 -->
