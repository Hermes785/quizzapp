import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

import image1 from "./images/image18.png"
import image2 from "./images/Image19.png"
import image3 from "./images/Image20.png"
import image4 from "./images/Image21.png"
import image5 from "./images/Image22.png"
import image6 from "./images/Image23.png"
import image7 from "./images/Image24.png"
import image8 from "./images/Image25.png"
import image9 from "./images/Image26.png"
import image10 from "./images/Image27.png"
import image11 from "./images/Image28.png"

const QuizzApp3 = () => {
    // Définition des questions avec useState
    const [questions, setQuestions] = useState([

        {
            questionText: "You have an Azure subscription named Subscription1 that contains the storage accounts shown in the following table: ",
            answerOptions: [
                { answerText: "A. storage1", isCorrect: false, isChecked: false },
                { answerText: "B. storage2", isCorrect: false, isChecked: false },
                { answerText: "C. storage3", isCorrect: false, isChecked: false },
                { answerText: "D. storage4", isCorrect: true, isChecked: false }

            ],
            texteAFter: "You plan to use the Azure Import/Export service to export data from Subscription1 You need to identify which storage account can be used to export the data.What should you identify?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image1
        }
        ,
        {
            questionText: "You have Azure subscription that includes data in following locations: ",
            answerOptions: [
                { answerText: "A. DB1. ", isCorrect: false, isChecked: false },
                { answerText: "B. container1. ", isCorrect: true, isChecked: false },
                { answerText: "C. share1", isCorrect: false, isChecked: false },
                { answerText: "D. Table1", isCorrect: false, isChecked: false }

            ],
            texteAFter: "You plan to export data by using Azure import/export job named Export1.You need to identify the data that can be exported by using Export1.Which data should you identify?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image2
        }

        ,
        {
            questionText: "You have an Azure subscription that contains the resources in the following table. ",
            answerOptions: [
                { answerText: "A. Create a container instance. ", isCorrect: false, isChecked: false },
                { answerText: "B. Register Server1 ", isCorrect: true, isChecked: false },
                { answerText: "C. Install the Azure File Sync agent on Server1", isCorrect: true, isChecked: false },
                { answerText: "D. Download an automation script", isCorrect: false, isChecked: false },
                { answerText: "E. Create a sync group", isCorrect: true, isChecked: false }
            ],
            texteAFter: "Store1 contains a 􀀁le share named data. Data contains 5,000 􀀁les. You need to synchronize the 􀀁les in the 􀀁le share named data to an on-premises server named Server1.Which three actions should you perform? Each correct answer presents part of the solution.NOTE: Each correct selection is worth one point.",
            isMultiSelect: true, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image3
        }
        ,

        {
            questionText: "You have an Azure subscription that contains the storage accounts shown in the following table. ",
            answerOptions: [
                { answerText: "A. storage1 ", isCorrect: false, isChecked: false },
                { answerText: "B. storage2 ", isCorrect: true, isChecked: false },
                { answerText: "C. storage3", isCorrect: false, isChecked: false },
                { answerText: "D. storage4", isCorrect: false, isChecked: false },

            ],
            texteAFter: "You need to identify which storage account can be converted to zone-redundant storage (ZRS) replication by requesting a live migration fromAzure support. What should you identify?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image4
        },
        {
            "questionText": "You have an Azure subscription that contains a storage account named account1. You plan to upload the disk files of a virtual machine to account1 from your on-premises network. The on-premises network uses a public IP address space of 131.107.1.0/24. You plan to use the disk files to provision an Azure virtual machine named VM1. VM1 will be attached to a virtual network named VNet1. VNet1 uses an IP address space of 192.168.0.0/24. You need to configure account1 to meet the following requirements: ✑ Ensure that you can upload the disk files to account1. ✑ Ensure that you can attach the disks to VM1. ✑ Prevent all other access to account1. Which two actions should you perform? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.",
            "answerOptions": [
                { "answerText": "A. From the Networking blade of account1, select Selected networks.", "isCorrect": true, "isChecked": false },
                { "answerText": "B. From the Networking blade of account1, select Allow trusted Microsoft services to access this storage account.", "isCorrect": false, "isChecked": false },
                { "answerText": "C. From the Networking blade of account1, add the 131.107.1.0/24 IP address range.", "isCorrect": false, "isChecked": false },
                { "answerText": "D. From the Networking blade of account1, add VNet1.", "isCorrect": false, "isChecked": false },
                { "answerText": "E. From the Service endpoints blade of VNet1, add a service endpoint.", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": true,
            "userAnswer": null
        }, {
            "questionText": "You plan to use the Azure Import/Export service to copy files to a storage account. Which two files should you create before you prepare the drives for the import job? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.",
            "answerOptions": [
                { "answerText": "A. an XML manifest file", "isCorrect": false, "isChecked": false },
                { "answerText": "B. a dataset CSV file", "isCorrect": true, "isChecked": false },
                { "answerText": "C. a JSON configuration file", "isCorrect": false, "isChecked": false },
                { "answerText": "D. a PowerShell PS1 file", "isCorrect": false, "isChecked": false },
                { "answerText": "E. a driveset CSV file", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": true,
            "userAnswer": null
        }, {
            "questionText": "You have a Recovery Service vault that you use to test backups. The test backups contain two protected virtual machines. You need to delete the Recovery Services vault. What should you do first?",
            "answerOptions": [
                { "answerText": "A. From the Recovery Service vault, delete the backup data.", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Modify the disaster recovery properties of each virtual machine.", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Modify the locks of each virtual machine.", "isCorrect": false, "isChecked": false },
                { "answerText": "D. From the Recovery Service vault, stop the backup of each backup item.", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        , {
            "questionText": "You have an Azure subscription named Subscription1. You have 5 TB of data that you need to transfer to Subscription1. You plan to use an Azure Import/Export job. What can you use as the destination of the imported data?",
            "answerOptions": [
                { "answerText": "A. a virtual machine", "isCorrect": false, "isChecked": false },
                { "answerText": "B. an Azure Cosmos DB database", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Azure File Storage", "isCorrect": true, "isChecked": false },
                { "answerText": "D. the Azure File Sync Storage Sync Service", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        , {
            "questionText": "You have an Azure Storage account named storage1. You plan to use AzCopy to copy data to storage1. You need to identify the storage services in storage1 to which you can copy the data. Which storage services should you identify?",
            "answerOptions": [
                { "answerText": "A. blob, file, table, and queue", "isCorrect": false, "isChecked": false },
                { "answerText": "B. blob and file only", "isCorrect": true, "isChecked": false },
                { "answerText": "C. file and table only", "isCorrect": false, "isChecked": false },
                { "answerText": "D. file only", "isCorrect": false, "isChecked": false },
                { "answerText": "E. blob, table, and queue only", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        , {
            "questionText": "You have an Azure subscription that contains an Azure Storage account. You plan to create an Azure container instance named container1 that will use a Docker image named Image1. Image1 contains a Microsoft SQL Server instance that requires persistent storage. You need to configure a storage service for Container1. What should you use?",
            "answerOptions": [
                { "answerText": "A. Azure Files", "isCorrect": true, "isChecked": false },
                { "answerText": "B. Azure Blob storage", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Azure Queue storage", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Azure Table storage", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }, {
            "questionText": "You have an app named App1 that runs on two Azure virtual machines named VM1 and VM2. You plan to implement an Azure Availability Set for App1. The solution must ensure that App1 is available during planned maintenance of the hardware hosting VM1 and VM2. What should you include in the Availability Set?",
            "answerOptions": [
                { "answerText": "A. one update domain", "isCorrect": false, "isChecked": false },
                { "answerText": "B. two fault domains", "isCorrect": false, "isChecked": false },
                { "answerText": "C. one fault domain", "isCorrect": false, "isChecked": false },
                { "answerText": "D. two update domains", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }, {
            "questionText": "You have an Azure subscription named Subscription1. You have 5 TB of data that you need to transfer to Subscription1. You plan to use an Azure Import/Export job. What can you use as the destination of the imported data?",
            "answerOptions": [
                { "answerText": "A. an Azure Cosmos DB database", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Azure Blob storage", "isCorrect": true, "isChecked": false },
                { "answerText": "C. Azure Data Lake Store", "isCorrect": false, "isChecked": false },
                { "answerText": "D. the Azure File Sync Storage Sync Service", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        , {
            "questionText": "You have two Azure virtual machines named VM1 and VM2. You have two Recovery Services vaults named RSV1 and RSV2. VM2 is backed up to RSV1. You need to back up VM2 to RSV2. What should you do first?",
            "answerOptions": [
                { "answerText": "A. From the RSV1 blade, click Backup items and stop the VM2 backup", "isCorrect": false, "isChecked": false },
                { "answerText": "B. From the RSV2 blade, click Backup. From the Backup blade, select the backup for the virtual machine, and then click Backup", "isCorrect": false, "isChecked": false },
                { "answerText": "C. From the VM2 blade, click Disaster recovery, click Replication settings, and then select RSV2 as the Recovery Services vault", "isCorrect": true, "isChecked": false },
                { "answerText": "D. From the RSV1 blade, click Backup Jobs and export the VM2 job", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }, {
            "questionText": "You have a general-purpose v1 Azure Storage account named storage1 that uses locally-redundant storage (LRS). You need to ensure that the data in the storage account is protected if a zone fails. The solution must minimize costs and administrative effort. What should you do first?",
            "answerOptions": [
                { "answerText": "A. Create a new storage account.", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Configure object replication rules.", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Upgrade the account to general-purpose v2.", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Modify the Replication setting of storage1.", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        ,

        {
            questionText: "You have an Azure subscription that contains the storage accounts shown in the following table. ",
            answerOptions: [
                { answerText: "A. storage1 only", isCorrect: false, isChecked: false },
                { answerText: "B. storage1 and storage2 only ", isCorrect: false, isChecked: false },
                { answerText: "C. storage3 and storage4 only", isCorrect: false, isChecked: false },
                { answerText: "D. storage1, storage2, and storage3 only", isCorrect: true, isChecked: false },
                { answerText: "E. storage1, storage2, storage3, and storage4", isCorrect: false, isChecked: false },
            ],
            texteAFter: "You plan to manage the data stored in the accounts by using lifecycle management rules.To which storage accounts can you apply lifecycle management rules?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image5
        },
        {
            "questionText": "You create an Azure Storage account named contosostorage. You plan to create a file share named data. Users need to map a drive to the data file share from home computers that run Windows 10. Which outbound port should you open between the home computers and the data file share?",
            "answerOptions": [
                { "answerText": "A. 80", "isCorrect": false, "isChecked": false },
                { "answerText": "B. 443", "isCorrect": false, "isChecked": false },
                { "answerText": "C. 445", "isCorrect": true, "isChecked": false },
                { "answerText": "D. 3389", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        , {
            "questionText": "You have an Azure subscription named Subscription1. You have 5 TB of data that you need to transfer to Subscription1. You plan to use an Azure Import/Export job. What can you use as the destination of the imported data?",
            "answerOptions": [
                { "answerText": "A. Azure File Storage", "isCorrect": true, "isChecked": false },
                { "answerText": "B. an Azure Cosmos DB database", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Azure Data Factory", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Azure SQL Database", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        ,

        {
            questionText: "You have an Azure subscription that contains a storage account named storage1.You have the devices shown in the following table.",
            answerOptions: [
                { answerText: "A. Device 1 only", isCorrect: false, isChecked: false },
                { answerText: "B. Device1, Device2 and Device3", isCorrect: true, isChecked: false },
                { answerText: "C. Device1 and Device2 only", isCorrect: false, isChecked: false },
                { answerText: "D. Device1 and Device3 only", isCorrect: false, isChecked: false },

            ],
            texteAFter: "You plan to manage the data stored in the accounts by using lifecycle management rules.To which storage accounts can you apply lifecycle management rules?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image6
        },
        {
            "questionText": "You have an Azure Storage account named storage1 that contains a blob container named container1. You need to prevent new content added to container1 from being modified for one year. What should you configure?",
            "answerOptions": [
                { "answerText": "A. the access tier", "isCorrect": false, "isChecked": false },
                { "answerText": "B. an access policy", "isCorrect": true, "isChecked": false },
                { "answerText": "C. the Access control (IAM) settings", "isCorrect": false, "isChecked": false },
                { "answerText": "D. the access level", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        , {
            "questionText": "You are configuring Azure Active Directory (Azure AD) authentication for an Azure Storage account named storage1. You need to ensure that the members of a group named Group1 can upload files by using the Azure portal. The solution must use the principle of least privilege. Which two roles should you configure for storage1? Each correct answer presents part of the solution.",
            "answerOptions": [
                { "answerText": "A. Storage Account Contributor", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Storage Blob Data Contributor", "isCorrect": true, "isChecked": false },
                { "answerText": "C. Reader", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Contributor", "isCorrect": true, "isChecked": false },
                { "answerText": "E. Storage Blob Data Reader", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": true,
            "userAnswer": null
        }, {
            "questionText": "You have an on-premises server that contains a folder named D:\\Folder1. You need to copy the contents of D:\\Folder1 to the public container in an Azure Storage account named contosodata. Which command should you run?",
            "answerOptions": [
                { "answerText": "A. https://contosodata.blob.core.windows.net/public", "isCorrect": false, "isChecked": false },
                { "answerText": "B. azcopy sync D:\\folder1 https://contosodata.blob.core.windows.net/public --snapshot", "isCorrect": false, "isChecked": false },
                { "answerText": "C. azcopy copy D:\\folder1 https://contosodata.blob.core.windows.net/public --recursive", "isCorrect": true, "isChecked": false },
                { "answerText": "D. az storage blob copy start-batch D:\\Folder1 https://contosodata.blob.core.windows.net/public", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }, {
            "questionText": "You have an Azure subscription. In the Azure portal, you plan to create a storage account named storage1 that will have the following settings: ✑ Performance: Standard ✑ Replication: Zone-redundant storage (ZRS) ✑ Access tier (default): Cool ✑ Hierarchical namespace: Disabled You need to ensure that you can set Account kind for storage1 to BlockBlobStorage. Which setting should you modify 􀀁rst?",
            "answerOptions": [
                { "answerText": "A. Performance", "isCorrect": true, "isChecked": false },
                { "answerText": "B. Replication", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Access tier (default)", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Hierarchical namespace", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        , {
            "questionText": "You create an Azure Storage account. You plan to add 10 blob containers to the storage account. For one of the containers, you need to use a different key to encrypt data at rest. What should you do before you create the container?",
            "answerOptions": [
                { "answerText": "A. Generate a shared access signature (SAS).", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Modify the minimum TLS version.", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Rotate the access keys.", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Create an encryption scope.", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        , {
            "questionText": "You have an on-premises server that contains a folder named D:\\Folder1. You need to copy the contents of D:\\Folder1 to the public container in an Azure Storage account named contosodata. Which command should you run?",
            "answerOptions": [
                { "answerText": "A. az storage blob copy start D:\\Folder1 https://contosodata.blob.core.windows.net/public", "isCorrect": false, "isChecked": false },
                { "answerText": "B. azcopy sync D:\\folder1 https://contosodata.blob.core.windows.net/public --snapshot", "isCorrect": false, "isChecked": false },
                { "answerText": "C. azcopy copy D:\\folder1 https://contosodata.blob.core.windows.net/public --recursive", "isCorrect": true, "isChecked": false },
                { "answerText": "D. az storage blob copy start-batch D:\\Folder1 https://contosodata.blob.core.windows.net/public", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        , {
            "questionText": "You have an Azure subscription named Subscription1. You have 5 TB of data that you need to transfer to Subscription1. You plan to use an Azure Import/Export job. What can you use as the destination of the imported data?",
            "answerOptions": [
                { "answerText": "A. an Azure Cosmos DB database", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Azure File Storage", "isCorrect": true, "isChecked": false },
                { "answerText": "C. Azure SQL Database", "isCorrect": false, "isChecked": false },
                { "answerText": "D. a virtual machine", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        },
        {
            questionText: "You have an Azure subscription that contains the resources shown in the following table.",
            answerOptions: [
                { answerText: "A. Task1 and Task3 only", isCorrect: false, isChecked: false },
                { answerText: "B. Task1, Task2, and Task3 only", isCorrect: false, isChecked: false },
                { answerText: "C. Task1, Task3, and Task4 only", isCorrect: false, isChecked: false },
                { answerText: "D. Task2, Task3, and Task4 only", isCorrect: true, isChecked: false },
                { answerText: "Task1, Task2, Task3, and Task4", isCorrect: false, isChecked: false }

            ],
            text: "You need to perform the tasks shown in the following table.",
            texteAFter: "Which tasks can you perform by using Azure Storage Explorer?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image7,
            images: image8,
        }
        , {
            "questionText": "You have an Azure subscription that contains a storage account named storage1. You plan to create a blob container named container1. You need to use customer-managed key encryption for container1. Which key should you use?",
            "answerOptions": [
                { "answerText": "A. an EC key that uses the P-384 curve only", "isCorrect": false, "isChecked": false },
                { "answerText": "B. an EC key that uses the P-521 curve only", "isCorrect": false, "isChecked": false },
                { "answerText": "C. an EC key that uses the P-384 curve or P-521 curve only", "isCorrect": false, "isChecked": false },
                { "answerText": "D. an RSA key with a key size of 4096 only", "isCorrect": false, "isChecked": false },
                { "answerText": "E. an RSA key type with a key size of 2048, 3072, or 4096 only", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        },
        {
            "questionText": "You have an Azure subscription named Subscription1. You have 5 TB of data that you need to transfer to Subscription1. You plan to use an Azure Import/Export job. What can you use as the destination of the imported data?",
            "answerOptions": [
                { "answerText": "A. Azure Blob Storage", "isCorrect": true, "isChecked": false },
                { "answerText": "B. Azure Data Lake Store", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Azure SQL Database", "isCorrect": false, "isChecked": false },
                { "answerText": "D. a virtual machine", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }, {
            questionText: "You have an Azure subscription. The subscription contains a storage account named storage1 that has the lifecycle management rules shown inthe following table.",
            answerOptions: [
                { answerText: "A. stored in the Cool access tier", isCorrect: false, isChecked: false },
                { answerText: "B. stored in the Archive access tier", isCorrect: false, isChecked: false },
                { answerText: "C. stored in the Hot access tier", isCorrect: false, isChecked: false },
                { answerText: "D. deleted", isCorrect: true, isChecked: false },

            ],
            texteAFter: "On June 1, you store a blob named File1 in the Hot access tier of storage1.What is the state of File1 on June 7?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image9
        },

        {
            "questionText": "You have an Azure subscription named Subscription1. You have 5 TB of data that you need to transfer to Subscription1. You plan to use an Azure Import/Export job. What can you use as the destination of the imported data?",
            "answerOptions": [
                { "answerText": "A. an Azure Cosmos DB database", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Azure Data Lake Store", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Azure Blob storage", "isCorrect": true, "isChecked": false },
                { "answerText": "D. Azure Data Factory", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }, {
            "questionText": "You have an Azure subscription named Subscription1. You have 5 TB of data that you need to transfer to Subscription1. You plan to use an Azure Import/Export job. What can you use as the destination of the imported data?",
            "answerOptions": [
                { "answerText": "A. an Azure Cosmos DB database", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Azure Blob Storage", "isCorrect": true, "isChecked": false },
                { "answerText": "C. Azure SQL Database", "isCorrect": false, "isChecked": false },
                { "answerText": "D. the Azure File Sync Storage Sync Service", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }

        , {
            "questionText": "You plan to create an Azure Storage account named storage1 that will contain a file share named share1. You need to ensure that share1 can support SMB Multichannel. The solution must minimize costs. How should you configure storage?",
            "answerOptions": [
                { "answerText": "A. Premium performance with locally-redundant storage (LRS)", "isCorrect": true, "isChecked": false },
                { "answerText": "B. Standard performance with zone-redundant storage (ZRS)", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Premium performance with geo-redundant storage (GRS)", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Standard performance with locally-redundant storage (LRS)", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        },
        {
            "questionText": "You have an Azure subscription named Subscription1. You have 5 TB of data that you need to transfer to Subscription1. You plan to use an Azure Import/Export job. What can you use as the destination of the imported data?",
            "answerOptions": [
                { "answerText": "A. Azure Data Lake Store", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Azure File Storage", "isCorrect": true, "isChecked": false },
                { "answerText": "C. Azure SQL Database", "isCorrect": false, "isChecked": false },
                { "answerText": "D. the Azure File Sync Storage Sync Service", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }, {
            "questionText": "You have an Azure subscription that contains a storage account named storage1. You plan to use conditions when assigning role-based access control (RBAC) roles to storage1. Which storage1 services support conditions when assigning roles?",
            "answerOptions": [
                { "answerText": "A. containers only", "isCorrect": true, "isChecked": false },
                { "answerText": "B. file shares only", "isCorrect": false, "isChecked": false },
                { "answerText": "C. tables only", "isCorrect": false, "isChecked": false },
                { "answerText": "D. queues only", "isCorrect": false, "isChecked": false },
                { "answerText": "E. containers and queues only", "isCorrect": false, "isChecked": false },
                { "answerText": "F. file shares and tables only", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }, {
            "questionText": "You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource Manager template. You need to ensure that NGINX is available on all the virtual machines after they are deployed. What should you use?",
            "answerOptions": [
                { "answerText": "A. the Publish-AzVMDscConfiguration cmdlet", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Azure Application Insights", "isCorrect": false, "isChecked": false },
                { "answerText": "C. a Desired State Configuration (DSC) extension", "isCorrect": true, "isChecked": false },
                { "answerText": "D. Azure AD Application Proxy", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }, {
            "questionText": "You have an Azure Storage account that contains 5,000 blobs accessed by multiple users. You need to ensure that the users can view only specific blobs based on blob index tags. What should you include in the solution?",
            "answerOptions": [
                { "answerText": "A. a role assignment condition", "isCorrect": false, "isChecked": false },
                { "answerText": "B. a stored access policy", "isCorrect": false, "isChecked": false },
                { "answerText": "C. just-in-time (JIT) VM access", "isCorrect": false, "isChecked": false },
                { "answerText": "D. a shared access signature (SAS)", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        },
        {
            "questionText": "You have an Azure Storage account named storage1. For storage1, you create an encryption scope named Scope1. Which storage types can you encrypt by using Scope?",
            "answerOptions": [
                { "answerText": "A. File shares only", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Containers only", "isCorrect": true, "isChecked": false },
                { "answerText": "C. File shares and containers only", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Containers and tables only", "isCorrect": false, "isChecked": false },
                { "answerText": "E. File shares, containers, and tables only", "isCorrect": false, "isChecked": false },
                { "answerText": "F. File shares, containers, tables, and queues", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        , {
            "questionText": "You have an Azure subscription named Subscription1. You have 5 TB of data that you need to transfer to Subscription1. You plan to use an Azure Import/Export job. What can you use as the destination of the imported data?",
            "answerOptions": [
                { "answerText": "A. Azure Data Factory", "isCorrect": false, "isChecked": false },
                { "answerText": "B. the Azure File Sync Storage Sync Service", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Azure File Storage", "isCorrect": true, "isChecked": false },
                { "answerText": "D. Azure SQL Database", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }, {
            "questionText": "You have an Azure virtual machine named VM1 and an Azure key vault named Vault1. On VM1, you plan to configure Azure Disk Encryption to use a key encryption key (KEK). You need to prepare Vault1 for Azure Disk Encryption. Which two actions should you perform on Vault1? Each correct answer presents part of the solution.",
            "answerOptions": [
                { "answerText": "A. Select Azure Virtual machines for deployment.", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Create a new key.", "isCorrect": true, "isChecked": false },
                { "answerText": "C. Create a new secret.", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Configure a key rotation policy.", "isCorrect": false, "isChecked": false },
                { "answerText": "E. Select Azure Disk Encryption for volume encryption.", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": true,
            "userAnswer": null
        }
        , {
            "questionText": "You have an Azure subscription that contains a virtual machine named VM1 and an Azure key vault named KV1. You need to configure encryption for VM1. The solution must meet the following requirements: • Store and use the encryption key in KV1. • Maintain encryption if VM1 is downloaded from Azure. • Encrypt both the operating system disk and the data disks. Which encryption method should you use?",
            "answerOptions": [
                { "answerText": "A. customer-managed keys", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Confidential disk encryption", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Azure Disk Encryption", "isCorrect": true, "isChecked": false },
                { "answerText": "D. encryption at host", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }, {
            "questionText": "You have an Azure subscription that contains a storage account named storage1. The storage1 account contains a container named container1. You need to configure access to container1. The solution must meet the following requirements: • Only allow read access. • Allow both HTTP and HTTPS protocols. • Apply access permissions to all the content in the container. What should you use?",
            "answerOptions": [
                { "answerText": "A. an access policy", "isCorrect": false, "isChecked": false },
                { "answerText": "B. a shared access signature (SAS)", "isCorrect": true, "isChecked": false },
                { "answerText": "C. Azure Content Delivery Network (CDN)", "isCorrect": false, "isChecked": false },
                { "answerText": "D. access keys", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }, {
            "questionText": "You need to create an Azure Storage account named storage1. The solution must meet the following requirements: • Support Azure Data Lake Storage. • Minimize costs for infrequently accessed data. • Automatically replicate data to a secondary Azure region. Which three options should you configure for storage1? Each correct answer presents part of the solution.",
            "answerOptions": [
                { "answerText": "A. zone-redundant storage (ZRS)", "isCorrect": false, "isChecked": false },
                { "answerText": "B. the Cool access tire", "isCorrect": true, "isChecked": false },
                { "answerText": "C. geo-redundant storage (GRS)", "isCorrect": true, "isChecked": false },
                { "answerText": "D. the Hot access tier", "isCorrect": false, "isChecked": false },
                { "answerText": "E. hierarchical namespace", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": true,
            "userAnswer": null
        }
        , {
            questionText: "You have an Azure subscription that contains the storage accounts shown in the following table.",
            answerOptions: [
                { answerText: "A. storage1", isCorrect: false, isChecked: false },
                { answerText: "B. storage2", isCorrect: true, isChecked: false },
                { answerText: "C. storage3", isCorrect: false, isChecked: false },
                { answerText: "D. storage4", isCorrect: false, isChecked: false },

            ],
            texteAFter: "Which storage account can be converted to zone-redundant storage (ZRS) replication?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image10
        },
        {
            questionText: "You have an Azure subscription that contains the devices shown in the following table.",
            answerOptions: [
                { answerText: "A. Device1 only", isCorrect: false, isChecked: false },
                { answerText: "B. Device1 and Device2 only", isCorrect: false, isChecked: false },
                { answerText: "C. Device1 and Device3 only", isCorrect: false, isChecked: false },
                { answerText: "D. Device1, Device2, and Device3 only", isCorrect: true, isChecked: false },
                { answerText: "E. Device1, Device3, and Device4 only", isCorrect: false, isChecked: false },
            ],
            texteAFter: "On which devices can you install Azure Storage Explorer?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image11
        },












    ]);


    // État pour afficher les résultats du quiz ou non
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0); // Score du quiz
    const [currentPage, setCurrentPage] = useState(0); // Page actuelle
    const [userAnswers, setUserAnswers] = useState([]); // Réponses de l'utilisateur
    const [affiche, setAffiche] = useState(''); //


    // Nombre de questions par page
    const questionsPerPage = 1;

    // Effet pour sauvegarder les réponses de l'utilisateur à chaque changement de page
    useEffect(() => {
        const startIndex = currentPage * questionsPerPage;
        const endIndex = Math.min(startIndex + questionsPerPage, questions.length);
        setUserAnswers(userAnswers => {
            const updatedUserAnswers = [...userAnswers];
            for (let i = startIndex; i < endIndex; i++) {
                if (!updatedUserAnswers[i]) {
                    updatedUserAnswers[i] = {};
                }
            }
            return updatedUserAnswers;
        });
    }, [currentPage, questions]);

    // Effet pour initialiser les réponses utilisateur à chaque changement de question
    useEffect(() => {
        setUserAnswers(new Array(questions.length).fill(null).map(() => ({})));
    }, [questions]);


    // Fonction pour gérer le changement de réponse de l'utilisateur
    const handleAnswerCheckboxChange = (questionIndex, answerIndex) => {
        setUserAnswers(prevUserAnswers => {
            const updatedUserAnswers = prevUserAnswers.map((userAnswer, index) => {
                if (index === questionIndex) {
                    const updatedAnswers = {};
                    const isMultiSelect = questions[index].isMultiSelect;
                    if (!isMultiSelect) {
                        // Si seulement une option peut être sélectionnée
                        for (let i = 0; i < questions[index].answerOptions.length; i++) {
                            updatedAnswers[i] = i === answerIndex;
                        }
                    } else {
                        // Si plusieurs options peuvent être sélectionnées
                        Object.assign(updatedAnswers, userAnswer); // Copie les réponses précédentes
                        updatedAnswers[answerIndex] = !userAnswer[answerIndex]; // Inverse l'état de la réponse sélectionnée
                    }
                    return updatedAnswers;
                }
                return userAnswer;
            });
            return updatedUserAnswers;
        });
    };


    // Fonction pour passer à la page suivante
    const goToNextPage = () => {
        setCurrentPage(currentPage => Math.min(currentPage + 1, Math.ceil(questions.length / questionsPerPage) - 1));
        setAffiche('');
    };



    // Fonction pour afficher 
    const VerifyAnswer = () => {
        const startIndex = currentPage * questionsPerPage;
        const endIndex = Math.min(startIndex + questionsPerPage, questions.length);

        for (let i = startIndex; i < endIndex; i++) {
            const question = questions[i];
            const userAnswer = userAnswers[i];

            const selectedAnswerIndex = Object.keys(userAnswer).find(answerIndex => userAnswer[answerIndex]); // Trouver l'index de la réponse sélectionnée par l'utilisateur
            const selectedAnswer = selectedAnswerIndex !== undefined ? question.answerOptions[selectedAnswerIndex] : null; // Obtenir la réponse sélectionnée

            // console.log(`Question ${i + 1}:`);
            if (selectedAnswer !== null) {
                if (selectedAnswer.isCorrect) {
                    // console.log(`La réponse "${selectedAnswer.answerText}" est correcte.`);

                    setAffiche(<h5><span style={{ color: 'green' }}> "{selectedAnswer.answerText}" is  correct answer.</span></h5>);
                } else {
                    setAffiche(
                        <div>
                            <h4>
                                <span style={{ color: 'red' }}> "{selectedAnswer.answerText}" </span> is incorrect. <br />
                                Good answer is : <span style={{ color: 'green' }}> "{question.answerOptions.find(option => option.isCorrect).answerText}"</span>
                            </h4>
                        </div>
                    );
                    //console.log(`La réponse "${selectedAnswer.answerText}" est incorrecte. La bonne réponse est : "${question.answerOptions.find(option => option.isCorrect).answerText}"`);
                }
            } else {
                console.log("Aucune réponse sélectionnée.");
            }
        }



    };


    // Fonction pour calculer le score du quiz
    const handleScoreCalculation = () => {
        let totalScore = 0;
        questions.forEach((question, index) => {
            const userAnswer = userAnswers[index];
            let isCorrect = true;
            for (let i = 0; i < question.answerOptions.length; i++) {
                const isUserSelected = userAnswer?.[i];
                const isCorrectOption = question.answerOptions[i].isCorrect;
                if ((isUserSelected && !isCorrectOption) || (!isUserSelected && isCorrectOption)) {
                    isCorrect = false;
                    break;
                }
            }
            if (isCorrect) {
                totalScore++;
            }
        });
        setScore(totalScore);
        setShowScore(true);
    };


    return (
        <div className="container mt-5">
            <h4 className="text-danger">Topic 3 :Select the correct answer</h4> <br />
            <h5 className="text-warning"> Attention  questions 2,4,5,7,8,9,10,11,12,13,14,17,18,21,23,25,29,30,31,32,33,39,42,44,47,49,50,52,53,56,58,59,62,64,69,71,72,75,77,80,83,86,87,88,89,90 of topic 3 of the pdf   are missing from this MCQ</h5> <br />
            {!showScore ? (
                // Affichage des questions et des options de réponse
                <>
                    {questions.slice(currentPage * questionsPerPage, (currentPage + 1) * questionsPerPage).map((question, questionIndex) => (
                        <div key={currentPage * questionsPerPage + questionIndex} className="card mb-3 text-justify">
                            <div className="card-body text-justify">
                                <h5 className="card-title">Question {currentPage * questionsPerPage + questionIndex + 1}</h5>
                                <p className="card-text" style={{ textAlign: 'justify' }}>{question.questionText}</p>
                                {question.image ?
                                    <img src={question.image} alt="Illustration de la question" className="img-fluid" />
                                    : " "}

                                {
                                    question.text ?
                                        <p style={{ textAlign: 'justify' }}>{question.text}</p> : ''
                                }
                                {question.images ?
                                    <img src={question.images} alt="Illustration de la question" className="img-fluid" />
                                    : " "}

                                {
                                    question.texteAFter ?
                                        <p style={{ textAlign: 'justify' }}>{question.texteAFter}</p> : ''
                                }

                                {question.answerOptions.map((answerOption, answerIndex) => (
                                    <div key={answerIndex} className="form-check " style={{ textAlign: 'justify' }}>
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id={`question${currentPage * questionsPerPage + questionIndex}-answer${answerIndex}`}
                                            checked={userAnswers[currentPage * questionsPerPage + questionIndex]?.[answerIndex]}
                                            onChange={() => handleAnswerCheckboxChange(currentPage * questionsPerPage + questionIndex, answerIndex)}
                                            disabled={showScore} // Désactiver les cases à cocher après la soumission
                                        />
                                        <label className="form-check-label" htmlFor={`question${currentPage * questionsPerPage + questionIndex}-answer${answerIndex}`}>
                                            {answerOption.answerText}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    {affiche}
                    <div>
                        <button onClick={VerifyAnswer} className="btn btn-secondary mr-2" disabled={userAnswers.every(answer => Object.values(answer).every(value => value === false))}>
                            Vérifier les réponses
                        </button>
                        <button onClick={goToNextPage} className=" mx-2 btn btn-primary" disabled={currentPage === Math.ceil(questions.length / questionsPerPage) - 1}>Page suivante</button>
                        <button onClick={handleScoreCalculation} className="mx-2 btn btn-success ml-2">Soumettre</button>

                    </div>
                </>
            ) : (
                // Affichage des résultats du quiz
                <div>

                    <h3>Résultats du Quiz</h3>
                    <p>Score: {score} / {questions.length}</p>
                    <p>Pourcentage de réussite: {Math.round((score / questions.length) * 100)}%</p>
                    <div className="progress">
                        <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: `${Math.round((score / questions.length) * 100)}%` }}
                            aria-valuenow={Math.round((score / questions.length) * 100)}
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            {Math.round((score / questions.length) * 100)}%
                        </div>
                    </div> <br />
                    <div>
                        <Button variant="success " className="mx-2" href="/">back to hompage 🙂</Button>
                    </div>
                </div>
            )}

        </div>
    );
}

export default QuizzApp3;
