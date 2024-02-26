const {Firestore} = require('@google-cloud/firestore');

// Entry point function
async function writeToFS() {
    const firestore = new Firestore({
        projectId: "pivotal-shield-414120",
        // databaseId: "whatever"
    });

    // Create a dummy object for demo purposes
    let dataObject = {};

    // Add some key:value pairs
    dataObject.thumbURL = "https://storage/thumb@64_blah.jpg";
    dataObject.imageURL = "https://storage/blah.jpg";
    dataObject.latitude = 123.456;
    dataObject.longitude = 987.654;
    dataObject.width = 1080;
    dataObject.height = 2500;

    console.log(`The dataobject: `);
    console.log(dataObject);

    // Write the object into Firestore
    let collectionRef = firestore.collection('photos');
    let documentRef = await collectionRef.add(dataObject);
    console.log(`Document created: ${documentRef.id}`);
}


// Call the entry point function (not needed in GCF)
writeToFS();