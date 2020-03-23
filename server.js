const {google} = require('googleapis');
const key = require('./ggdrivenodejss.json');

const scopes = ['https://www.googleapis.com/auth/drive', 'https://www.googleapis.com/auth/drive.file'];
const jwt = new google.auth.JWT(
    key.client_email,
    null,
    key.private_key,
    scopes
);
jwt.authorize((err, result) => {
    if (err) {
        return console.error("Couldn't get access token")
    } else {
        const oauth2Client = new google.auth.OAuth2();
        oauth2Client.setCredentials({
            'access_token': result.access_token
        });
        const drive = google.drive({
            version: 'v3',
            auth: oauth2Client
        });
        var fileMetadata = {
            'name': 'dasdasdasdasdasdsadasd',
            'mimeType': 'application/vnd.google-apps.folder'
        };
        drive.files.create({
            resource: fileMetadata,
            fieldId: 'isfsadasdasdasdasdfsdd'
        }, function (err, file) {
            if (err) {
                // Handle error
                console.error(err);
            } else {
                console.log(file);
            }
        });
        // const fileMetadata = {
        //     'name': 'phuonglv',
        //     'mimeType': 'application/vnd.google-apps.folder',
        // };
        // drive.drives.create({
        //         resource: fileMetadata,
        //         requestId: Math.random(),
        //     },
        //     function (err, folder) {
        //         if (err) {
        //             // Handle error
        //             console.error(err);
        //         } else {
        //             let fileId = folder;
        //             console.log(folder);
        //         }
        //     }
        // );
    }
})
