import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { NgModule } from '@angular/core';

import { ComponentAComponent } from './components/component-a/component-a.component';
import { ComponentBComponent } from './components/component-b/component-b.component';

registerLocaleData(localeDe);

@NgModule({
    declarations: [ComponentAComponent, ComponentBComponent],
    bootstrap: [ComponentAComponent]
})
export class AppModule {}
