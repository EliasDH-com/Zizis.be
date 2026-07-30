/**
    * @author EliasDH Team
    * @see https://eliasdh.com
    * @since 01/01/2025
**/

import { Component, OnInit, inject, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT, CommonModule } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../services/language.service';
import { SeoService } from '../services/seo.service';
import { SharedModule } from '../shared/shared.module';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css'],
    imports: [TranslatePipe, CommonModule, RouterModule, SharedModule],
    standalone: true
})

export class IndexComponent implements OnInit {
    private seoService = inject(SeoService);

    dropdownOpen: boolean = false;
    currentLanguage: string = 'nl';
    currentTheme: string = 'light';
    currentYear: number;
    isLoading: boolean = true;

    settingsConfig = {
        languages: [
            { code: 'nl', name: 'Nederlands' },
            { code: 'fr', name: 'Français' },
            { code: 'en', name: 'English' },
            { code: 'de', name: 'Deutsch' }
        ]
    };

    galleryPhotos: string[] = [
        'assets/media/images/gallery/photo1.png',
        'assets/media/images/gallery/photo2.png',
        'assets/media/images/gallery/photo3.png',
        'assets/media/images/gallery/photo4.png',
        'assets/media/images/gallery/photo5.png',
        'assets/media/images/gallery/photo6.png'
    ];

    constructor(
        private languageService: LanguageService,
        private translate: TranslateService,
        @Inject(PLATFORM_ID) private platformId: Object,
        @Inject(DOCUMENT) private document: Document
    ) {
        this.currentYear = new Date().getFullYear();
    }

    ngOnInit(): void {
        this.languageService.checkAndSetLanguage();
        this.translate.setDefaultLang('nl');
        this.setTheme(this.currentTheme);

        this.seoService.updateMeta({
            title: 'Zizis',
            description: 'Hairfashion Zizis - Your trusted hairdresser in the heart of Boechout. Professional hair products and hairdressing expertise since 2025.',
            canonical: 'https://zizis.be/',
            keywords: 'hairdresser, Boechout, hair products, hairfashion, Zizis'
        });

        setTimeout(() => this.isLoading = false, 1000);
    }

    changeLanguage(languageCode: string) {
        this.translate.use(languageCode);
        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('language', languageCode);
        }
        this.currentLanguage = languageCode;
        this.dropdownOpen = false;
    }

    toggleDropdown() {
        this.dropdownOpen = !this.dropdownOpen;
    }

    isToday(day: string): boolean {
        const today = new Date();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return day === days[today.getDay()];
    }

    setTheme(theme: string) {
        this.currentTheme = theme;
        if (isPlatformBrowser(this.platformId)) {
            this.document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        }
    }

    toggleTheme() {
        this.setTheme(this.currentTheme === 'light' ? 'dark' : 'light');
    }

    scrollToSection(section: string) {
        if (isPlatformBrowser(this.platformId)) {
            this.document.querySelector(`.${section}`)?.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
