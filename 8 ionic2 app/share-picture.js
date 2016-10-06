applyEffect(){
    var wrh = new Warholizer({
        previewsElemId: "previews",
        sourceImgId: "source-image",
        resultWrapperNameBase: "result-wrapper-",
        resultElementNameBase: "result-",
        cloneClickedHandler: function(target){ // Callback
            SocialSharing.share(
                "Check this photo!", // Message 
                "Hello", // Title
                target.toDataURL("image/jpeg") // Image
            ); 
        }
    })
    wrh.generateClones();
}