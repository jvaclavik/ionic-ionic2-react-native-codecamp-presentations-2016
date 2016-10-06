applyEffect(){
    if(this.generated) return;
    var wrh = new Warholizer({
        previewsElemId: 'previews',
        sourceImgId: 'source-image',
        resultWrapperNameBase: 'result-wrapper-',
        resultElementNameBase: 'result-'
    });
    wrh.generateClones();
    this.generated = true;
}