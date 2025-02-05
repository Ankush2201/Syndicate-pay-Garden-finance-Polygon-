
## Demo Video
(click)
[![Demo Video](https://github.com/user-attachments/assets/d2aeaec7-9d8e-461a-8466-d79eab0ab43c)](https://drive.google.com/drive/u/1/folders/1EbsSiyJAIARoZgNaRmg427lyxS7NCC3i)

## Syndicate-Pay:-(for project track of garden finance and polygon)
  In the dynamic and rapidly evolving world of cryptocurrencies, users are often confronted with significant challenges when attempting to transfer assets across different blockchain networks or convert one cryptocurrency into another. The complexities inherent in these processes can make them cumbersome, time-consuming, and fraught with risks. These difficulties are especially pronounced when dealing with various protocols and networks that may not be directly compatible with each other. Syndicate Pay is a cutting-edge solution designed to address these challenges head-on. It offers a streamlined, automated, and secure platform for managing cryptocurrency transactions, whether they involve simple token conversions or more complex cross-network asset transfers. By integrating advanced tools like Garden Finance's SDK and Polygon's Unifier Bridge, Syndicate Pay provides users with a seamless experience, reducing the complexity and risk typically associated with such transactions.

In the current cryptocurrency landscape, users often encounter several obstacles when transferring assets between different blockchain networks. These challenges include complexity, where each blockchain network has its own unique protocols, making it difficult for users to manually manage transactions across multiple platforms. The need to interact with different tools and services can be overwhelming, especially for those who are not technically inclined. Time-consuming processes also present a significant hurdle; manually converting cryptocurrencies or bridging assets between networks can take considerable time, involving multiple steps that must be carefully executed to avoid errors. Additionally, the risk of errors and security vulnerabilities is a constant concern, as the manual handling of transactions increases the likelihood of mistakes that could lead to significant financial losses.

Syndicate Pay addresses these challenges by offering a unified, automated system that simplifies the entire process. The platform starts by allowing users to scan a QR code to retrieve the recipient's wallet address, which is then validated to ensure accuracy. The system fetches the recipient's preferred token from a MongoDB database, streamlining the transaction setup. From there, Syndicate Pay automates the conversion of Bitcoin (BTC) to Wrapped Bitcoin (WBTC) using Garden Finance's SDK, monitoring the transaction in real-time to ensure its success. Once the BTC to WBTC conversion is complete, the system converts WBTC into the recipient's preferred token through the Unified Bridge, facilitating seamless cross-chain transfers.

Furthermore, Syndicate Pay supports complex cross-network conversions, such as converting Polygon Sepolia ETH to Polygon zkEVM (Cardano) and vice versa, using Polygon's Unifier Bridge. This capability is particularly valuable for users needing to transfer assets across different blockchain ecosystems. By automating these processes, Syndicate Pay eliminates the need for manual interaction with multiple platforms, reducing the risk of errors and delays while ensuring secure and efficient transactions.

![WhatsApp Image 2024-08-10 at 23 04 06_cd9e7eef](https://github.com/user-attachments/assets/31798c14-1cb5-40ed-8b13-e395e07ac54e)

## how it works:
Syndicate Pay ensures that assets can move securely between different blockchain networks, such as from Polygon Sepolia ETH to Polygon zkEVM (Cardano). By automating these steps, Syndicate Pay removes the need for manual intervention, significantly reducing the risk of errors, delays, and security vulnerabilities, while providing a smooth and efficient user experience for cross-chain cryptocurrency transactions. The following procedure can be applied to four key operations: BTC to WBTC conversion through Garden Finance, and Polygon Sepolia ETH to Polygon zkEVM (Cardano) conversion through the Unified Bridge.

**1. User Initiates the Process**
- The process begins when a user decides to transfer cryptocurrency, whether it's Bitcoin or tokens on the Polygon network. The process is initiated by scanning a QR code shared by the recipient, containing essential data, including the recipient's wallet address.

**2. QR Code Scan**
- The user scans the QR code using their device's camera. The system extracts the recipient's wallet address from the QR code, ensuring a seamless start to the transaction and minimizing the risk of manual entry errors.

**3. Check if Address is Valid**
- Once the recipient's address is extracted, the system automatically validates it. If the address is valid, the process moves forward. If the address is invalid, the user is prompted to scan the QR code again, ensuring that no invalid transactions occur.

**4. Fetch Preferred Token**
- The validated recipient address is used to query a MongoDB database to fetch the recipient's preferred token. The system then sets this token as the target for the transaction, ensuring that the recipient receives their preferred cryptocurrency.

**5. Initiate BTC to WBTC Swap**
- The user initiates the transaction by selecting the amount of Bitcoin (BTC) they wish to transfer. The system uses Garden Finance's SDK to automatically swap BTC to Wrapped Bitcoin (WBTC). This step is crucial for enabling cross-chain transactions, as WBTC is often used as an intermediary token for conversions.

**6. Initiate Polygon Sepolia ETH to Polygon zkEVM (Cardano) Conversion**
- If the transaction involves Polygon tokens, the system automates the conversion of Polygon Sepolia ETH to Polygon zkEVM (Cardano) using the Unified Bridge. This ensures secure and efficient cross-chain transfers between different blockchain ecosystems within the Polygon network.

**7. Monitor Swap and Conversion Status**
- The swap (BTC to WBTC) and conversion (Polygon Sepolia ETH to Polygon zkEVM) processes are continuously monitored by the system. If successful, the process moves forward. If either fails, the user is notified with an error message, and the transaction does not proceed until the issue is resolved.

**8. Initiate WBTC to Preferred Token Conversion**
- Once the WBTC is secured, the system uses the Unified Bridge to convert WBTC into the recipient's preferred token. Similarly, for Polygon transactions, the conversion from Polygon Sepolia ETH to Polygon zkEVM (Cardano) is completed. The recipient's wallet address and preferred token are specified during this conversion, ensuring that the correct assets are transferred.

**9. Monitor Conversion Status**
- Similar to the swap process, the conversion from WBTC or Polygon Sepolia ETH to the preferred token is closely monitored. If the conversion is successful, the process moves to the final step. If the conversion fails, an error message is displayed to the user.

**10. Transaction Complete**
- Upon successful conversion, the transaction is considered complete. The user is notified that the transaction has been successfully processed, and detailed information, including transaction hashes, is provided for their records.

**11. End of Process**
- The transaction is finalized, and both the sender and recipient can view the transaction details. The process ends here, having securely transferred the cryptocurrency across different blockchain networks.

### **Supported Operations**
- **BTC to WBTC Conversion through Garden Finance's SDK**
- **WBTC to Preferred Token Conversion through the Unified Bridge**
- **WBTC to BTC  conversion through the garden finance's SDK**
- **Polygon Sepolia ETH to Polygon zkEVM (Cardano) Conversion through the Unified Bridge**
- **Polygon zkEVM (Cardano) to Polygon Sepolia ETH Conversion through the Unified Bridge**

    

   ![image](https://github.com/user-attachments/assets/de7a5bfe-2f92-492e-a581-b4ab3887e82a)

  ![image](https://github.com/user-attachments/assets/c4bd267b-e4d5-47bb-bb05-6312905167c0)
Here are the key features of the Syndicate Pay project:

### **Syndicate Pay: Key Features**

1. **Cross-Chain Cryptocurrency Transactions**
   - Facilitates seamless transfers between different blockchain networks, such as BTC to WBTC, and Polygon Sepolia ETH to Polygon zkEVM (Cardano), eliminating the complexities of cross-chain transactions.

2. **Automated Conversion Processes**
   - Automates the conversion of cryptocurrencies (e.g., BTC to WBTC) using Garden Finance's SDK and Polygon Sepolia ETH to Polygon zkEVM (Cardano) using the Unified Bridge, reducing the need for manual intervention.

3. **Secure QR Code Scanning**
   - Initiates transactions by scanning a QR code that contains the recipient's wallet address, ensuring accuracy and preventing errors in manual address entry.

4. **Real-Time Transaction Monitoring**
   - Continuously monitors the status of swaps and conversions, providing real-time updates and notifications to users, ensuring transparency and security throughout the process.

5. **Preferred Token Management**
   - Fetches and sets the recipient’s preferred token from a MongoDB database, ensuring that recipients receive their desired cryptocurrency without manual input.

6. **Address Validation**
   - Automatically validates recipient wallet addresses during the QR code scanning process, minimizing the risk of sending funds to incorrect or invalid addresses.

7. **Comprehensive Transaction Logging**
   - Logs all transactions with detailed information, including transaction hashes, for user reference and audit purposes, ensuring traceability and transparency.

8. **Polygon Network Integration**
   - Supports advanced operations within the Polygon network, including conversions between Polygon Sepolia ETH and Polygon zkEVM (Cardano), leveraging the Unified Bridge for cross-chain compatibility.

9. **Error Handling and Recovery**
   - Provides error notifications and prompts users to retry in case of failed swaps or conversions, ensuring that transactions are completed successfully without unnecessary delays.

10. **Scalability and Flexibility**
    - Designed to handle a variety of cross-chain transactions, making it scalable for different use cases and adaptable to future blockchain networks and protocols.

11. **User-Friendly Interface**
    - Offers a simple and intuitive interface for users to initiate and track transactions, making the process accessible even to those with minimal technical knowledge.

12. **Enhanced Security Measures**
    - Implements robust security protocols to protect against vulnerabilities during cross-chain transactions, ensuring the safety of users’ assets.
![WhatsApp Image 2024-08-10 at 23 07 29_5edec4d5](https://github.com/user-attachments/assets/f81f8bb4-96e2-4951-8ad4-c76274517c48)

## screenshots:
   ### UI:
  home page:
       ![WhatsApp Image 2024-08-09 at 13 05 39_5c2a5239](https://github.com/user-attachments/assets/e7ab6584-9e80-45e8-b596-d5651bcd5fa1)
 merchant dashboard:
        ![image](https://github.com/user-attachments/assets/d2aeaec7-9d8e-461a-8466-d79eab0ab43c)
swap function:
        ![WhatsApp Image 2024-08-09 at 13 13 50_9b8dcdbf](https://github.com/user-attachments/assets/05e53c97-46e5-4c3a-bd8d-0620839a0505)
  ## proof:
  ### basic transaction done through briding:
  sended:
       ![WhatsApp Image 2024-08-09 at 13 14 31_4299388b](https://github.com/user-attachments/assets/1743afea-7cd5-4a51-8541-4ed259c844ef)
  recieved:
        ![WhatsApp Image 2024-08-09 at 13 15 04_dbfdc8a0](https://github.com/user-attachments/assets/ecba0657-5180-417d-b9ba-f45a71626cab)
  
  agglayer connection establishment:     
  ![WhatsApp Image 2024-08-09 at 13 13 50_51898f0f](https://github.com/user-attachments/assets/bf794976-1721-4c9c-bec6-e26843facb94)
  
  agglayer hash:
  ![WhatsApp Image 2024-08-09 at 17 22 45_c79f1e84](https://github.com/user-attachments/assets/a6f75019-100b-4235-81e6-7c7b5c9e7efa)
  transaction verifier: 
        ![WhatsApp Image 2024-08-09 at 17 24 25_bec9eb4c](https://github.com/user-attachments/assets/65c6d1b4-60e6-48de-a4ec-387e79b1bab4)
        ![WhatsApp Image 2024-08-09 at 18 16 50_0d640150](https://github.com/user-attachments/assets/264d6331-b7af-41e2-ad43-2aa1fc266b2c)
  conversion(sepolia to cardona):
        ![WhatsApp Image 2024-08-09 at 18 40 38_2eaf1d35](https://github.com/user-attachments/assets/97ac2b65-0e6e-451a-bbe6-e042cbd486b7)
## verification link:
  https://sepolia.etherscan.io/tx/0x88d088e7e5b7fbdc3dc02c7c804e872a4d706363bf9c8021269eb37cd6bb9a45
  video: https://drive.google.com/drive/u/1/folders/1EbsSiyJAIARoZgNaRmg427lyxS7NCC3i
    

 
