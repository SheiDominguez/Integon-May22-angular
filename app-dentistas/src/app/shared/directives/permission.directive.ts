import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appPermission]'
})
export class PermissionDirective {

  @Input() appPermission: string[];
  @Input('anotherProperty') propertyName;
  private currentRole = 'agent';

  constructor(private tmplRef: TemplateRef<any>, private vc: ViewContainerRef) { }

  ngOnInit() {
    if (this.appPermission.indexOf(this.currentRole) === -1) {
      this.vc.clear();
    } else {
      this.vc.createEmbeddedView(this.tmplRef);
    }
  }

}