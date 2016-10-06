...
applyEffect(orientation) {
    if (this.generated) return;
    let loading = Loading.create({
        content: 'Working hard...'
    });
    var wrh = new Warholizer({
            previewsElemId: 'previews',
            sourceImgId: 'source-image',
            resultWrapperNameBase: 'result-wrapper-',
            resultElementNameBase: 'result-',
            orientation: orientation,
            onRenderStart: () => {
                this.nav.present(loading);
            },
            onRenderFinished: () => {
                loading.dismiss();
            },
            cloneClickedHandler: (target) => {
                this.showActionSheet(target);
            }
        });
    wrh.generateClones();
    this.generated = true;
}
...