import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ComponentsModule } from '../../components/components.module';


interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon:'person-circle-outline',
      name: 'Ion-Avatar',
      redirectTo: '/ion-avatar'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Ion-Button',
      redirectTo: '/ion-button'
    },
    {
      icon: 'folder-outline',
      name: 'Input',
      redirectTo: '/input'
    }

  ];
  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
  }
  mostrarMenu() {
  this.menuCtrl.open('first');
  }
  
}

