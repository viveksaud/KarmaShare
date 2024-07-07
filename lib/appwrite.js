import { Account, Client, ID } from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.vivek.KarmaShare",
  projectId: "66895521002ee52787e8",
  databaseId: "668967bb0034ac13ffb7",
  userCollectionId: "668968a20002d1e7e955",
  videoCollectionId: "668968ca0018f968bf29",
  storageId: "66896d460007709dc57c",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform); // Your application ID or bundle ID.

const account = new Account(client);

export const createUser = ()=>{

  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );

}

// Register User
