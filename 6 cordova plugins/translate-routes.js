app.config(function (..., $translateProvider) {
    ...
    
    $translateProvider
        .translations('cs', translations_cs)
        .translations('en', translations_en)
        .registerAvailableLanguageKeys(['en', 'cs'], {
            'en_US': 'en',
            'en_UK': 'en',
            'en-UK': 'en',
            'en-US': 'en',
            'cs_CZ': 'cs'
        }
    );
    $translateProvider.preferredLanguage('en');
});