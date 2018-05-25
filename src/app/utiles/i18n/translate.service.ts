import { Injectable } from '@angular/core';
import { ResourceProvider } from './resource-provider.service';

@Injectable({
    providedIn: 'root'
})
export class TranslateService {
    private readonly encapsulateArgumentName: (name: string) => string = (name: string) => `{{${name}}}`;

    constructor(private resourceProvider: ResourceProvider) { }

    /**
     * Retourne la traduction dans la langue demandée.
     * Si la traduction n'est pas trouvée pour la langue demandée,
     * la langue par défault est retounée.
     * @param key Clé de ressource demandée
     * @param args Argument pour la ressource demandée
     */
    getTranslation(key: string, args: any = null): string {
        const source = this.resourceProvider.getLocalisedResource();
        const path = key.split('.');
        let translation = this.findTranslationForSource(source, path);
        if (typeof translation === 'undefined') {
            translation = this.findTranslationForSource(this.resourceProvider.getDefaultResource(), path);
        }
        if (typeof translation !== 'undefined') {
            if (args) {
                const argsNames = Object.getOwnPropertyNames(args);
                argsNames.forEach(name => {
                    translation = translation.replace(this.encapsulateArgumentName(name), args[name]);
                });
            }

            return translation;
        } else {
            return key;
        }
    }

    private findTranslationForSource(source: any, path: string[]): string {
        if (typeof source === 'undefined') {
            return undefined;
        }
        let translation = source;
        for (let i = 0; i < path.length; i++) {
            translation = translation[path[i]];
            if (typeof translation === 'undefined') {
                break;
            }
        }

        return translation;
    }
}
