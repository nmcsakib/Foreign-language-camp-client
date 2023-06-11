import admin from 'firebase-admin'

import serviceAccount from "./foreign-language-camping-firebase-adminsdk-1rvaf-fbd2de28db.json"

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://foreign-language-camping.firebaseapp.com/"
});

function deleteUser(uid) {
    admin.auth().deleteUser(uid)
        .then(function() {
            console.log('Successfully deleted user', uid);
        })
        .catch(function(error) {
            console.log('Error deleting user:', error);
        });
}

function getAllUsers(nextPageToken) {
    admin.auth().listUsers(100, nextPageToken)
        .then(function(listUsersResult) {
            listUsersResult.users.forEach(function(userRecord) {
                uid = userRecord.toJSON().uid;
                deleteUser(uid);
            });
            if (listUsersResult.pageToken) {
                getAllUsers(listUsersResult.pageToken);
            }
        })
        .catch(function(error) {
            console.log('Error listing users:', error);
        });
}

getAllUsers();