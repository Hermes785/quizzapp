import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import image1 from "./images/question6.png"
import image2 from "./images/question8.png"
import image3 from "./images/question15.png"
import image4 from "./images/question24.png"
import image5 from "./images/question39.png"
import image6 from "./images/question58.png"
import image7 from "./images/question62.png"
import image8 from "./images/question69.png"
import image9 from "./images/question691.png"
import image10 from "./images/question74.png"
import image11 from "./images/question78.png"
import image12 from "./images/question88.png"
import image13 from "./images/question90.png"
import image14 from "./images/question96.png"
import image15 from "./images/question99.png"
import image16 from "./images/question101png.png"
const QuizzApp2 = () => {
    // Définition des questions avec useState
    const [questions, setQuestions] = useState([
        {

            questionText: "You have an Azure subscription that contains an Azure Active Directory (Azure AD) tenant named contoso.com and an Azure Kubernetes Service(AKS) cluster named AKS1.An administrator reports that she is unable to grant access to AKS1 to the users in contoso.com. You need to ensure that access to AKS1 can be granted to the contoso.com users. What should you do 􀀁rst?",
            answerOptions: [
                { answerText: "A. From contoso.com, modify the Organization relationships settings", isCorrect: false, isChecked: false },
                { answerText: "B. From contoso.com, create an OAuth 2.0 authorization endpoint.", isCorrect: true, isChecked: false },
                { answerText: "C. Recreate AKS1", isCorrect: false, isChecked: false },
                { answerText: "D.From AKS1, create a namespace", isCorrect: false, isChecked: false }
            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        },
        {
            questionText: "You have a Microsoft 365 tenant and an Azure Active Directory (Azure AD) tenant named contoso.com.You plan to grant three users named User1, User2, and User3 access to a temporary Microsoft SharePoint document library named Library1.You need to create groups for the users. The solution must ensure that the groups are deleted automatically after 180 days.Which two groups should you create? Each correct answer presents a complete solution.NOTE: Each correct selection is worth one point.",
            answerOptions: [
                { answerText: "A. a Microsoft 365 group that uses the Assigned membership type", isCorrect: true, isChecked: false },
                { answerText: "B. a Security group that uses the Assigned membership type", isCorrect: false, isChecked: false },
                { answerText: "C. a Microsoft 365 group that uses the Dynamic User membership type", isCorrect: true, isChecked: false },
                { answerText: "D. a Security group that uses the Dynamic User membership type", isCorrect: false, isChecked: false },
                { answerText: "E. a Security group that uses the Dynamic Device membership type", isCorrect: false, isChecked: false },

            ],
            isMultiSelect: true, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        },
        {
            questionText: "You have an Azure policy as shown in the following exhibit: ",
            answerOptions: [
                { answerText: "A. You are prevented from creating Azure SQL servers anywhere in Subscription 1.", isCorrect: false, isChecked: false },
                { answerText: "B. You can create Azure SQL servers in ContosoRG1 only", isCorrect: true, isChecked: false },
                { answerText: "C. You are prevented from creating Azure SQL Servers in ContosoRG1 only.", isCorrect: false, isChecked: false },
                { answerText: "D. You can create Azure SQL servers in any resource group within Subscription 1.", isCorrect: false, isChecked: false },
            ],
            texteAFter: "What is the effect of the policy?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image1
        },
        {
            questionText: "You have an Azure subscription named AZPT1 that contains the resources shown in the following table: ",
            answerOptions: [
                { answerText: "A. VM1, storage1, VNET1, and VM1Managed only", isCorrect: false, isChecked: false },
                { answerText: "B. VM1 and VM1Managed only", isCorrect: false, isChecked: false },
                { answerText: "C. VM1, storage1, VNET1, VM1Managed, and RVAULT1.", isCorrect: true, isChecked: false },
                { answerText: "D. RVAULT1 only", isCorrect: false, isChecked: false },
            ],
            texteAFter: "You create a new Azure subscription named AZPT2.You need to identify which resources can be moved to AZPT2.Which resources should you identify?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image2
        },

        {
            questionText: "You recently created a new Azure subscription that contains a user named Admin1. Admin1 attempts to deploy an Azure Marketplace resource by using an Azure Resource Manager template. Admin1 deploys the template by usingAzure PowerShell and receives the following error message: `User failed validation to purchase resources. Error message: `Legal terms have not been accepted for this item on this subscription. To accept legal terms, please go to the Azure portal (http://go.microsoft.com/fwlink/?LinkId=534873 and con􀀁gure programmatic deployment for the Marketplace item or create it there for the 􀀁rst time.`You need to ensure that Admin1 can deploy the Marketplace resource successfully. What should you do?",
            answerOptions: [
                { answerText: "A. From Azure PowerShell, run the Set-AzApiManagementSubscription cmdlet", isCorrect: false, isChecked: false },
                { answerText: "B. From the Azure portal, register the Microsoft.Marketplace resource provider", isCorrect: false, isChecked: false },
                { answerText: "C. From Azure PowerShell, run the Set-AzMarketplaceTerms cmdlet", isCorrect: true, isChecked: false },
                { answerText: "D. From the Azure portal, assign the Billing administrator role to Admin1", isCorrect: false, isChecked: false },


            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        },

        {
            questionText: "You have an Azure Active Directory (Azure AD) tenant that contains 5,000 user accounts.You create a new user account named AdminUser1.You need to assign the User administrator administrative role to AdminUser1.What should you do from the user account properties?",
            answerOptions: [
                { answerText: "A. From the Licenses blade, assign a new license", isCorrect: false, isChecked: false },
                { answerText: "B. From the Directory role blade, modify the directory role", isCorrect: true, isChecked: false },
                { answerText: "C. From the Groups blade, invite the user account to a new group", isCorrect: true, isChecked: false },


            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        }
        ,

        {
            questionText: "You have an Azure Active Directory (Azure AD) tenant named contoso.onmicrosoft.com that contains 100 user accounts.You purchase 10 Azure AD Premium P2 licenses for the tenant.You need to ensure that 10 users can use all the Azure AD Premium features.What should you do?",
            answerOptions: [
                { answerText: "A. From the Licenses blade of Azure AD, assign a license", isCorrect: true, isChecked: false },
                { answerText: "B. From the Groups blade of each user, invite the users to a group", isCorrect: false, isChecked: false },
                { answerText: "C. From the Azure AD domain, add an enterprise application", isCorrect: false, isChecked: false },
                { answerText: "D. From the Directory role blade of each user, modify the directory role", isCorrect: true, isChecked: false }

            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        }
        ,

        {
            questionText: "You have an Azure subscription named Subscription1 and an on-premises deployment of Microsoft System Center Service Manager.Subscription1 contains a virtual machine named VYou need to ensure that an alert is set in Service Manager when the amount of available memory on VM1 is below 10 percent. What should you do 􀀁rst?",
            answerOptions: [
                { answerText: "A. Create an automation runbook", isCorrect: false, isChecked: false },
                { answerText: "B. Deploy a function app", isCorrect: false, isChecked: false },
                { answerText: "C. Deploy the IT Service Management Connector (ITSM)", isCorrect: true, isChecked: false },
                { answerText: "D. Create a noti􀀁cation", isCorrect: true, isChecked: false }

            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        }
        ,

        {
            questionText: "You sign up for Azure Active Directory (Azure AD) Premium P2.You need to add a user named admin1@contoso.com as an administrator on all the computers that will be joined to the Azure AD domain.What should you con􀀁gure in Azure AD?",
            answerOptions: [
                { answerText: "A. Device settings from the Devices blade", isCorrect: true, isChecked: false },
                { answerText: "B.Providers from the MFA Server blade", isCorrect: false, isChecked: false },
                { answerText: "C. User settings from the Users blade", isCorrect: false, isChecked: false },
                { answerText: "D. General settings from the Groups blade", isCorrect: true, isChecked: false }

            ],
            isMultiSelect: true, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        }
        ,
        {
            questionText: "You have an Azure subscription that contains a resource group named RG26.RG26 is set to the West Europe location and is used to create temporary resources for a project. RG26 contains the resources shown in thefollowing table. ",
            answerOptions: [
                { answerText: "A. Delete VM1", isCorrect: false, isChecked: false },
                { answerText: "B. Stop VM1", isCorrect: false, isChecked: false },
                { answerText: "C. Stop the backup of SQLDB01", isCorrect: true, isChecked: false },
                { answerText: "D. Delete sa001.", isCorrect: false, isChecked: false },
            ],
            texteAFter: "SQLDB01 is backed up to RGV1.When the project is complete, you attempt to delete RG26 from the Azure portal. The deletion fails.You need to delete RG26. What should you do 􀀁rst?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image3
        }
        ,

        {
            questionText: "You have an Azure subscription named Subscription1 that contains a virtual network named VNet1. VNet1 is in a resource group named RG1.Subscription1 has a user named User1. User1 has the following roles: ✑ Reader✑ Security Admin✑ Security Reader You need to ensure that User1 can assign the Reader role for VNet1 to other users. What should you do?",
            answerOptions: [
                { answerText: "A. Remove User1 from the Security Reader and Reader roles for Subscription1", isCorrect: false, isChecked: false },
                { answerText: "B. Assign User1 the User Access Administrator role for VNet1.", isCorrect: true, isChecked: false },
                { answerText: "C. Assign User1 the Network Contributor role for VNet1.", isCorrect: false, isChecked: false },
                { answerText: "D. Assign User1 the Network Contributor role for RG1", isCorrect: true, isChecked: false }

            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        }
        ,

        {
            questionText: "You have an Azure Active Directory (Azure AD) tenant named contosocloud.onmicrosoft.com.Your company has a public DNS zone for contoso.com.You add contoso.com as a custom domain name to Azure AD. You need to ensure that Azure can verify the domain name.Which type of DNS record should you create?",
            answerOptions: [
                { answerText: "A. MX", isCorrect: true, isChecked: false },
                { answerText: "B. NSEC.", isCorrect: false, isChecked: false },
                { answerText: "C. PTR", isCorrect: false, isChecked: false },
                { answerText: "D. RRSIG", isCorrect: true, isChecked: false }

            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        }
        ,

        {
            questionText: "You have an Azure Directory (Azure AD) tenant named Adatum and an Azure Subscription named Subscription1. Adatum contains a group namedDevelopers.Subscription1 contains a resource group named Dev.You need to provide the Developers group with the ability to create Azure logic apps in the Dev resource group.Solution: On Subscription1, you assign the DevTest Labs User role to the Developers group.Does this meet the goal?",
            answerOptions: [
                { answerText: "A. Yes", isCorrect: false, isChecked: false },
                { answerText: "B. No", isCorrect: true, isChecked: false },


            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        }
        ,

        {
            questionText: "You have an Azure Directory (Azure AD) tenant named Adatum and an Azure Subscription named Subscription1. Adatum contains a group named Developers.Subscription1 contains a resource group named Dev.You need to provide the Developers group with the ability to create Azure logic apps in the Dev resource group.Solution: On Subscription1, you assign the Logic App Operator role to the Developers group.Does this meet the goal?",
            answerOptions: [
                { answerText: "A. Yes", isCorrect: false, isChecked: false },
                { answerText: "B. No", isCorrect: true, isChecked: false },


            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        }
        ,

        {
            questionText: "You have an Azure Directory (Azure AD) tenant named Adatum and an Azure Subscription named Subscription1. Adatum contains a group namedDevelopers.Subscription1 contains a resource group named Dev.You need to provide the Developers group with the ability to create Azure logic apps in the Dev resource group.Solution: On Dev, you assign the Contributor role to the Developers group.Does this meet the goal?",
            answerOptions: [
                { answerText: "A. Yes", isCorrect: true, isChecked: false },
                { answerText: "B. No", isCorrect: false, isChecked: false },


            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        }
        ,

        {
            questionText: "You have an Azure subscription named Subscription1 that contains an Azure Log Analytics workspace named Workspace1.You need to view the error events from a table named Event.Which query should you run in Workspace1?",
            answerOptions: [
                { answerText: "A. Get-Event Event | where {$_.EventType == 'error'}", isCorrect: false, isChecked: false },
                { answerText: "B. search in (Event) 'error'", isCorrect: true, isChecked: false },
                { answerText: "C. select * from Event where EventType == 'error' ", isCorrect: false, isChecked: false },
                { answerText: "D. search in (Event) * | where EventType -eq 'error' ", isCorrect: false, isChecked: false }

            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        }
        ,
        {
            questionText: "You have an Azure subscription named Subscription1. Subscription1 contains the resource groups in the following table. ",
            answerOptions: [
                { answerText: "A, The App Service plan for WebApp1 remains in West Europe. Policy2 applies to WebApp1.", isCorrect: true, isChecked: false },
                { answerText: "B.The App Service plan for WebApp1 moves to North Europe. Policy2 applies to WebApp1", isCorrect: false, isChecked: false },
                { answerText: "C. The App Service plan for WebApp1 remains in West Europe. Policy1 applies to WebApp1", isCorrect: false, isChecked: false },
                { answerText: "D. The App Service plan for WebApp1 moves to North Europe. Policy1 applies to WebApp1", isCorrect: false, isChecked: false },
            ],
            texteAFter: "RG1 has a web app named WebApp1. WebApp1 is located in West Europe.You move WebApp1 to RG2.What is the effect of the move?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image4
        }
        ,

        {
            questionText: "You have an Azure subscription.Users access the resources in the subscription from either home or from customer sites. From home, users must establish a point-to-site VPN toaccess the Azure resources. The users on the customer sites access the Azure resources by using site-to-site VPNs. You have a line-of-business-app named App1 that runs on several Azure virtual machine. The virtual machines run Windows Server 2016. You need to ensure that the connections to App1 are spread across all the virtual machines.What are two possible Azure services that you can use? Each correct answer presents a complete solution.NOTE: Each correct selection is worth one point.",
            answerOptions: [
                { answerText: "A. an internal load balancer", isCorrect: true, isChecked: false },
                { answerText: "B. a public load balancer", isCorrect: false, isChecked: false },
                { answerText: "C. an Azure Content Delivery Network (CDN) ", isCorrect: false, isChecked: false },
                { answerText: "D. Reference:", isCorrect: false, isChecked: false },
                { answerText: "E. an Azure Application Gateway ", isCorrect: true, isChecked: false }

            ],
            isMultiSelect: true, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        }
        ,

        {
            questionText: "You have an Azure subscription.You have 100 Azure virtual machines.You need to quickly identify underutilized virtual machines that can have their service tier changed to a less expensive offering.Which blade should you use?",
            answerOptions: [
                { answerText: "A. Monitor", isCorrect: false, isChecked: false },
                { answerText: "B. Advisor", isCorrect: true, isChecked: false },
                { answerText: "C. Metrics ", isCorrect: false, isChecked: false },
                { answerText: "D. Customer insights", isCorrect: false, isChecked: false },


            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        }
        ,

        {
            questionText: "You have an Azure Active Directory (Azure AD) tenant named contoso.onmicrosoft.com.The User administrator role is assigned to a user named Admin1.An external partner has a Microsoft account that uses the user1@outlook.com sign in.Admin1 attempts to invite the external partner to sign in to the Azure AD tenant and receives the following error message: `Unable to invite user user1@outlook.com ' Generic authorization exception.'You need to ensure that Admin1 can invite the external partner to sign in to the Azure AD tenant. What should you do?",
            answerOptions: [
                { answerText: "A. From the Users settings blade, modify the External collaboration settings.", isCorrect: true, isChecked: false },
                { answerText: "B. From the Custom domain names blade, add a custom domain", isCorrect: false, isChecked: false },
                { answerText: "C. From the Organizational relationships blade, add an identity provider ", isCorrect: false, isChecked: false },
                { answerText: "D. From the Roles and administrators blade, assign the Security administrator role to Admin1", isCorrect: false, isChecked: false },


            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        }
        ,

        {
            questionText: "You have an Azure subscription linked to an Azure Active Directory tenant. The tenant includes a user account named User1.You need to ensure that User1 can assign a policy to the tenant root management group.What should you do?",
            answerOptions: [
                { answerText: "A. Assign the Owner role for the Azure Subscription to User1, and then modify the default conditional access policies", isCorrect: false, isChecked: false },
                { answerText: "B. Assign the Owner role for the Azure subscription to User1, and then instruct User1 to con􀀁gure access management for Azure resources", isCorrect: true, isChecked: false },
                { answerText: "C. Assign the Global administrator role to User1, and then instruct User1 to con􀀁gure access management for Azure resources ", isCorrect: false, isChecked: false },
                { answerText: "D. Create a new management group and delegate User1 as the owner of the new management group", isCorrect: false, isChecked: false },


            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        }
        ,

        {
            questionText: "You need to ensure that an Azure Active Directory (Azure AD) user named Admin1 is assigned the required role to enable Tra􀀂c Analytics for an Azure subscription.Solution: You assign the Network Contributor role at the subscription level to Admin1.Does this meet the goal?",
            answerOptions: [
                { answerText: "A. Yes", isCorrect: true, isChecked: false },
                { answerText: "B. No", isCorrect: false, isChecked: false },


            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        }
        ,

        {
            questionText: "You need to ensure that an Azure Active Directory (Azure AD) user named Admin1 is assigned the required role to enable Tra􀀂c Analytics for a Azure subscription.Solution: You assign the Owner role at the subscription level to Admin1.Does this meet the goal?",
            answerOptions: [
                { answerText: "A. Yes", isCorrect: true, isChecked: false },
                { answerText: "B. No", isCorrect: false, isChecked: false },


            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        }
        ,

        {
            questionText: "You need to ensure that an Azure Active Directory (Azure AD) user named Admin1 is assigned the required role to enable Tra􀀂c Analytics for anAzure subscription.Solution: You assign the Reader role at the subscription level to Admin1. Does this meet the goal?",
            answerOptions: [
                { answerText: "A. Yes", isCorrect: true, isChecked: false },
                { answerText: "B. No", isCorrect: false, isChecked: false },


            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        }
        ,

        {
            questionText: "You have an Azure subscription that contains a user named User1.You need to ensure that User1 can deploy virtual machines and manage virtual networks. The solution must use the principle of least privilege.Which role-based access control (RBAC) role should you assign to User1?",
            answerOptions: [
                { answerText: "A. Owner", isCorrect: false, isChecked: false },
                { answerText: "B. Virtual Machine Contributor", isCorrect: false, isChecked: false },
                { answerText: "C. Contributor ", isCorrect: true, isChecked: false },
                { answerText: "D. Virtual Machine Administrator Login", isCorrect: false, isChecked: false },

            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        }
        ,

        {
            questionText: "You have an Azure subscription named Subscription1 that contains an Azure virtual machine named VM1. VM1 is in a resource group named R  VM1 runs services that will be used to deploy resources to RG1. You need to ensure that a service running on VM1 can manage the resources in RG1 by using the identity of VM1.What should you do 􀀁rst?",
            answerOptions: [
                { answerText: "A. From the Azure portal, modify the Managed Identity settings of VM1", isCorrect: true, isChecked: false },
                { answerText: "B. From the Azure portal, modify the Access control (IAM) settings of RG1", isCorrect: false, isChecked: false },
                { answerText: "C. From the Azure portal, modify the Access control (IAM) settings of VM1 ", isCorrect: false, isChecked: false },
                { answerText: "D. From the Azure portal, modify the Policies settings of RG1", isCorrect: false, isChecked: false },

            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        }
        ,
        {
            questionText: "You have an Azure subscription that contains a resource group named TestRG.You use TestRG to validate an Azure deployment.TestRG contains the following resources: ",
            answerOptions: [
                { answerText: "A. Modify the backup con􀀁gurations of VM1 and modify the resource lock type of VNET1", isCorrect: false, isChecked: false },
                { answerText: "B. Remove the resource lock from VNET1 and delete all data in Vault1", isCorrect: false, isChecked: false },
                { answerText: "C. Turn off VM1 and remove the resource lock from VNET1", isCorrect: true, isChecked: false },
                { answerText: "D. Turn off VM1 and delete all data in Vault1", isCorrect: false, isChecked: false },
            ],
            texteAFter: "You need to delete TestRG.What should you do 􀀁rst?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image5
        }
        ,

        {
            questionText: "You have an Azure DNS zone named adatum.com.You need to delegate a subdomain named research.adatum.com to a different DNS server in Azure.What should you do?",
            answerOptions: [
                { answerText: "A.Create an NS record named research in the adatum.com zone.", isCorrect: true, isChecked: false },
                { answerText: "B. Create a PTR record named research in the adatum.com zone", isCorrect: false, isChecked: false },
                { answerText: "C. Modify the SOA record of adatum.com. ", isCorrect: false, isChecked: false },
                { answerText: "D. Create an A record named *.research in the adatum.com zone.", isCorrect: false, isChecked: false },

            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        }
        ,

        {
            questionText: "You have an Azure subscription named Subscription1 that contains an Azure Log Analytics workspace named Workspace1.You need to view the error events from a table named Event.Which query should you run in Workspace1?",
            answerOptions: [
                { answerText: "A. Get-Event Event | where {$_.EventType == 'error'}", isCorrect: false, isChecked: false },
                { answerText: "B. Event | search 'error'", isCorrect: true, isChecked: false },
                { answerText: "C. select * from Event where EventType == 'error' ", isCorrect: false, isChecked: false },
                { answerText: "D.search in (Event) * | where EventType ג€''eq ג€error ", isCorrect: false, isChecked: false }

            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        }
        ,

        {
            questionText: "You have a registered DNS domain named contoso.com.You create a public Azure DNS zone named contoso.com.You need to ensure that records created in the contoso.com zone are resolvable from the internet.What should you do?",
            answerOptions: [
                { answerText: "A. Create NS records in contoso.com.", isCorrect: false, isChecked: false },
                { answerText: "B. Modify the SOA record in the DNS domain registrar.", isCorrect: false, isChecked: false },
                { answerText: "C. Create the SOA record in contoso.com. ", isCorrect: false, isChecked: false },
                { answerText: "D. Modify the NS records in the DNS domain registrar..", isCorrect: true, isChecked: false },

            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        },

        {
            questionText: "You have an Azure Active Directory (Azure AD) tenant.You plan to delete multiple users by using Bulk delete in the Azure Active Directory admin center.You need to create and upload a 􀀁le for the bulk delete.Which user attributes should you include in the 􀀁le?",
            answerOptions: [
                { answerText: "A. The user principal name and usage location of each user only", isCorrect: false, isChecked: false },
                { answerText: "B. The user principal name of each user only", isCorrect: true, isChecked: false },
                { answerText: "C. The display name of each user only ", isCorrect: false, isChecked: false },
                { answerText: "D.  The display name and usage location of each user only", isCorrect: false, isChecked: false },
                { answerText: "E.  The display name and user principal name of each user only", isCorrect: false, isChecked: false },

            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        },

        {
            questionText: "You need to ensure that an Azure Active Directory (Azure AD) user named Admin1 is assigned the required role to enable Trafic Analytics for anAzure subscription.Solution: You assign the Trafic Manager Contributor role at the subscription level to Admin1. Does this meet the goal?",
            answerOptions: [
                { answerText: "A. Yes", isCorrect: false, isChecked: false },
                { answerText: "B. No", isCorrect: true, isChecked: false },


            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        }
        ,

        {
            questionText: "You have three offices and an Azure subscription that contains an Azure Active Directory (Azure AD) tenant.You need to grant user management permissions to a local administrator in each o�ce.What should you use?",
            answerOptions: [
                { answerText: "A. Azure AD roles", isCorrect: false, isChecked: false },
                { answerText: "B. administrative units", isCorrect: true, isChecked: false },
                { answerText: "C. access packages in Azure AD entitlement management ", isCorrect: false, isChecked: false },
                { answerText: "D. Azure roles", isCorrect: false, isChecked: false },


            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        }
        ,

        {
            questionText: "You  have an Azure Directory (Azure AD) tenant named Adatum and an Azure Subscription named Subscription1. Adatum contains a group namedDevelopers.Subscription1 contains a resource group named Dev.You need to provide the Developers group with the ability to create Azure logic apps in the Dev resource group.Solution: On Dev, you assign the Logic App Contributor role to the Developers group.Does this meet the goal?",
            answerOptions: [
                { answerText: "A. Yes", isCorrect: true, isChecked: false },
                { answerText: "B. No", isCorrect: false, isChecked: false },


            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        }
        ,

        {
            questionText: "You have an Azure subscription named Subscription1 that contains a virtual network named VNet1. VNet1 is in a resource group named RG1. Subscription1 has a user named User1. User1 has the following roles: ✑ Reader✑ Security Admin ✑ Security ReaderYou need to ensure that User1 can assign the Reader role for VNet1 to other users.What should you do?",
            answerOptions: [
                { answerText: "A. Remove User1 from the Security Reader role for Subscription1. Assign User1 the Contributor role for RG1", isCorrect: false, isChecked: false },
                { answerText: "B. Assign User1 the Owner role for VNet1", isCorrect: true, isChecked: false },
                { answerText: "C. Assign User1 the Contributor role for VNet1 ", isCorrect: false, isChecked: false },
                { answerText: "D.  Assign User1 the Network Contributor role for VNet1.", isCorrect: false, isChecked: false },


            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        }
        ,

        {
            questionText: "You have an Azure subscription that contains a storage account named storage1. The storage1 account contains a file share named share1.The subscription is linked to a hybrid Azure Active Directory (Azure AD) tenant that contains a security group named Group1.You need to grant Group1 the Storage File Data SMB Share Elevated Contributor role for share1.What should you do frst?",
            answerOptions: [
                { answerText: "A. Enable Active Directory Domain Service (AD DS) authentication for storage1.", isCorrect: true, isChecked: false },
                { answerText: "B. Grant share-level permissions by using File Explorer.", isCorrect: false, isChecked: false },
                { answerText: "C. Mount share1 by using File Explorer. ", isCorrect: false, isChecked: false },
                { answerText: "D. Create a private endpoint.", isCorrect: false, isChecked: false },


            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        }
        ,

        {
            questionText: "You have 15 Azure subscriptions You have an Azure Active Directory (Azure AD) tenant that contains a security group named Group1. You plan to purchase additional Azure subscription. You need to ensure that Group1 can manage role assignments for the existing subscriptions and the planned subscriptions. The solution mustmeet the following requirements:✑ Use the principle of least privilege ✑ Minimize administrative effort.  What should you do",
            answerOptions: [
                { answerText: "A.  Assign Group1 the Owner role for the root management group", isCorrect: false, isChecked: false },
                { answerText: "B.  Assign Group1 the User Access Administrator role for the root management group", isCorrect: true, isChecked: false },
                { answerText: "C.  Create a new management group and assign Group1 the User Access Administrator role for the group. ", isCorrect: false, isChecked: false },
                { answerText: "D.  Create a new management group and assign Group1 the Owner role for the group", isCorrect: false, isChecked: false },


            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        }
        ,
        {
            questionText: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.You have an Azure subscription that contains the following users in an Azure Active Directory tenant named contoso.onmicrosoft.com ",
            answerOptions: [
                { answerText: "A. Yes", isCorrect: true, isChecked: false },
                { answerText: "B. No", isCorrect: false, isChecked: false },

            ],
            texteAFter: "User1 creates a new Azure Active Directory tenant named external.contoso.onmicrosoft.com.You need to create new user accounts in external.contoso.onmicrosoft.com.Solution: You instruct User2 to create the user accounts. Does that meet the goal?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image6
        }
        ,
        {
            questionText: "You have an Azure subscription that contains the following users in an Azure Active Directory tenant named contoso.onmicrosoft.com ",
            answerOptions: [
                { answerText: "A. Yes", isCorrect: false, isChecked: false },
                { answerText: "B. No", isCorrect: true, isChecked: false },

            ],
            texteAFter: "User1 creates a new Azure Active Directory tenant named external.contoso.onmicrosoft.com.You need to create new user accounts in external.contoso.onmicrosoft.com.Solution: You instruct User4 to create the user accounts. Does that meet the goal?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image6
        }
        ,
        {
            questionText: "You have an Azure subscription that contains the following users in an Azure Active Directory tenant named contoso.onmicrosoft.com ",
            answerOptions: [
                { answerText: "A. Yes", isCorrect: false, isChecked: false },
                { answerText: "B. No", isCorrect: true, isChecked: false },

            ],
            texteAFter: "User1 creates a new Azure Active Directory tenant named external.contoso.onmicrosoft.com. You need to create new user accounts in external.contoso.onmicrosoft.com. Solution: You instruct User3 to create the user accounts. Does that meet the goal?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image6
        },
        {
            questionText: "You have two Azure subscriptions named Sub1 and Sub2. An administrator creates a custom role that has an assignable scope to a resource group named RG1 in Sub1. You need to ensure that you can apply the custom role to any resource group in Sub1 and Sub2. The solution must minimize administrative effort. What should you do?",
            answerOptions: [
                { answerText: "A. Select the custom role and add Sub1 and Sub2 to the assignable scopes. Remove RG1 from the assignable scopes.", isCorrect: true, isChecked: false },
                { answerText: "B. Create a new custom role for Sub1. Create a new custom role for Sub2. Remove the role from RG1.", isCorrect: false, isChecked: false },
                { answerText: "C. Create a new custom role for Sub1 and add Sub2 to the assignable scopes. Remove the role from RG1.", isCorrect: false, isChecked: false },
                { answerText: "D. Select the custom role and add Sub1 to the assignable scopes. Remove RG1 from the assignable scopes. Create a new custom role for Sub2.", isCorrect: false, isChecked: false }
            ],
            isMultiSelect: false,
            userAnswer: null
        }
        ,
        {
            questionText: "You have an Azure Subscription that contains a storage account named storageacct1234 and two users named User1 and User2.You assign User1 the roles shown in the following exhibit.",
            answerOptions: [
                { answerText: "A. Assign roles to User2 for storageacct1234.", isCorrect: true, isChecked: false },
                { answerText: "B. Upload blob data to storageacct1234.", isCorrect: false, isChecked: false },
                { answerText: "C. dify the 􀀁rewall of storageacct1234.", isCorrect: false, isChecked: false },
                { answerText: "D. View blob data in storageacct1234.", isCorrect: false, isChecked: false },
                { answerText: "E. View 􀀁le shares in storageacct1234.", isCorrect: true, isChecked: false }

            ],
            texteAFter: "Which two actions can User1 perform? Each correct answer presents a complete solution.NOTE: Each correct selection is worth one point.",
            isMultiSelect: true, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image7
        }, {
            "questionText": "You have an Azure subscription named Subscription1 that contains an Azure Log Analytics workspace named Workspace1. You need to view the error events from a table named Event. Which query should you run in Workspace1?",
            "answerOptions": [
                { answerText: "A. select * from Event where EventType == 'error'", isCorrect: false, isChecked: false },
                { answerText: "B. Event | search 'error'", isCorrect: true, isChecked: false },
                { answerText: "C. Event | where EventType is 'error'", isCorrect: false, isChecked: false },
                { answerText: "D. Get-Event Event | where {$_.EventType == 'error'}", isCorrect: false, isChecked: false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        , {
            "questionText": "You have an Azure App Services web app named App1. You plan to deploy App1 by using Web Deploy. You need to ensure that the developers of App1 can use their Azure AD credentials to deploy content to App1. The solution must use the principle of least privilege. What should you do?",
            "answerOptions": [
                { "answerText": "A. Assign the Owner role to the developers", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Configure app-level credentials for FTPS", "isCorrect": true, "isChecked": false },
                { "answerText": "C. Assign the Website Contributor role to the developers", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Configure user-level credentials for FTPS", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }, {
            "questionText": "You have an Azure Active Directory (Azure AD) tenant named contoso.com. You have a CSV file that contains the names and email addresses of 500 external users. You need to create a guest user account in contoso.com for each of the 500 external users. Solution: From Azure AD in the Azure portal, you use the Bulk invite users operation. Does this meet the goal?",
            "answerOptions": [
                { "answerText": "A. Yes", "isCorrect": false, "isChecked": false },
                { "answerText": "B. No", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        ,
        {
            "questionText": "You have an Azure subscription that contains 10 virtual machines, a key vault named Vault1, and a network security group (NSG) named NSG1. All the resources are deployed to the East US Azure region. The virtual machines are protected by using NSG1. NSG1 is configured to block all outbound traffic to the internet. You need to ensure that the virtual machines can access Vault1. The solution must use the principle of least privilege and minimize administrative effort. What should you configure as the destination of the outbound security rule for NSG1?",
            "answerOptions": [
                { "answerText": "A. an application security group", "isCorrect": false, "isChecked": false },
                { "answerText": "B. a service tag", "isCorrect": true, "isChecked": false },
                { "answerText": "C. an IP address range", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        ,
        {
            questionText: "You have an Azure AD tenant named adatum.com that contains the groups shown in the following table..",
            answerOptions: [
                { answerText: "A. User4 only", isCorrect: false, isChecked: false },
                { answerText: "B. User1 and User4 only", isCorrect: true, isChecked: false },
                { answerText: "C. User1, User2, and User4 only", isCorrect: false, isChecked: false },
                { answerText: "D. User1, User2, User3, and User4", isCorrect: false, isChecked: false },


            ],
            text: "Adatum.com contains the users shown in the following table.",
            texteAFter: "You assign the Azure Active Directory Premium Plan 2 license to Group1 and User4. Which users are assigned the Azure Active Directory Premium Plan 2 license?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image8,
            images: image9,
        }
        , {
            "questionText": "You have an Azure subscription named Subscription1 that contains a virtual network named VNet1. VNet1 is in a resource group named RG1. Subscription1 has a user named User1. User1 has the following roles: • Reader • Security Admin • Security Reader You need to ensure that User1 can assign the Reader role for VNet1 to other users. What should you do?",
            "answerOptions": [
                { "answerText": "A. Assign User1 the Network Contributor role for VNet1.", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Remove User1 from the Security Reader role for Subscription1. Assign User1 the Contributor role for RG1.", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Assign User1 the Owner role for VNet1.", "isCorrect": true, "isChecked": false },
                { "answerText": "D. Assign User1 the Network Contributor role for RG1.", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }, {
            "questionText": "You have an Azure subscription named Subscription1 that contains a virtual network named VNet1. VNet1 is in a resource group named RG1. Subscription1 has a user named User1. User1 has the following roles: • Reader • Security Admin • Security Reader You need to ensure that User1 can assign the Reader role for VNet1 to other users. What should you do?",
            "answerOptions": [
                { "answerText": "A. Remove User1 from the Security Reader role for Subscription1. Assign User1 the Contributor role for RG1.", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Assign User1 the Owner role for VNet1.", "isCorrect": true, "isChecked": false },
                { "answerText": "C. Remove User1 from the Security Reader and Reader roles for Subscription1. Assign User1 the Contributor role for Subscription1.", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Assign User1 the Contributor role for VNet1.", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        ,
        {
            questionText: "Your on-premises network contains a VPN gateway.You have an Azure subscription that contains the resources shown in the following table.",
            answerOptions: [
                { answerText: "A. Azure Application Gateway.", isCorrect: false, isChecked: false },
                { answerText: "B. private endpoints.", isCorrect: true, isChecked: false },
                { answerText: "C. a network security group (NSG).", isCorrect: false, isChecked: false },
                { answerText: "D. Azure Virtual WAN", isCorrect: false, isChecked: false },


            ],
            texteAFter: "You need to ensure that all the tra􀀂c from VM1 to storage1 travels across the Microsoft backbone network.What should you configure?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image10
        },

        {
            questionText: "You have an Azure subscription that contains the resources shown in the following table.",
            answerOptions: [
                { answerText: "A. Enable identity-based data access for the 􀀁le shares in storage1..", isCorrect: false, isChecked: false },
                { answerText: "B. Modify the security pro􀀁le for the 􀀁le shares in storage1.", isCorrect: false, isChecked: false },
                { answerText: "C. Select Default to Azure Active Directory authorization in the Azure portal for storage1.", isCorrect: false, isChecked: false },
                { answerText: "D. Con􀀁gure Access control (IAM) for share1.", isCorrect: true, isChecked: false },


            ],
            texteAFter: "You need to assign User1 the Storage File Data SMB Share Contributor role for share1. What should you do first?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image11
        },
        {
            "questionText": "You have an Azure subscription named Subscription1 that contains a virtual network named VNet1. VNet1 is in a resource group named RG1. Subscription1 has a user named User1. User1 has the following roles: • Reader • Security Admin • Security Reader You need to ensure that User1 can assign the Reader role for VNet1 to other users. What should you do?",
            "answerOptions": [
                { "answerText": "A. Remove User1 from the Security Reader role for Subscription1. Assign User1 the Contributor role for RG1.", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Assign User1 the User Access Administrator role for VNet1.", "isCorrect": true, "isChecked": false },
                { "answerText": "C. Remove User1 from the Security Reader and Reader roles for Subscription1.", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Assign User1 the Contributor role for VNet1.", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }, {
            "questionText": "You have an Azure Active Directory (Azure AD) tenant named contoso.com. You have a CSV file that contains the names and email addresses of 500 external users. You need to create a guest user account in contoso.com for each of the 500 external users. Solution: You create a PowerShell script that runs the New-MgUser cmdlet for each external user. Does this meet the goal?",
            "answerOptions": [
                { "answerText": "A. Yes", "isCorrect": false, "isChecked": false },
                { "answerText": "B. No", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        , {
            "questionText": "You have an Azure Active Directory (Azure AD) tenant named contoso.com. You have a CSV file that contains the names and email addresses of 500 external users. You need to create a guest user account in contoso.com for each of the 500 external users. Solution: You create a PowerShell script that runs the New-MgInvitation cmdlet for each external user. Does this meet the goal?",
            "answerOptions": [
                { "answerText": "A. Yes", "isCorrect": false, "isChecked": false },
                { "answerText": "B. No", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }, {
            "questionText": "You have an Azure subscription named Subscription1 that contains virtual network named VNet1. VNet1 is in a resource group named RG1. A user named User1 has the following roles for Subscription1: • Reader • Security Admin • Security Reader You need to ensure that User1 can assign the Reader role for VNet1 to other users. What should you do?",
            "answerOptions": [
                { "answerText": "A. Assign User1 the Contributor role for VNet1.", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Assign User1 the Network Contributor role for VNet1.", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Assign User1 the User Access Administrator role for VNet1.", "isCorrect": true, "isChecked": false },
                { "answerText": "D. Remove User1 from the Security Reader and Reader roles for Subscription1. Assign User1 the Contributor role for Subscription1.", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        , {
            "questionText": "You have an Azure subscription named Subscription1 that contains virtual network named VNet1. VNet1 is in a resource group named RG1. User named User1 has the following roles for Subscription1: • Reader • Security Admin • Security Reader You need to ensure that User1 can assign the Reader role for VNet1 to other users. What should you do?",
            "answerOptions": [
                { "answerText": "A. Remove User1 from the Security Reader and Reader roles for Subscription1. Assign User1 the Contributor role for Subscription1.", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Remove User1 from the Security Reader role for Subscription1. Assign User1 the Contributor role for RG1.", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Assign User1 the Network Contributor role for VNet1.", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Assign User1 the User Access Administrator role for VNet1.", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        },

        {
            questionText: "You have an Azure subscription that contains the resources shown in the following table.",
            answerOptions: [
                { answerText: "A. Storage Account Contributor", isCorrect: false, isChecked: false },
                { answerText: "B. Contributor.", isCorrect: false, isChecked: false },
                { answerText: "C. Storage Blob Data Contributor", isCorrect: false, isChecked: false },
                { answerText: "D. Reader and Data Access", isCorrect: true, isChecked: false },


            ],
            texteAFter: "You need to assign Workspace1 a role to allow read, write, and delete operations for the data stored in the containers of storage1.Which role should you assign?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image12
        }, {
            "questionText": "You have an Azure subscription named Subscription1 that contains virtual network named VNet1. VNet1 is in a resource group named RG1. A user named User1 has the following roles for Subscription1: • Reader • Security Admin • Security Reader You need to ensure that User1 can assign the Reader role for VNet1 to other users. What should you do?",
            "answerOptions": [
                { "answerText": "A. Remove User1 from the Security Reader and Reader roles for Subscription1. Assign User1 the Contributor role for Subscription1.", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Assign User1 the Contributor role for VNet1.", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Assign User1 the Owner role for VNet1.", "isCorrect": true, "isChecked": false },
                { "answerText": "D. Assign User1 the Network Contributor role for RG1.", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        ,

        {
            questionText: "You purchase Azure Active Directory Premium P2 licenses.To which groups can you assign a license?",
            answerOptions: [
                { answerText: "A. Group1 only ", isCorrect: false, isChecked: false },
                { answerText: "B. Group1 and Group3 only", isCorrect: true, isChecked: false },
                { answerText: "C. Group3 and Group4 only", isCorrect: false, isChecked: false },
                { answerText: "D. Group1, Group2, and Group3 only", isCorrect: false, isChecked: false },
                { answerText: "E. Group1, Group2, Group3, and Group4", isCorrect: false, isChecked: false },

            ],
            texteAFter: "You need to assign Workspace1 a role to allow read, write, and delete operations for the data stored in the containers of storage1.Which role should you assign?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image13
        },
        {
            "questionText": "You have an Azure Active Directory (Azure AD) tenant named contoso.com. You have a CSV file that contains the names and email addresses of 500 external users. You need to create a guest user account in contoso.com for each of the 500 external users. Solution: You create a PowerShell script that runs the New-MgUser cmdlet for each user. Does this meet the goal?",
            "answerOptions": [
                { "answerText": "A. Yes", "isCorrect": false, "isChecked": false },
                { "answerText": "B. No", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        },

        {
            questionText: "Your on-premises network contains a VPN gateway.You have an Azure subscription that contains the resources shown in the following table.",
            answerOptions: [
                { answerText: "A. Azure AD Application Proxy", isCorrect: false, isChecked: false },
                { answerText: "B. private endpoints", isCorrect: true, isChecked: false },
                { answerText: "C. a network security group (NSG)", isCorrect: false, isChecked: false },
                { answerText: "D. Azure Peering Service", isCorrect: false, isChecked: false },


            ],
            texteAFter: "You need to ensure that all the trafic from VM1 to storage1 travels across the Microsoft backbone network.What should you configure?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image14
        },



        {
            questionText: "Your on-premises network contains a VPN gateway. You have an Azure subscription that contains the resources shown in the following table.",
            answerOptions: [
                { answerText: "A. Azure AD Application Proxy", isCorrect: false, isChecked: false },
                { answerText: "B. service endpoints", isCorrect: true, isChecked: false },
                { answerText: "C. a network security group (NSG)", isCorrect: false, isChecked: false },
                { answerText: "D.Azure Firewall", isCorrect: false, isChecked: false },


            ],
            texteAFter: "You need to ensure that all the tra􀀂c from VM1 to storage1 travels across the Microsoft backbone network.What should you configure?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image14
        },

        {
            questionText: "Your on-premises network contains a VPN gateway.You have an Azure subscription that contains the resources shown in the following table.",
            answerOptions: [
                { answerText: "A. Azure Application Gateway", isCorrect: false, isChecked: false },
                { answerText: "B. service endpoints", isCorrect: true, isChecked: false },
                { answerText: "C. a network security group (NSG)", isCorrect: false, isChecked: false },
                { answerText: "D.Azure Peering Service", isCorrect: false, isChecked: false },


            ],
            texteAFter: "You need to ensure that all the tra􀀂c from VM1 to storage1 travels across the Microsoft backbone network.What should you con􀀁gure?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image14
        },


        {
            questionText: "You have an Azure subscription named Sub1 that contains the resources shown in the following table.",
            answerOptions: [
                { answerText: "A. RG1", isCorrect: false, isChecked: false },
                { answerText: "B. MG1", isCorrect: false, isChecked: false },
                { answerText: "C. Sub1", isCorrect: true, isChecked: false },
                { answerText: "D. VM1", isCorrect: false, isChecked: false },


            ],
            texteAFter: "You create a user named Admin1.To what can you add Admin1 as a co-administrator?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image15
        },

        {
            questionText: "You have an Azure subscription that contains the resources shown in the following table.",
            answerOptions: [
                { answerText: "A.data protection", isCorrect: false, isChecked: false },
                { answerText: "B. a private endpoint", isCorrect: false, isChecked: false },
                { answerText: "C. Public network access in the Firewalls and virtual networks settings", isCorrect: true, isChecked: false },
                { answerText: "D. a shared access signature (SAS)", isCorrect: false, isChecked: false },


            ],
            texteAFter: "You need to ensure that data transfers between storage1 and VM1 do NOT traverse the internet What should you con􀀁gure for storage1?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image16
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
            <h4 className="text-danger">Topic 2 :Select the correct answer</h4> <br />
            <h5 className="text-warning"> Attention  questions 1,4,5,7,14,21,23,25,28,31,32,37,41,44,45,46,48,52,54,57,66,67,70,72,75,72,80,81,86,87,91,92,93,95,100 of topic 2 of the pdf   are missing from this MCQ</h5> <br />
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

export default QuizzApp2;
