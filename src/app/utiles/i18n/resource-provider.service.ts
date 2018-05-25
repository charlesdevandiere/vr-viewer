import { Injectable } from '@angular/core';
import { frFR } from './fr-fr';
import { enUS } from './en-us';

@Injectable({
    providedIn: 'root'
})
export class ResourceProvider {
    private readonly local: string = 'fr-FR';

    /** Retourne la ressource pour la langue actuel */
    getLocalisedResource(): any {
        switch (this.local) {
            case 'fr-FR': return frFR;
            case 'enUS': return enUS;
            default: return enUS;
        }
    }

    /** Retourne la ressource pour la langue par défaut */
    getDefaultResource(): any {
        return enUS;
    }
}
