applyEffect(orientation) {
    ...
    let wrh = new Warholizer({
        ...
        onRenderFinished: () => {
            loading.dismiss();
            if(Utility.isElectron()){
                var canvases = document.querySelectorAll('canvas');
                for(var i = 0; i < canvases.length; i++){
                    var parent = canvases[i].parentElement;
                    if(parent.id == 'previews'){
                        var a = document.createElement('a');
                        a.href = canvases[i].toDataURL('image/jpeg');
                        a.download = 'stripes.jpg';
                        a.appendChild(canvases[i]);
                        parent.appendChild(a);
                    }
                }
            }
        },
        cloneClickedHandler: (target) => {
            if(!Utility.isElectron()) this.showActionSheet(target);
        }
    });
    ...
}