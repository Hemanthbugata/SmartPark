# SmartPark
Driving the Future of Privacy - Enabled Parking System  
<div align="center">
  <h1>SmartPark</h1>
  <p>
     "Effortless Parking Transformed by Sapphire Brilliance and Secured with Oasis Privacy Layer."
  </p>
  
SmartPark is a groundbreaking blockchain-based parking management system that aims to revolutionize the way parking is managed. 
By utilizing the benefits of blockchain technology, SmartPark offers increased  efficiency, transparency, and convenience for both 
spot owners and vehicle owners. The system consists of various components such as vehicle identity registration, parking spot management,
booking functionality, payment processing, and ownership transfer. By leveraging the decentralized nature of the blockchain, SmartPark
ensures data integrity and transparency, providing a seamless and user-friendly parking experience.
At the core of the SmartPark system are vehicle identity registration and parking spot management.
  
Vehicle owners can register their vehicles by providing relevant information such as the owner's details,
vehicle name, license plate, and vehicle type. The registration process is carried out on the blockchain,
ensuring the authenticity and security of the data. Spot owners can add their available parking 
spots to the system, specifying details like availability, geographical coordinates, spot type, and price.
This comprehensive database allows vehicle owners to easily search and book available parking
spots through the SmartPark app.

The booking functionality enables vehicle owners to reserve parking spots through the system. Upon successful booking, 
the spot's availability status is updated, ensuring that no other vehicle can book the same spot during the selected time frame. 
The system records booking details such as the booking ID, booking time, parking in/out time, payment status, and relevant transaction
information. All this data is stored on the blockchain, providing a transparent and tamper-proof record of each transaction. 
Furthermore, ownership transfers of parking spots can be seamlesslyexecuted, allowing spot owners to transfer ownership to new owners.
Payment processing is seamlessly integrated into the SmartPark system, providing a convenient and secure way for vehicle owners
to make payments to spot owners. Payment options may include cryptocurrencies or digital payment systems, making transactions instantaneous and hassle-free.

The use of blockchain technologyguarantees the transparency and traceability of each payment transaction. SmartPark also provides event 
notifications for important actions such as spot bookings, releases, and transfers, aswell as the creation of vehicle identities and 
payment receipts. These events help keep all parties involved informed and promote transparent communication within the ecosystem.
Overall, SmartPark's blockchain-based parking management system offers a transformative solution to address the challenges faced 
in traditional parking systems. By utilizing blockchain technology, it ensures the integrity and security of data, provides a transparent 
and efficient booking process, and facilitates seamless payment transactions. The decentralized nature of the system contributes to 
greater trust and transparency among all participants, revolutionizing the way parking is managed and improving the overall parking 
experience. With SmartPark, finding and booking parking spots becomesa streamlined and convenient process, eliminating the frustrations
associated with hunting for parking in congested urban areas.

</div>

# Features
* **User registration:** Users can register in the SmartPark system by providing their personal information, such as name, contact details, and payment preferences. Registration ensures a secure and personalized user experience within the SmartPark ecosystem.

* **Spot owner registration:** Spot owners can also register in the SmartPark system by providing relevant information about their parking spaces, including location, availability, pricing, and any specific rules or restrictions. This allows spot owners to showcase their available spots to potential users.

* **Vehicle identity registration:** Vehicle owners can register their vehicles by providing details such as owner information, vehicle name, license plate, and type. This information is securely stored on the blockchain, ensuring authenticity and security.

* **Parking spot management:** Spot owners can add their available parking spots to the system. Information such as spot availability, geographical coordinates, spot type, and price is included. This comprehensive database allows vehicle owners to easily search for and book available parking spots.

* **Booking functionality:** Vehicle owners can reserve parking spots through the SmartPark system. When a spot is successfully booked, its availability status is updated to prevent other vehicles from booking the same spot during the selected time frame. The system records relevant booking details, including the booking ID, booking time, parking in/out time, payment status, and transaction information.

* **Payment processing:** The system supports seamless payment processing, allowing vehicle owners to make payments to spot owners. Payment options may include cryptocurrencies or digital payment systems. Each payment transaction is transparent and traceable on the blockchain, ensuring secure and efficient transactions.

* **Ownership transfer:** Spot owners can transfer ownership of parking spots to new owners. This feature allows for flexible ownership updates and facilitates smooth transitions between spot owners.

* **Event notifications:** The system provides event notifications for important actions such as spot bookings, releases, transfers, vehicle identity creation, and payment receipts. These notifications promote transparency and facilitate communication between all parties involved in the ecosystem.




# Architecture


![Architecture-smartpark](https://github.com/Hemanthbugata/SmartPark/assets/102855092/5fa45779-fd0a-4121-9b05-e0eb4ab9f679)


## Components

<h3> Frontend:</h3>

* The frontend of your SmartPark application would handle the user interface and interactions with the DApp.
* It should include a "Sign in with MetaMask" feature to enable users to securely authenticate and connect their MetaMask wallet to the application.
* The frontend would display relevant information and allow users to interact with the SmartPark DApp.
  
<h3> Sign in with metamask:</h3>
  
* SmartPark integrates the "Sign in with MetaMask" feature, which allows users to securely authenticate and interact with the DApp using their MetaMask wallet.
  
<h3> Backend:</h3>
 
* The backend of your SmartPark application would handle the business logic and server-side functionalities required for the application's operation.
* It can be built using any suitable backend technology such as Node.js/web3.js, Python/js.
* The backend would handle communication with other components, such as the Smart Contract and IPFS.
 
<h3> IPFS:</h3>
  
* IPFS (InterPlanetary File System) can be used to store and distribute files within your SmartPark application, such as images, user data, or any other content.
* By utilizing IPFS, you can ensure decentralized and distributed storage of files among network participants rather than relying on a centralized server.

<h3> Smart Park Smart contract:</h3>

* The SmartPark Smart Contract is the core component of your application, implemented using Solidity or another compatible smart contract language.
* It defines the logic and rules for parking space management, booking, and payment within the SmartPark system.
* It would include functions for users to register parking spaces, book spots, manage payments, and potentially handle dispute resolution.
* The smart contract would be deployed on the Ethereum blockchain and interacted with through the frontend and backend components

# Local installation

1. Clone the repository

First, you need to clone the repository

```
git clone https://github.com/suraj719/smartPark.git
```

2. Install Dependencies

Install the project's dependencies:

```
npm install
```

3. Start the Project

Once all the dependencies are installed, you can start the project:

```
npm run dev
```

The project should now be running on `http://localhost:3000`

# Usage

* User Interface: Design and develop an intuitive user interface to display parking spaces, enable booking, and show relevant information.
* MetaMask Integration: Implement the "Sign in with MetaMask" feature to allow users to securely authenticate and interact with the DApp using their MetaMask wallet.
* Display Parking Spaces: Fetch and display available parking spaces from the SmartPark smart contract .
* Registration of Parking Spaces: Implement functions to allow parking space owners to register their spaces on the blockchain with relevant details.
* Booking Management: Enable users to search, book, and manage their parking space bookings through interactions with the smart contract.
* Show Booking Details: Display booking details such as parking duration, cost, and any other relevant information to the user.
* Payment Integration: Integrate a payment gateway or cryptocurrency wallet to handle the payment process for booking parking spaces


# Smart Contract Documentation

## SmartPArk DApp

The SmartPark dApp is a decentralized application built on blockchain technology that aims to revolutionize parking systems, making it more efficient, transparent, and user-friendly. It utilizes smart contracts to automate processes and enable secure transactions, allowing users to find and book parking spaces hassle-free.

Contract Details
SPDX-License-Identifier: MIT
Solidity Version: ^0.8.6

**Structs**

** 1. Owner **
...
struct Owner {
    string name;
    uint age;
    string gender;
    address id;
    string email;
    uint256 drivingLicense;
}
...

  
    
* **name:** A string that represents the name of the owner.
* **age:**  An unsigned integer (uint) that represents the age of the owner.
* **gender:** A string that represents the gender of the owner.
* **id:** An Ethereum address (address) that represents the unique identifier of the owner.
* **email:** A string that represents the email address of the owner.
* **drivingLicense:** An unsigned integer (uint256) that represents the driving license of the owner.

  ** 2. Vehicle data **

...
 struct VehicleData {
        uint256 id;
        string name;
        string licensePlate;
        string vehicleType;
        address owner;
        bool verified;
    }
  ...
    

* **id:** The id of Vehicle Owner.
* **name:** The name of Vehicle Owner
* **LicensePlate:** The licenseplate of vehicle .
* **Vehicle :** The Type of vehicle owned parked.
* **owner:** The owner of Parking Slot.
* **verified:** Is the parking spot filled or not .

  ** 3.Parking Spot **

  ...
  struct ParkingSpot {
        uint256 id;
        bool available;
        string latLong;
        uint256 pinCode;
        string spotType;
        uint256 number;
        address owner;
        uint256 price;
        bool verified;
    }
  ...

* **id:** The id of parking spot.
* **available:** Is parking spot available or not.
* **latlong:** Location co-ordinates of parking spot.
* **pincode:** Pincode of parking spot
* **number:**

   ** 4. Booking Spot **

...
struct Booking {
    string id;
    uint256 bookingTime;
    uint256 parkingInTime;
    uint256 parkingOutTime;
    bool payment;
    string txnUrl;
    string txnChain;
    uint256 charges;
    uint256 checkInTime;
    uint256 checkOutTime;
    bool verified;
}
...

* **id:** A string that represents the unique identifier of the booking.
* **bookingTime:** An unsigned integer (uint256) that represents the timestamp of when the booking was made.
* **parkingInTime:** An unsigned integer (uint256) that represents the timestamp of when the vehicle parked in the spot.
* **parkingOutTime:** An unsigned integer (uint256) that represents the timestamp of when the vehicle left the spot.
* **payment:** A boolean flag that indicates whether the payment has been made or not.
* **txnUrl:** A string that represents the URL of the transaction associated with the booking.
* **txnChain:** A string that represents the transaction chain or network associated with the booking.
* **charges:** An unsigned integer (uint256) that represents the charges or cost associated with the booking.
* **checkInTime:** An unsigned integer (uint256) that represents the timestamp of when the check-in for the booking occurred.
* **checkOutTime:** An unsigned integer (uint256) that represents the timestamp of when the check-out for the booking occurred.
* **verified:** A boolean flag that indicates whether the booking data has been verified or not.


 **State Variables**


* `mapping(address => VehicleData[]) private ownerVehicles;`: Associates each owner's Ethereum address with an array of their owned vehicles.
* `mapping(address => ParkingSpot[]) private ownerSpots;`: Associates each owner's Ethereum address with an array of their owned parking spots.
* `mapping(uint256 => ParkingSpot[]) public parkingSpots;`: Associates each parking spot's unique identifier with an array of parking spots.
* `mapping(uint256 => uint256) public prices;`: Associates each parking spot's unique identifier with its corresponding price.
* `mapping(address => uint256) private ownerIds;`: Associates each owner's Ethereum address with their unique identifier.

**Events**

* event SpotBooked(uint spotId);: Indicates that a parking spot with the given spotId has been booked.
* event SpotReleased(uint spotId);: Indicates that a parking spot with the given spotId has been released.
* event SpotTransferred(address newOwner, uint spotId);: Indicates that ownership of a parking spot with the given spotId has been transferred to a new owner with the address newOwner.
* event VehicleIdentityCreated(uint vehicleId);: Indicates that a new vehicle identity with the given vehicleId has been created.
* event PaymentReceived(address payer, uint amount);: Indicates that a payment of amount has been received from the address payer.

**Functions**


* `createOwner`: Creates a new owner and adds their details to the `owners` array, associating them with the calling address.
* `getOwner`: Retrieves the details of an owner based on their address. Only the owner can access their own information.
* `getOwnerSpots`: Retrieves an array of parking spots owned by the caller.
* `getOwnerVehicles`: Retrieves an array of vehicles owned by the caller.
* `createVehicleIdentity`: Creates a new vehicle identity and adds it to the list of vehicles owned by the caller. Only the owner can create a vehicle identity.
* `addSpot`: Adds a new parking spot to the list of spots owned by the caller. Only the owner can add a parking spot.
* `bookSpot`: Books a parking spot for a specific vehicle. Checks if the spot is available and if it is suitable for the vehicle type. Generates a unique booking ID and adds it to the list of bookings.
* `releaseSpot`: Releases a booked parking spot and makes it available again. Only the owner of the spot or the owner of the vehicle that booked the spot can release it.
* `transferSpotOwnership`: Transfers the ownership of a parking spot to a new owner.
* `makePayment`: Accepts a payment from the caller. Used for payment processing during booking.
* `toString`: Converts a uint256 value to a string. Used for generating unique booking IDs.

  

# Troubleshooting

**Metamask Login Issue**

If you are unable to sign in with Metamask, please ensure that your Metamask wallet is properly configured and has sufficient funds to pay for the transaction fees. Additionally, ensure that you are signed into Metamask and have granted permission for the dapp to access your wallet.


# Contribution Guidelines


# Team Members

* Tushar Goyal
* Hemanth Bugata
* Suraj Thammi
  


# Acknowledgements

We are very grateful for these organizations for their contributions to our dapp:
* Oasis privacy layer and sapphire for providing the blockchain network and  smart contract ecosystem that Smartpark runs on.