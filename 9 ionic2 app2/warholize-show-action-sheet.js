showActionSheet(target) {
    let sheet = ActionSheet.create({
        title: 'Action?',
        buttons: [
            {
                text: 'Share',
                handler: () => {
                    SocialSharing.share(
                        'See this picture!', 'My warholized photo',
                        target.toDataURL('image/jpeg')
                    );
                }
            }, {
                text: 'Save',
                handler: () => {
                    this.gallery.savePhoto(target);
                }
            }, {
                text: 'Cancel',
                role: 'cancel'
            }
        ]
    });
    this.nav.present(sheet);
}
