import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

import image1 from "./images/Image29.png"
import image2 from "./images/Image30.png"
import image3 from "./images/Image31.png"
import image4 from "./images/Image32.png"
import image5 from "./images/Image33.png"
import image6 from "./images/Image34.png"
import image7 from "./images/Image35.png"
import image8 from "./images/Image36.png"
import image9 from "./images/Image37.png"
import image10 from "./images/Image38.png"
import image11 from "./images/Image39.png"
import image12 from "./images/Image40.png"
import image13 from "./images/Image41.png"
import image14 from "./images/Image42.png"
import image15 from "./images/Image43.png"
import image16 from "./images/Image44.png"
import image17 from "./images/Image45.png"
import image18 from "./images/Image46.png"
import image19 from "./images/Image47.png"
import image20 from "./images/Image48.png"
import image21 from "./images/Image49.png"
import image22 from "./images/Image50.png"
import image23 from "./images/Image51.png"
import image24 from "./images/Image52.png"
import image25 from "./images/Image53.png"
import image26 from "./images/Image54.png"

const QuizzApp4 = () => {
    // Définition des questions avec useState
    const [questions, setQuestions] = useState([



        {
            "questionText": "You deploy an Azure Kubernetes Service (AKS) cluster named AKS1. You need to deploy a YAML file to AKS1. Solution: From Azure CLI, you run az aks. Does this meet the goal?",
            "answerOptions": [
                { "answerText": "A. Yes", "isCorrect": false, "isChecked": false },
                { "answerText": "B. No", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        ,
        {
            "questionText": "You deploy an Azure Kubernetes Service (AKS) cluster named AKS1. You need to deploy a YAML file to AKS1. Solution: From Azure CLI, you run the kubectl client. Does this meet the goal?",
            "answerOptions": [
                { "answerText": "A. Yes", "isCorrect": true, "isChecked": false },
                { "answerText": "B. No", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        ,
        {
            "questionText": "You deploy an Azure Kubernetes Service (AKS) cluster named AKS1. You need to deploy a YAML file to AKS1. Solution: From Azure CLI, you run azcopy. Does this meet the goal?",
            "answerOptions": [
                { "answerText": "A. Yes", "isCorrect": false, "isChecked": false },
                { "answerText": "B. No", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }

        , {
            "questionText": "You need to create an alert in Azure when more than two error events are logged to the System event log on VM1 within an hour. Solution: You create an Azure storage account and configure shared access signatures (SASs). You install the Microsoft Monitoring Agent on VM1. You create an alert in Azure Monitor and specify the storage account as the source. Does that meet the goal?",
            "answerOptions": [
                { "answerText": "A. Yes", "isCorrect": false, "isChecked": false },
                { "answerText": "B. No", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }


        ,


        {
            "questionText": "You download an Azure Resource Manager template based on an existing virtual machine. The template will be used to deploy 100 virtual machines. You need to modify the template to reference an administrative password. You must prevent the password from being stored in plain text. What should you create to store the password?",
            "answerOptions": [
                { "answerText": "A. an Azure Key Vault and an access policy", "isCorrect": true, "isChecked": false },
                { "answerText": "B. an Azure Storage account and an access policy", "isCorrect": false, "isChecked": false },
                { "answerText": "C. a Recovery Services vault and a backup policy", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Azure Active Directory (AD) Identity Protection and an Azure policy", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }

        ,

        {
            "questionText": "You plan to automate the deployment of a virtual machine scale set that uses the Windows Server 2016 Datacenter image. You need to ensure that when the scale set virtual machines are provisioned, they have web server components installed. Which two actions should you perform? Each correct answer presents part of the solution.",
            "answerOptions": [
                { "answerText": "A. Upload a configuration script", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Create an automation account", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Create an Azure policy", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Modify the extensionProfile section of the Azure Resource Manager template", "isCorrect": true, "isChecked": false },
                { "answerText": "E. Create a new virtual machine scale set in the Azure portal", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": true,
            "userAnswer": null
        }
        ,

        {
            questionText: "You have an Azure Resource Manager template named Template1 that is used to deploy an Azure virtual machine.Template1 contains the following text:",
            answerOptions: [
                { answerText: "A. Modify the location in the resources section to westus", isCorrect: true, isChecked: false },
                { answerText: "B. Select West US during the deployment", isCorrect: false, isChecked: false },
                { answerText: "C. Modify the location in the variables section to westus", isCorrect: false, isChecked: false },

            ],
            text: "The variables section in Template1 contains the following text:'location': 'westeurope'The resources section in Template1 contains the following text:",
            texteAFter: "You need to deploy the virtual machine to the West US location by using Template1.What should you do?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image1,
            images: image2,
        }

        , {
            "questionText": "You create an App Service plan named Plan1 and an Azure web app named webapp1. You discover that the option to create a staging slot is unavailable. You need to create a staging slot for Plan1. What should you do 􀀁rst?",
            "answerOptions": [
                { "answerText": "A. From Plan1, scale up the App Service plan", "isCorrect": true, "isChecked": false },
                { "answerText": "B. From webapp1, modify the Application settings", "isCorrect": false, "isChecked": false },
                { "answerText": "C. From webapp1, add a custom domain", "isCorrect": false, "isChecked": false },
                { "answerText": "D. From Plan1, scale out the App Service plan", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        ,

        {
            "questionText": "You plan to move a distributed on-premises app named App1 to an Azure subscription. After the planned move, App1 will be hosted on several Azure virtual machines. You need to ensure that App1 always runs on at least eight virtual machines during planned Azure maintenance. What should you create?",
            "answerOptions": [
                { "answerText": "A. one virtual machine scale set that has 10 virtual machines instances", "isCorrect": false, "isChecked": false },
                { "answerText": "B. one Availability Set that has three fault domains and one update domain", "isCorrect": false, "isChecked": false },
                { "answerText": "C. one Availability Set that has 10 update domains and one fault domain", "isCorrect": true, "isChecked": false },
                { "answerText": "D. one virtual machine scale set that has 12 virtual machines instances", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        , {
            "questionText": "You have an Azure virtual machine named VM1 that runs Windows Server 2016. You need to create an alert in Azure when more than two error events are logged to the System event log on VM1 within an hour. Solution: You create an event subscription on VM1. You create an alert in Azure Monitor and specify VM1 as the source Does this meet the goal?",
            "answerOptions": [
                { "answerText": "A. Yes", "isCorrect": false, "isChecked": false },
                { "answerText": "B. No", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        },
        {
            "questionText": "You have an Azure virtual machine named VM1 that was deployed by using a custom Azure Resource Manager template named ARM1.json. You receive a notification that VM1 will be affected by maintenance. You need to move VM1 to a different host immediately. Solution: From the Overview blade, you move the virtual machine to a different subscription. Does this meet the goal?",
            "answerOptions": [
                { "answerText": "A. Yes", "isCorrect": false, "isChecked": false },
                { "answerText": "B. No", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        },
        {
            "questionText": "You have an Azure virtual machine named VM1 that was deployed by using a custom Azure Resource Manager template named ARM1.json. You receive a notification that VM1 will be affected by maintenance. You need to move VM1 to a different host immediately. Solution: From the Redeploy blade, you click Redeploy. Does this meet the goal?",
            "answerOptions": [
                { "answerText": "A. Yes", "isCorrect": true, "isChecked": false },
                { "answerText": "B. No", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        },
        {
            "questionText": "You have an Azure virtual machine named VM1 that was deployed by using a custom Azure Resource Manager template named ARM1.json. You receive a notification that VM1 will be affected by maintenance. You need to move VM1 to a different host immediately. Solution: From the Update management blade, you click Enable. Does this meet the goal?",
            "answerOptions": [
                { "answerText": "A. Yes", "isCorrect": false, "isChecked": false },
                { "answerText": "B. No", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        },
        {
            "questionText": "You have an Azure subscription that contains a web app named webapp1. You need to add a custom domain named www.contoso.com to webapp1. What should you do first?",
            "answerOptions": [
                { "answerText": "A. Create a DNS record", "isCorrect": true, "isChecked": false },
                { "answerText": "B. Add a connection string", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Upload a certificate", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Stop webapp1", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        ,
        {
            questionText: "You have an Azure subscription that contains the resources shown in the following table ",
            answerOptions: [
                { "answerText": "A. Yes", "isCorrect": false, "isChecked": false },
                { "answerText": "B. No", "isCorrect": true, "isChecked": false }

            ],
            texteAFter: "VM1 connects to VNET1.You need to connect VM1 to VNET2. Solution: You move VM1 to RG2, and then you add a new network interface to VM1.   Does this meet the goal?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image3
        },

        {
            questionText: "You have an Azure subscription that contains the resources shown in the following table ",
            answerOptions: [
                { "answerText": "A. Yes", "isCorrect": true, "isChecked": false },
                { "answerText": "B. No", "isCorrect": false, "isChecked": false }

            ],
            texteAFter: "VM1 connects to VNET1.You need to connect VM1 to VNET2.Solution: You delete VM1. You recreate VM1, and then you create a new network interface for VM1 and connect it to VNET2.Does this meet the goal?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image3
        },
        {
            questionText: "You have an Azure subscription that contains the resources shown in the following table ",
            answerOptions: [
                { "answerText": "A. Yes", "isCorrect": false, "isChecked": false },
                { "answerText": "B. No", "isCorrect": true, "isChecked": false }

            ],
            texteAFter: "VM1 connects to VNET1.You need to connect VM1 to VNET2.Solution: You turn off VM1, and then you add a new network interface to VM1. Does this meet the goal?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image3
        }
        ,

        {
            questionText: "You deploy an Azure Kubernetes Service (AKS) cluster named Cluster1 that uses the IP addresses shown in the following table. ",
            answerOptions: [
                { "answerText": "A. 131.107.2.1", "isCorrect": true, "isChecked": false },
                { "answerText": "B. 10.0.10.11", "isCorrect": false, "isChecked": false },
                { "answerText": "A. 172.17.7.1", "isCorrect": false, "isChecked": false },
                { "answerText": "C. 192.168.10.2. ", "isCorrect": true, "isChecked": false }
            ],
            texteAFter: "You need to provide internet users with access to the applications that run in Cluster1.Which IP address should you include in the DNS record for Cluster1?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image26
        }
        , {
            "questionText": "You have a deployment template named Template1 that is used to deploy 10 Azure web apps. You need to identify what to deploy before you deploy Template1. The solution must minimize Azure costs. What should you identify?",
            "answerOptions": [
                { "answerText": "A. Five Azure Application Gateways", "isCorrect": false, "isChecked": false },
                { "answerText": "B. One App Service plan", "isCorrect": true, "isChecked": false },
                { "answerText": "C. 10 App Service plans", "isCorrect": false, "isChecked": false },
                { "answerText": "D. One Azure Traffic Manager", "isCorrect": false, "isChecked": false },
                { "answerText": "E. One Azure Application Gateway", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }, {
            "questionText": "You have an Azure subscription that contains a virtual machine named VM1. VM1 hosts a line-of-business application that is available 24 hours a day. VM1 has one network interface and one managed disk. VM1 uses the D4s v3 size. You plan to make the following changes to VM1: Change the size to D8s v3. Add a 500-GB managed disk. Add the Puppet Agent extension. Enable Desired State Configuration Management. Which change will cause downtime for VM1?",
            "answerOptions": [
                { "answerText": "A. Enable Desired State Configuration Management", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Add a 500-GB managed disk", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Change the size to D8s v3", "isCorrect": true, "isChecked": false },
                { "answerText": "D. Add the Puppet Agent extension", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        },

        {
            questionText: "You have an app named App1 that runs on an Azure web app named webapp1.The developers at your company upload an update of App1 to a Git repository named Git1.Webapp1 has the deployment slots shown in the following table. ",
            answerOptions: [
                { "answerText": "A. Swap the slots", "isCorrect": true, "isChecked": false },
                { "answerText": "B. Deploy the App1 update to webapp1-prod, and then test the update", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Stop webapp1-prod", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Deploy the App1 update to webapp1-test, and then test the update", "isCorrect": false, "isChecked": false },
                { "answerText": "E. Stop webapp1-test", "isCorrect": true, "isChecked": false }
            ],
            texteAFter: "You need to ensure that the App1 update is tested before the update is made available to users.Which two actions should you perform? Each correct answer presents part of the solution.NOTE: Each correct selection is worth one point.",
            isMultiSelect: true, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image4
        }, {
            "questionText": "You need to record all the successful and failed connection attempts to VM1. Which three actions should you perform? Each correct answer presents part of the solution.",
            "answerOptions": [
                { "answerText": "A. Enable Azure Network Watcher in the East US Azure region.", "isCorrect": true, "isChecked": false },
                { "answerText": "B. Add an Azure Network Watcher connection monitor.", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Register the MicrosoftLogAnalytics provider.", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Create an Azure Storage account.", "isCorrect": false, "isChecked": false },
                { "answerText": "E. Register the Microsoft.Insights resource provider.", "isCorrect": true, "isChecked": false },
                { "answerText": "F. Enable Azure Network Watcher flow logs.", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": true,
            "userAnswer": null
        }
        , {
            "questionText": "You need to deploy an Azure virtual machine scale set that contains five instances as quickly as possible. What should you do?",
            "answerOptions": [
                { "answerText": "A. Deploy five virtual machines. Modify the Availability Zones settings for each virtual machine.", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Deploy five virtual machines. Modify the Size setting for each virtual machine.", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Deploy one virtual machine scale set that is set to VM (virtual machines) orchestration mode.", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Deploy one virtual machine scale set that is set to ScaleSetVM orchestration mode.", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }, {
            questionText: "You plan to create the Azure web apps shown in the following table.. ",
            answerOptions: [
                { "answerText": "A. 1", "isCorrect": true, "isChecked": false },
                { "answerText": "B. 2", "isCorrect": false, "isChecked": false },
                { "answerText": "C. 3", "isCorrect": false, "isChecked": false },
                { "answerText": "D. 4", "isCorrect": false, "isChecked": false },

            ],
            texteAFter: "What is the minimum number of App Service plans you should create for the web apps?",
            isMultiSelect: true, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image5
        },
        {
            "questionText": "You have an Azure subscription named Subscription1. Subscription1 contains a resource group named RG1. RG1 contains resources that were deployed by using templates. You need to view the date and time when the resources were created in RG1. Solution: From the Subscriptions blade, you select the subscription, and then click Programmatic deployment. Does this meet the goal?",
            "answerOptions": [
                { "answerText": "A. Yes", "isCorrect": false, "isChecked": false },
                { "answerText": "B. No", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        },
        {
            questionText: "You have an Azure subscription that contains the resources shown in the following table. ",
            answerOptions: [
                { "answerText": "A. Yes", "isCorrect": false, "isChecked": false },
                { "answerText": "B. No", "isCorrect": true, "isChecked": false }

            ],
            texteAFter: "VM1 connects to VNET1.You need to connect VM1 to VNET2.Solution: You create a new network interface, and then you add the network interface to VM1.Does this meet the goal?",
            isMultiSelect: true, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image6
        },
        {
            questionText: "You have an Azure Active Directory (Azure AD) tenant named adatum.com that contains the users shown in the following table. ",
            answerOptions: [
                { "answerText": "A. User1 only", "isCorrect": false, "isChecked": false },
                { "answerText": "B. User2 only", "isCorrect": false, "isChecked": false },
                { "answerText": "C. User1 and User2 only", "isCorrect": true, "isChecked": false },
                { "answerText": "D. User1, User2, and User3 only", "isCorrect": false, "isChecked": false },
                { "answerText": "E. User1, User2, User3, and User4, and User3 only", "isCorrect": true, "isChecked": false }

            ],
            texteAFter: "Adatum.com has the following con􀀁gurations:✑ Users may join devices to Azure AD is set to User1. ✑ Additional local administrators on Azure AD joined devices is set to None.You deploy Windows 10 to a computer named Computer1. User1 joins Computer1 to adatum.com.You need to identify the local Administrator group membership on Computer1.Which users are members of the local Administrators group?",
            isMultiSelect: true, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image7
        },

        {
            questionText: "You have an Azure subscription named Subscription1 that contains the resources shown in the following table.",
            answerOptions: [
                { answerText: "A. VM1 only", isCorrect: false, isChecked: false },
                { answerText: "B. VM3 and VMC only", isCorrect: true, isChecked: false },
                { answerText: "C. VM1, VM2, VM3, VMA, VMB, and VMC", isCorrect: false, isChecked: false },
                { answerText: "D. VM1, VM3, VMA, and VMC only", isCorrect: true, isChecked: false },
                { answerText: "D. VM1 and VM3 only", isCorrect: false, isChecked: false },

            ],
            text: "You create virtual machines in Subscription1 as shown in the following table.",
            texteAFter: "You plan to use Vault1 for the backup of as many virtual machines as possible. Which virtual machines can be backed up to Vault1?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image8,
            images: image9,
        }
        , {
            "questionText": "You have an Azure Kubernetes Service (AKS) cluster named AKS1. You need to con􀀁gure cluster autoscaler for AKS1. Which two tools should you use? Each correct answer presents a complete solution. NOTE: Each correct selection is worth one point.",
            "answerOptions": [
                { "answerText": "A. the kubectl command", "isCorrect": true, "isChecked": false },
                { "answerText": "B. the az aks command", "isCorrect": true, "isChecked": false },
                { "answerText": "C. the Set-AzVm cmdlet", "isCorrect": false, "isChecked": false },
                { "answerText": "D. the Azure portal", "isCorrect": false, "isChecked": false },
                { "answerText": "E. the Set-AzAks cmdlet", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": true,
            "userAnswer": null
        }
        , {
            "questionText": "You create the following resources in an Azure subscription: ✑ An Azure Container Registry instance named Registry1 ✑ An Azure Kubernetes Service (AKS) cluster named Cluster1 You create a container image named App1 on your administrative workstation. You need to deploy App1 to Cluster1. What should you do 􀀁rst?",
            "answerOptions": [
                { "answerText": "A. Run the docker push command.", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Create an App Service plan.", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Run the az acr build command.", "isCorrect": true, "isChecked": false },
                { "answerText": "D. Run the az aks create command.", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        ,
        {
            questionText: "You have an Azure subscription that contains the resources shown in the following table. ",
            answerOptions: [
                { "answerText": "A. Proximity2 only", "isCorrect": true, "isChecked": false },
                { "answerText": "B. imity1, Proximity2, and Proximity3", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Proximity1 only", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Proximity1 and Proximity3 only", "isCorrect": false, "isChecked": false },


            ],
            texteAFter: "You need to con􀀁gure a proximity placement group for VMSS1.Which proximity placement groups should you use?",
            isMultiSelect: true, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image10
        }, {
            "questionText": "You have an Azure subscription named Subscription1. Subscription1 contains a resource group named RG1. RG1 contains resources that were deployed by using templates. You need to view the date and time when the resources were created in RG1. Solution: From the Subscriptions blade, you select the subscription, and then click Resource providers. Does this meet the goal?",
            "answerOptions": [
                { "answerText": "A. Yes", "isCorrect": false, "isChecked": false },
                { "answerText": "B. No", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }, {
            "questionText": "You have an Azure subscription named Subscription1. Subscription1 contains a resource group named RG1. RG1 contains resources that were deployed by using templates. You need to view the date and time when the resources were created in RG1. Solution: From the RG1 blade, you click Automation script. Does this meet the goal?",
            "answerOptions": [
                { "answerText": "A. Yes", "isCorrect": false, "isChecked": false },
                { "answerText": "B. No", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        , {
            "questionText": "You have an Azure subscription named Subscription1. Subscription1 contains a resource group named RG1. RG1 contains resources that were deployed by using templates. You need to view the date and time when the resources were created in RG1. Solution: From the RG1 blade, you click Deployments. Does this meet the goal?",
            "answerOptions": [
                { "answerText": "A. Yes", "isCorrect": true, "isChecked": false },
                { "answerText": "B. No", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }, {
            "questionText": "You have an Azure subscription named Subscription1. You deploy a Linux virtual machine named VM1 to Subscription1. You need to monitor the metrics and the logs of VM1. What should you use?",
            "answerOptions": [
                { "answerText": "A. Azure HDInsight", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Linux Diagnostic Extension (LAD) 3.0", "isCorrect": true, "isChecked": false },
                { "answerText": "C. the AzurePerformanceDiagnostics extension", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Azure Analysis Services", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        },
        {
            "questionText": "You plan to deploy three Azure virtual machines named VM1, VM2, and VM3. The virtual machines will host a web app named App1. You need to ensure that at least two virtual machines are available if a single Azure datacenter becomes unavailable. What should you deploy?",
            "answerOptions": [
                { "answerText": "A. all three virtual machines in a single Availability Zone", "isCorrect": false, "isChecked": false },
                { "answerText": "B. all virtual machines in a single Availability Set", "isCorrect": false, "isChecked": false },
                { "answerText": "C. each virtual machine in a separate Availability Zone", "isCorrect": true, "isChecked": false },
                { "answerText": "D. each virtual machine in a separate Availability Set", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        , {
            "questionText": "You have an Azure virtual machine named VM1 that runs Windows Server 2019. You save VM1 as a template named Template1 to the Azure Resource Manager library. You plan to deploy a virtual machine named VM2 from Template1. What can you con􀀁gure during the deployment of VM2?",
            "answerOptions": [
                { "answerText": "A. operating system", "isCorrect": false, "isChecked": false },
                { "answerText": "B. administrator username", "isCorrect": true, "isChecked": false },
                { "answerText": "C. virtual machine size", "isCorrect": false, "isChecked": false },
                { "answerText": "D. resource group", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }, {
            "questionText": "You have an Azure subscription that contains an Azure virtual machine named VM1. VM1 runs a financial reporting app named App1 that does not support multiple active instances. At the end of each month, CPU usage for VM1 peaks when App1 runs. You need to create a scheduled runbook to increase the processor performance of VM1 at the end of each month. What task should you include in the runbook?",
            "answerOptions": [
                { "answerText": "A. Add the Azure Performance Diagnostics agent to VM1.", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Modify the VM size property of VM1.", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Add VM1 to a scale set.", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Increase the vCPU quota for the subscription.", "isCorrect": false, "isChecked": false },
                { "answerText": "E. Add a Desired State Configuration (DSC) extension to VM1.", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }, {
            "questionText": "You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource Manager template. You need to ensure that NGINX is available on all the virtual machines after they are deployed. What should you use?",
            "answerOptions": [
                { "answerText": "A. Deployment Center in Azure App Service", "isCorrect": false, "isChecked": false },
                { "answerText": "B. A Desired State Configuration (DSC) extension", "isCorrect": true, "isChecked": false },
                { "answerText": "C. the New-AzConfigurationAssignment cmdlet", "isCorrect": false, "isChecked": false },
                { "answerText": "D. a Microsoft Intune device configuration profile", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }, {
            "questionText": "You have an Azure virtual machine named VM1 that runs Windows Server 2019. The VM was deployed using default drive settings. You sign in to VM1 as a user named User1 and perform the following actions: - Create files on drive C. - Create files on drive D. - Modify the screen saver timeout. - Change the desktop background. You plan to redeploy VM1. Which changes will be lost after you redeploy VM1?",
            "answerOptions": [
                { "answerText": "A. the modified screen saver timeout", "isCorrect": false, "isChecked": false },
                { "answerText": "B. the new desktop background", "isCorrect": false, "isChecked": false },
                { "answerText": "C. the new files on drive D", "isCorrect": true, "isChecked": false },
                { "answerText": "D. the new files on drive C", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        },
        {
            questionText: "You have an Azure subscription. You have an on-premises virtual machine named VM1. The settings for VM1 are shown in the exhibit. (Click the Exhibit tab.) You need to ensure that you can use the disks attached to VM1 as a template for Azure virtual machines. What should you modify on VM1? ",
            answerOptions: [
                { "answerText": "A. the memory", "isCorrect": false, "isChecked": false },
                { "answerText": "B. the network adapters", "isCorrect": false, "isChecked": false },
                { "answerText": "C. the hard drive", "isCorrect": true, "isChecked": false },
                { "answerText": "D. the processor", "isCorrect": false, "isChecked": false },
                { "answerText": "E. Integration Services", "isCorrect": false, "isChecked": false },

            ],
            texteAFter: "You need to ensure that you can use the disks attached to VM1 as a template for Azure virtual machines.What should you modify on VM1?",
            isMultiSelect: true, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image11
        }, {
            questionText: "You have an Azure subscription named Subscription1 that is used by several departments at your company. Subscription1 contains the resourcesin the following table: ",
            answerOptions: [
                { "answerText": "A. VM1", "isCorrect": false, "isChecked": false },
                { "answerText": "B. RG1", "isCorrect": true, "isChecked": false },
                { "answerText": "C. storage2", "isCorrect": false, "isChecked": false },
                { "answerText": "D. container1", "isCorrect": false, "isChecked": false },

            ],
            texteAFter: "You need to ensure that you can use the disks attached to VM1 as a template for Azure virtual machines.What should you modify on VM1?",
            isMultiSelect: true, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image12
        }
        , {
            questionText: "You have an Azure web app named App1. App1 has the deployment slots shown in the following  table: ",
            answerOptions: [
                { "answerText": "A. Redeploy App1", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Swap the slots", "isCorrect": true, "isChecked": false },
                { "answerText": "C. Clone App1", "isCorrect": false, "isChecked": false },
                { "answerText": "D.Restore the backup of App1", "isCorrect": false, "isChecked": false },

            ],
            texteAFter: "In webapp1-test, you test several changes to App1. You back up App1.You swap webapp1-test for webapp1-prod and discover that App1 is experiencing performance issues.You need to revert to the previous version of App1 as quickly as possible.What should you do?",
            isMultiSelect: true, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image13
        }
        , {
            "questionText": "You plan to back up an Azure virtual machine named VM1. You discover that the Backup Pre-Check status displays a status of Warning. What is a possible cause of the Warning status?",
            "answerOptions": [
                { "answerText": "A. VM1 is stopped.", "isCorrect": false, "isChecked": false },
                { "answerText": "B. VM1 does not have the latest version of the Azure VM Agent (WaAppAgent.exe) installed.", "isCorrect": true, "isChecked": false },
                { "answerText": "C. VM1 has an unmanaged disk.", "isCorrect": false, "isChecked": false },
                { "answerText": "D. A Recovery Services vault is unavailable.", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        },
        {
            "questionText": "You have an Azure virtual machine named VM1. VM1 was deployed by using a custom Azure Resource Manager template named ARM1.json. You receive a notification that VM1 will be affected by maintenance. You need to move VM1 to a different host immediately. Solution: From the Overview blade, you move the virtual machine to a different resource group. Does this meet the goal?",
            "answerOptions": [
                { "answerText": "A. Yes", "isCorrect": false, "isChecked": false },
                { "answerText": "B. No", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        },
        {
            "questionText": "You have an Azure virtual machine named VM1 that runs Windows Server 2016. You need to create an alert in Azure when more than two error events are logged to the System event log on VM1 within an hour. Solution: You create an Azure Log Analytics workspace and configure the Agent configuration settings. You install the Microsoft Monitoring Agent on VM1. You create an alert in Azure Monitor and specify the Log Analytics workspace as the source. Does this meet the goal?",
            "answerOptions": [
                { "answerText": "A. Yes", "isCorrect": true, "isChecked": false },
                { "answerText": "B. No", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }, {
            questionText: "You have an Azure web app named App1. App1 has the deployment slots shown in the following  table: You have web apps in the West US, Central US and East US Azure regions.You have the App Service plans shown in the following table.",
            answerOptions: [
                { "answerText": "A. West US, Central US, or East US", "isCorrect": true, "isChecked": false },
                { "answerText": "B. Central US only", "isCorrect": false, "isChecked": false },
                { "answerText": "C. East US only", "isCorrect": false, "isChecked": false },
                { "answerText": "D. West US only", "isCorrect": false, "isChecked": false },

            ],
            texteAFter: "You plan to create an additional App Service plan named ASP5 that will use the Linux operating system.You need to identify in which of the currently used locations you can deploy ASP5.What should you recommend?",
            isMultiSelect: true, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image14
        }
        , {
            "questionText": "You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource Manager template. You need to ensure that NGINX is available on all the virtual machines after they are deployed. What should you use?",
            "answerOptions": [
                { "answerText": "A. the New-AzCon􀀁gurationAssignment cmdlet", "isCorrect": false, "isChecked": false },
                { "answerText": "B. a Desired State Con􀀁guration (DSC) extension", "isCorrect": true, "isChecked": false },
                { "answerText": "C. Azure Active Directory (Azure AD) Application Proxy", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Azure Application Insights", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }, {
            "questionText": "You deploy an Azure Kubernetes Service (AKS) cluster named AKS1. You need to deploy a YAML 􀀁le to AKS1. Solution: From Azure Cloud Shell, you run az aks. Does this meet the goal?",
            "answerOptions": [
                { "answerText": "A. Yes", "isCorrect": false, "isChecked": false },
                { "answerText": "B. No", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        , {
            "questionText": "You have an Azure virtual machine named VM1 that runs Windows Server 2016. You need to create an alert in Azure when more than two error events are logged to the System event log on VM1 within an hour. Solution: You create an Azure Log Analytics workspace and con􀀁gure the data settings. You add the Microsoft Monitoring Agent VM extension to VM1. You create an alert in Azure Monitor and specify the Log Analytics workspace as the source. Does this meet the goal?",
            "answerOptions": [
                { "answerText": "A. Yes", "isCorrect": false, "isChecked": false },
                { "answerText": "B. No", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        , {
            "questionText": "You have an Azure virtual machine named VM1 that runs Windows Server 2016. You need to create an alert in Azure when more than two error events are logged to the System event log on VM1 within an hour. Solution: You create an Azure Log Analytics workspace and con􀀁gure the data settings. You install the Microsoft Monitoring Agent on VM1. You create an alert in Azure Monitor and specify the Log Analytics workspace as the source. Does this meet the goal?",
            "answerOptions": [
                { "answerText": "A. Yes", "isCorrect": true, "isChecked": false },
                { "answerText": "B. No", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        },


        {
            questionText: "You have an Azure subscription that contains the resources shown in the following table.",
            answerOptions: [
                { answerText: "A. From VM1, install the Windows Server Backup feature.", isCorrect: false, isChecked: false },
                { answerText: "B. From VM2, install the Microsoft Azure Recovery Services Agent.", isCorrect: true, isChecked: false },
                { answerText: "C. From VM1, install the Microsoft Azure Recovery Services Agent.", isCorrect: false, isChecked: false },
                { answerText: "D. From VM2, install the Windows Server Backup feature.", isCorrect: false, isChecked: false },


            ],
            text: "All virtual machines run Windows Server 2016.On VM1, you back up a folder named Folder1 as shown in the following exhibit.",
            texteAFter: "You plan to restore the backup to a different virtual machine.You need to restore the backup to VM2.What should you do 􀀁rst?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image22,
            images: image23,
        }
        ,



        {
            questionText: "You have an Azure subscription named Subscription1 that contains the resources shown in the following table.",
            answerOptions: [
                { "answerText": "A. Yes", "isCorrect": true, "isChecked": false },
                { "answerText": "B. No ", "isCorrect": false, "isChecked": false },

            ],
            texteAFter: "Subscription1 also includes a virtual network named VNET2. VM1 connects to a virtual network named VNET2 by using a network interfacenamed NIC1.You need to create a new network interface named NIC2 for VM1. Solution: You create NIC2 in RG1 and West US. Does this meet the goal?",
            isMultiSelect: true, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image15
        },
        {
            questionText: "You have an Azure subscription named Subscription1 that contains the resources shown in the following table.",
            answerOptions: [
                { "answerText": "A. Yes", "isCorrect": false, "isChecked": false },
                { "answerText": "B. No ", "isCorrect": true, "isChecked": false },

            ],
            texteAFter: "Subscription1 also includes a virtual network named VNET2. VM1 connects to a virtual network named VNET2 by using a network interfacenamed NIC1.You need to create a new network interface named NIC2 for VM1.Solution: You create NIC2 in RG2 and Central US.Does this meet the goal?",
            isMultiSelect: true, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image15
        }
        ,
        {
            questionText: "You have an Azure subscription named Subscription1 that contains the resources shown in the following table.",
            answerOptions: [
                { "answerText": "A. Yes", "isCorrect": true, "isChecked": false },
                { "answerText": "B. No ", "isCorrect": false, "isChecked": false },

            ],
            texteAFter: "Subscription1 also includes a virtual network named VNET2. VM1 connects to a virtual network named VNET2 by using a network interfacenamed NIC1.You need to create a new network interface named NIC2 for VM1.Solution: You create NIC2 in RG2 and West US.Does this meet the goal?",
            isMultiSelect: true, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image15
        }
        ,
        {
            questionText: "You develop the following Azure Resource Manager (ARM) template to create a resource group and deploy an Azure Storage account to theresource group.",
            answerOptions: [
                { "answerText": "A. New-AzResource", "isCorrect": true, "isChecked": false },
                { "answerText": "B. New-AzResourceGroupDeployment ", "isCorrect": true, "isChecked": false },
                { "answerText": "C. New-AzTenantDeployment", "isCorrect": false, "isChecked": false },
                { "answerText": "D. New-AzDeployment ", "isCorrect": false, "isChecked": false }
            ],
            texteAFter: "Which cmdlet should you run to deploy the template?",
            isMultiSelect: true, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image16
        }, {
            "questionText": "You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource Manager template. You need to ensure that NGINX is available on all the virtual machines after they are deployed. What should you use?",
            "answerOptions": [
                { "answerText": "A. the Publish-AzVMDscCon􀀁guration cmdlet", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Azure Application Insights", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Azure Custom Script Extension", "isCorrect": true, "isChecked": false },
                { "answerText": "D. a Microsoft Endpoint Manager device con􀀁guration pro􀀁le", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        , {
            "questionText": "You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource Manager template. You need to ensure that NGINX is available on all the virtual machines after they are deployed. What should you use?",
            "answerOptions": [
                { "answerText": "A. Azure Custom Script Extension", "isCorrect": true, "isChecked": false },
                { "answerText": "B. Deployment Center in Azure App Service", "isCorrect": false, "isChecked": false },
                { "answerText": "C. the Publish-AzVMDscCon􀀁guration cmdlet", "isCorrect": false, "isChecked": false },
                { "answerText": "D. the New-AzCon􀀁gurationAssignment cmdlet", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        },
        {
            questionText: "You have an Azure subscription.You plan to deploy the Azure container instances shown in the following table.",
            answerOptions: [
                { "answerText": "A. Instance1 only", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Instance2 only ", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Instance1 and Instance2 only", "isCorrect": true, "isChecked": false },
                { "answerText": "D. Instance3 and Instance4 only ", "isCorrect": false, "isChecked": false },
            ],
            texteAFter: "Subscription1 also includes a virtual network named VNET2. VM1 connects to a virtual network named VNET2 by using a network interfacenamed NIC1.You need to create a new network interface named NIC2 for VM1.Solution: You create NIC2 in RG2 and West US.Does this meet the goal?",
            isMultiSelect: true, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image17
        }, {
            "questionText": "You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource Manager template. You need to ensure that NGINX is available on all the virtual machines after they are deployed. What should you use?",
            "answerOptions": [
                { "answerText": "A. Azure Custom Script Extension", "isCorrect": true, "isChecked": false },
                { "answerText": "B. Deployment Center in Azure App Service", "isCorrect": false, "isChecked": false },
                { "answerText": "C. the New-AzCon􀀁gurationAssignment cmdlet", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Azure AD Application Proxy", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        },
        {
            questionText: "You have an Azure subscription that has the public IP addresses shown in the following table.",
            answerOptions: [
                { "answerText": "A. IP2 only", "isCorrect": false, "isChecked": false },
                { "answerText": "B. IP1 and IP2 only ", "isCorrect": false, "isChecked": false },
                { "answerText": "C. IP1, IP2, and IP5 only", "isCorrect": false, "isChecked": false },
                { "answerText": "D. IP1, IP2, IP4, and IP5 only ", "isCorrect": true, "isChecked": false },
            ],
            texteAFter: "Subscription1 also includes a virtual network named VNET2. VM1 connects to a virtual network named VNET2 by using a network interfacenamed NIC1.You need to create a new network interface named NIC2 for VM1.Solution: You create NIC2 in RG2 and West US.Does this meet the goal?",
            isMultiSelect: true, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image18
        },
        {
            questionText: "You plan to create the Azure web apps shown in the following table.",
            answerOptions: [
                { "answerText": "A. 1", "isCorrect": false, "isChecked": false },
                { "answerText": "B. 2 ", "isCorrect": true, "isChecked": false },
                { "answerText": "C. 3", "isCorrect": false, "isChecked": false },
                { "answerText": "D. 4 ", "isCorrect": false, "isChecked": false },
            ],
            texteAFter: "What is the minimum number of App Service plans you should create for the web apps?",
            isMultiSelect: true, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image19
        },
        {
            questionText: "You have an Azure App Service app named App1 that contains two running instances.You have an autoscale rule con􀀁gured as shown in the following exhibit.",
            answerOptions: [
                { "answerText": "A. 2", "isCorrect": true, "isChecked": false },
                { "answerText": "B. 3 ", "isCorrect": false, "isChecked": false },
                { "answerText": "C. 4", "isCorrect": false, "isChecked": false },
                { "answerText": "D. 5 ", "isCorrect": false, "isChecked": false },
            ],
            texteAFter: "For the Instance limits scale condition setting, you set Maximum to 5.During a 30-minute period, App1 uses 80 percent of the available memory. What is the maximum number of instances for App1 during the 30-minute period?",
            isMultiSelect: true, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image20
        }, {
            "questionText": "You have an Azure AD tenant named contoso.com. You have an Azure subscription that contains an Azure App Service web app named App1 and an Azure key vault named KV1. KV1 contains a wildcard certi􀀁cate for contoso.com. You have a user named user1@contoso.com that is assigned the Owner role for App1 and KV1. You need to con􀀁gure App1 to use the wildcard certi􀀁cate of KV1. What should you do 􀀁rst?",
            "answerOptions": [
                { "answerText": "A. Create an access policy for KV1 and assign the Microsoft Azure App Service principal to the policy.", "isCorrect": true, "isChecked": false },
                { "answerText": "B. Assign a managed user identity to App1.", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Con􀀁gure KV1 to use the role-based access control (RBAC) authorization system.", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Create an access policy for KV1 and assign the policy to User1.", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        },
        {
            questionText: "You have an Azure subscription. You plan to deploy the resources shown in the following table.",
            answerOptions: [
                { "answerText": "A. VNET1", "isCorrect": false, "isChecked": false },
                { "answerText": "B. NIC1", "isCorrect": true, "isChecked": false },
                { "answerText": "C. IP1", "isCorrect": false, "isChecked": false },
                { "answerText": "D. NSG1.  ", "isCorrect": false, "isChecked": false },
            ],
            texteAFter: "You need to create a single Azure Resource Manager (ARM) template that will be used to deploy the resources.Which resource should be added to the dependsOn section for VM1?",
            isMultiSelect: true, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image21
        },
        {
            questionText: "You have an Azure subscription.You create the following Azure Resource Manager (ARM) template named Template.json.",
            answerOptions: [
                { "answerText": "A. New-AzSubscriptionDeployment", "isCorrect": false, "isChecked": false },
                { "answerText": "B. New-AzManagementGroupDeployment", "isCorrect": true, "isChecked": false },
                { "answerText": "C. New-AzResourceGroupDeployment", "isCorrect": false, "isChecked": false },
                { "answerText": "D. New-AzTenantDeployment ", "isCorrect": false, "isChecked": false },
            ],
            texteAFter: "You need to deploy Template.json. Which PowerShell cmdlet should you run from Azure Cloud Shell?",
            isMultiSelect: true, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image24
        }, {
            "questionText": "You have an Azure subscription that contains a resource group named RG1. You plan to create a storage account named storage1. You have a Bicep 􀀁le named File1. You need to modify File1 so that it can be used to automate the deployment of storage1 to RG1. Which property should you modify?",
            "answerOptions": [
                { "answerText": "A. kind", "isCorrect": true, "isChecked": false },
                { "answerText": "B. scope", "isCorrect": false, "isChecked": false },
                { "answerText": "C. sku", "isCorrect": false, "isChecked": false },
                { "answerText": "D. location", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        ,
        {
            questionText: "You have an Azure subscription that contains the resources shown in the following table..",
            answerOptions: [
                { "answerText": "A. Proximity2 only", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Proximity1, Proximity2, and Proximity3", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Proximity1 only", "isCorrect": true, "isChecked": false },
                { "answerText": "D. Proximity1 and Proximity3 only  ", "isCorrect": false, "isChecked": false },
            ],
            texteAFter: "You need to con􀀁gure a proximity placement group for VMSS1.Which proximity placement groups should you use?",
            isMultiSelect: true, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image25
        },

        {
            questionText: "You have an Azure subscription named Subscription1 that contains the resources shown in the following table..",
            answerOptions: [
                { answerText: "A. VM1 only", isCorrect: false, isChecked: false },
                { answerText: "B. VM3 and VMC only", isCorrect: false, isChecked: false },
                { answerText: "C. VM1, VM2, VM3, VMA, VMB, and VMC", isCorrect: false, isChecked: false },
                { answerText: "D. VM1, VM3, VMA, and VMC only", isCorrect: true, isChecked: false },
                { answerText: "E. VM1 and VM3 only", isCorrect: false, isChecked: false },

            ],
            text: "You create virtual machines in Subscription1 as shown in the following table.",
            texteAFter: "You plan to use Vault1 for the backup of as many virtual machines as possible. Which virtual machines can be backed up to Vault1?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image8,
            images: image9,
        }, {
            "questionText": "You have an Azure subscription that contains an Azure container registry named ContReg1. You enable the Admin user for ContReg1. Which username can you use to sign in to ContReg1?",
            "answerOptions": [
                { "answerText": "A. root", "isCorrect": false, "isChecked": false },
                { "answerText": "B. admin", "isCorrect": true, "isChecked": false },
                { "answerText": "C. administrator", "isCorrect": false, "isChecked": false },
                { "answerText": "D. ContReg1", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }












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

        const messages = [];

        for (let i = startIndex; i < endIndex; i++) {
            const question = questions[i];
            const userAnswer = userAnswers[i];

            const selectedAnswerIndices = Object.keys(userAnswer).filter(index => userAnswer[index]);
            const selectedAnswers = selectedAnswerIndices.map(index => question.answerOptions[index]);

            const correctAnswers = selectedAnswers.filter(answer => answer.isCorrect);
            const incorrectAnswers = selectedAnswers.filter(answer => !answer.isCorrect);

            const message = [];

            if (correctAnswers.length > 0) {
                const correctAnswerText = correctAnswers.map(answer => (
                    <span key={answer.id} className="text-success">"{answer.answerText}"</span>
                ));
                message.push(
                    <h5 key={`correct_${i}`} className="text-success">
                        {correctAnswerText} {correctAnswerText.length > 1 ? 'are' : 'is'} Correct answer{correctAnswers.length > 1 ? 's' : ''}.
                    </h5>
                );
            }

            if (incorrectAnswers.length > 0) {
                const incorrectAnswerText = incorrectAnswers.map(answer => (
                    <span key={answer.id} className="text-danger">"{answer.answerText}"</span>
                ));
                const correctAnswerText = question.answerOptions
                    .filter(option => option.isCorrect)
                    .map(option => (
                        <span key={option.id} className="text-success">"{option.answerText}"</span>
                    ));
                message.push(
                    <h5 key={`incorrect_${i}`} >
                        <p className="text-danger">{incorrectAnswerText} {incorrectAnswerText.length > 1 ? 'are' : 'is'}  Incorrect answers:</p> The correct answer{incorrectAnswers.length > 1 ? 's' : ''} {correctAnswerText.length > 1 ? 'are' : 'is'}: {correctAnswerText}.
                    </h5>
                );
            }

            messages.push(<div key={`question_${i}`}>{message}</div>);
        }

        setAffiche(messages);
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
            <h4 className="text-danger">Topic 4 :Select the correct answer</h4> <br />
            <h5 className="text-warning"> Attention  questions 5,7,8,10,11,23,24,27,33,37,38,30,48,53,54,57,60,63,65,68,73,78,80,81,82,83,84,86,87,86,87,91,92,93,95,97,102,104 of topic 4 of the pdf   are missing from this MCQ</h5> <br />
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

export default QuizzApp4;
