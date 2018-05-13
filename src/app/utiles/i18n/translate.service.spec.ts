import { TranslateService } from './translate.service';
import { ResourceProvider } from './resource-provider.service';

describe('TranslateService', () => {
    let translateService: TranslateService;
    const fr = {
        sentence: 'Une phrase française',
        group: {
            embed_sentence: 'Phrase embarqué'
        },
        sentence_with_param: 'Bonjour {{name}}',
        sentence_with_params: 'Age : {{age}}, taille : {{size}}'
    };
    const en = {
        sentence: 'An english sentence',
        non_translated_sentence: 'Non translated sentence',
        group: {
            embed_sentence: 'Embed sentence'
        },
        sentence_with_param: 'Hello {{name}}',
        sentence_with_params: 'Age : {{age}}, size : {{size}}'
    };

    const fakeResourceProvider = {
        getLocalisedResource: () => fr,
        getDefaultResource: () => en
    };

    it('#getTranslation should return a french sentence', () => {
        translateService = new TranslateService(fakeResourceProvider as ResourceProvider);
        expect(translateService.getTranslation('sentence')).toBe(fr.sentence);
    });

    it('#getTranslation should return the default sentence', () => {
        translateService = new TranslateService(fakeResourceProvider as ResourceProvider);
        expect(translateService.getTranslation('non_translated_sentence')).toBe(en.non_translated_sentence);
    });

    it('#getTranslation should return a french sentence with param', () => {
        translateService = new TranslateService(fakeResourceProvider as ResourceProvider);
        expect(translateService.getTranslation('sentence_with_param', { name: 'Bob' }))
            .toBe(fr.sentence_with_param.replace('{{name}}', 'Bob'));
    });

    it('#getTranslation should return a french sentence with params', () => {
        translateService = new TranslateService(fakeResourceProvider as ResourceProvider);
        expect(translateService.getTranslation('sentence_with_params', { age: '24', size: '1,75' }))
            .toBe('Age : 24, taille : 1,75');
    });

    it('#getTranslation should return the key not translated', () => {
        translateService = new TranslateService(fakeResourceProvider as ResourceProvider);
        expect(translateService.getTranslation('group.undefined'))
            .toBe('group.undefined');
    });
});
