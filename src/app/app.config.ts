import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { AccountBookFill, AlertFill, AlertOutline, WarningFill, EditFill, FilePdfTwoTone, PlusOutline, FilePdfOutline, DeleteFill,
         SyncOutline, FileAddTwoTone, FileAddOutline, AppstoreFill, FolderFill, FolderOpenFill, EnvironmentOutline, MailOutline,
         PhoneOutline, WhatsAppOutline } from '@ant-design/icons-angular/icons';

import { routes } from './app.routes';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const icons: IconDefinition[] = [ AccountBookFill, AlertOutline, AlertFill,
                                  WarningFill, EditFill, FilePdfTwoTone,
                                  PlusOutline, DeleteFill, SyncOutline, FileAddTwoTone,
                                  FilePdfOutline, FileAddOutline, AppstoreFill,
                                  FolderFill, FolderOpenFill, EnvironmentOutline,
                                  MailOutline, PhoneOutline, WhatsAppOutline
                                ];

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    importProvidersFrom(NzIconModule.forRoot(icons)),
    provideRouter(routes, withInMemoryScrolling({scrollPositionRestoration: 'enabled'})),
    provideHttpClient(),
    provideAnimationsAsync()
  ]
};
