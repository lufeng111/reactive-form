import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  /*
username类型是FormControl ，FormControl 的构造函数会接收一个参数aaa ，这个参数用来指定这个FormControl 的初始值，
这样写的话username: FormControl 的FormControl和页面上的input连接在一起的时候，那个input的初始值就是aaa,
比如template-form.component中的<input ngModel name="mobile" type="number">，ngModel在这个input上，就会被input创建对应的FormControl
*/
  // username: FormControl = new FormControl("aaa");

  // formModel类型是FormGroup,FormGroup的构造函数需要一个对象，
  formModel: FormGroup = new FormGroup({
    username: new FormControl("aaa"),

    // 2: 起始日期范围
    dateRange: new FormGroup({

    from: new FormControl(),
    to: new FormControl(),
    }),
     /*
     FormArray中的FormControl没有名字，只有顺序号，一般情况下会与ngFor指令一起来使用formArrayName指令，

     */
    emails: new FormArray([
      new FormControl("a@a.com"),
      new FormControl("b@b.com"),
    ])

  })

  // FormArray与FormGroup不同，他是没有相关的T(to,form)的，只能通过序号来访问FormArray 中的元素
  // emails: FormArray = new FormArray([
  //   //
  //   new FormControl("a@a.com"),
  //   new FormControl("b@b.com"),
  // ])

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    // 1: 现在打印的是空的，是因为还没有在formModel中加任何属性，
    console.log(this.formModel.value);
  }

  addEmail(){
    /*
    1：首先拿到当前的FormArray，
    2: this.formModel.get('emails')拿到的是FormArray 类型的对象，需要转成FormArray类型as FormArray
    3：往emails里push一个FormControl 就可以了
    */
   let emails = this.formModel.get('emails') as FormArray;
   emails.push(new FormControl());


  }
}
