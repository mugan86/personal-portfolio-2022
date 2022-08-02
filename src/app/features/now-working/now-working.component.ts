import { Component } from '@angular/core';

@Component({
  selector: 'app-now-working',
  templateUrl: './now-working.component.html',
  styleUrls: ['./now-working.component.css']
})
export class NowWorkingComponent {
  projects = [
    {
      description: 'Proyecto que nos genera una tarjeta de contacto a partir de introducir unos datos y que esa tarjeta genera un código QR y da opción a copiar todo el HTML para pegarlo en cualquier firma de email',
      title: 'Generador de tarjetas de contacto con QR + VCard',
      logo: 'assets/img/now-working/qr-vcard.webp',
      url: 'https://qr-with-vcard-app.stackblitz.io'
    }
  ];
  learn= [

  ]
}
