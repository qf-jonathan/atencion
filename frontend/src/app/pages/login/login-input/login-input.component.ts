import {AfterContentInit, Component, ContentChild, Input, OnInit} from '@angular/core';
import {InputRefDirective} from "../../../shared/directives/input-ref.directive";

@Component({
  selector: 'app-login-input',
  templateUrl: './login-input.component.html',
  styleUrls: ['./login-input.component.scss']
})
export class LoginInputComponent implements AfterContentInit {
  @Input() label: string;
  @ContentChild(InputRefDirective) input: InputRefDirective;

  ngAfterContentInit(): void {
    if (this.input) {
      this.input.element.nativeElement.placeholder = this.label;
    }
  }
}
