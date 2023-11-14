import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonAvatarPageRoutingModule } from './ion-avatar-routing.module';

import { IonAvatarPage } from './ion-avatar.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [IonAvatarPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        IonAvatarPageRoutingModule,
        ComponentsModule
    ]
})
export class IonAvatarPageModule {}
