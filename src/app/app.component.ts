import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { IonApp, IonBadge, IonButton, IonCard, IonCardContent, IonChip, IonContent, IonIcon, IonLabel } from '@ionic/angular';
import { arrowDown, arrowForward, arrowUp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, IonApp, IonBadge, IonButton, IonCard, IonCardContent, IonChip, IonContent, IonIcon, IonLabel],
  templateUrl: './app.component.html'
})
export class AppComponent {
  readonly arrowDown = arrowDown;
  readonly arrowForward = arrowForward;
  readonly arrowUp = arrowUp;

  readonly skills = [
    { name: 'C / C++', group: 'Languages' }, { name: 'QNX RTOS', group: 'Platforms' },
    { name: 'TI-RTOS', group: 'Platforms' }, { name: 'Linux', group: 'Platforms' },
    { name: 'Firmware & drivers', group: 'Engineering' }, { name: 'System design', group: 'Engineering' },
    { name: 'CAN / CANoe', group: 'Automotive' }, { name: 'Vector tools', group: 'Automotive' },
    { name: 'Pre / post-silicon validation', group: 'Validation' }, { name: 'Debugging & diagnostics', group: 'Validation' },
    { name: 'BLE · ZigBee · Wi-Fi', group: 'Connectivity' }, { name: 'I²C · UART · SPI', group: 'Connectivity' }
  ];

  readonly roles = [
    {
      period: '07 / 2017 — PRESENT', employer: 'L&T Technology Services', place: 'Södertälje, Sweden',
      title: 'Senior Software Developer · Consultant at Scania CV AB', tag: 'AUTOMOTIVE · QNX',
      points: [
        'Develops C++ DDU applications in a QNX RTOS environment, translating vehicle requirements into reliable software features.',
        'Supports field testing, vehicle diagnostics, CAN validation and root-cause analysis with CANoe and Vector tools.',
        'Contributes to vehicle integration, production validation, early defect resolution and milestone-based software releases.'
      ]
    },
    {
      period: 'PROJECT EXPERIENCE · WITHIN L&T TENURE', employer: 'Intel Corporation', place: 'Bengaluru, India · Intel India & US',
      title: 'Project Lead · Server Platforms', tag: 'PLATFORM · VALIDATION',
      points: [
        'Led requirements, technical design, framework development, validation and release delivery for server platform work.',
        'Developed C-based server and QAT 2.0 frameworks for system stability, compression and cryptography workloads.',
        'Built automation, stress and validation frameworks across virtual machines for pre- and post-silicon stages; coordinated planning, debugging and risk mitigation.'
      ]
    },
    {
      period: '12 / 2015 — 07 / 2017', employer: 'Unizen Technologies Pvt Ltd', place: 'India',
      title: 'Senior Software Engineer', tag: 'IOT · TI-RTOS',
      points: [
        'Ported non-OS software to TI-RTOS and developed firmware, drivers and sensor applications for smart home and smart city projects.',
        'Worked with TI ZigBee, Wi-Fi SimpleLink, Arduino and CC3200 platforms; supported proof-of-concept demos and mobile integration.'
      ]
    },
    {
      period: '03 / 2013 — 12 / 2015', employer: 'Technical Innovations N Solutions', place: 'India',
      title: 'Software Engineer', tag: 'EMBEDDED · CONNECTIVITY',
      points: [
        'Contributed to hybrid inverter, health equipment and rail safety projects across embedded development and customer delivery.',
        'Developed BLE, UART, RTC, ADC, SIM900, FTP communication and battery-monitoring applications; supported testing, integration and deployment.'
      ]
    }
  ];

  readonly mail = 'tsharishengg@gmail.com';
}
