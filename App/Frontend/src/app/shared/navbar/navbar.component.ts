/**
    * @author EliasDH Team
    * @see https://eliasdh.com
    * @since 01/01/2025
**/

import { Component, ElementRef, HostListener, inject, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
    private translate = inject(TranslateService);
    dropdownOpen: boolean = false;
    currentLanguage: string = 'nl';

    constructor(
        private elementRef: ElementRef,
        @Inject(PLATFORM_ID) private platformId: Object
    ) {}

    @HostListener('document:click', ['$event'])
    onClickOutside(event: MouseEvent): void {
        if (!this.elementRef.nativeElement.contains(event.target)) this.dropdownOpen = false;
    }

    settingsConfig = {
        languages: [
            { code: 'nl', name: 'Nederlands' },
            { code: 'fr', name: 'Français' },
            { code: 'en', name: 'English' },
            { code: 'de', name: 'Deutsch' }
        ]
    };

    toggleDropdown() {
        this.dropdownOpen = !this.dropdownOpen;
    }

    changeLanguage(languageCode: string) {
        this.translate.use(languageCode);
        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('language', languageCode);
        }
        this.currentLanguage = languageCode;
        this.dropdownOpen = false;
    }
}