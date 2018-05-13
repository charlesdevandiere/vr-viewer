import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from './translate.service';

@Pipe({ name: 'translate' })
export class TranslatePipe implements PipeTransform {
    constructor(private translateService: TranslateService) { }
    transform(key: string, args: any): string {
        return this.translateService.getTranslation(key, args);
    }
}
