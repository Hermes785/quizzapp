import React, { useState } from "react";

const Correc1 = () => {
    const [questions, setQuestions] = useState([
        {

            questionText: "Your company has several departments. Each department has a number of virtual machines (VMs). The company has an Azure subscription that contains a resource group named RG1. All VMs are located in RG1. You want to associate each VM with its respective department. What should you do?",
            answerOptions: [
                { answerText: "Create Azure Management Groups for each department", isCorrect: false, isChecked: false },
                { answerText: "Create a resource group for each department", isCorrect: false, isChecked: false },
                { answerText: "Assign tags to the virtual machines.", isCorrect: true, isChecked: false },
                { answerText: "Modify the settings of the virtual machines.", isCorrect: false, isChecked: false }
            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        },
        {
            questionText: "Your company has an Azure Active Directory (Azure AD) subscription. You want to implement an Azure AD conditional access policy. The policy must be configured to require members of the Global Administrators group to use Multi-Factor Authentication and an Azure AD-joined device when they connect to Azure AD from untrusted locations. Solution: You access the multi-factor authentication page to alter the user settings. Does the solution meet the goal?",
            answerOptions: [
                { answerText: "Yes", isCorrect: false, isChecked: false },
                { answerText: "No", isCorrect: true, isChecked: false },
            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        },
        {
            questionText: "Your company has an Azure Active Directory (Azure AD) subscription. You want to implement an Azure AD conditional access policy. The policy must be configured to require members of the Global Administrators group to use Multi-Factor Authentication and an Azure AD-joined device when they connect to Azure AD from untrusted locations. Solution: You access the Azure portal to alter the session control of the Azure AD conditional access policy.Does the solution meet the goal?",
            answerOptions: [
                { answerText: "Yes", isCorrect: false, isChecked: false },
                { answerText: "No", isCorrect: true, isChecked: false },
            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        },
        {
            questionText: "Your company has an Azure Active Directory (Azure AD) subscription. You want to implement an Azure AD conditional access policy. The policy must be configured to require members of the Global Administrators group to use Multi-Factor Authentication and an Azure AD-joined device when they connect to Azure AD from untrusted locations.Solution: You access the Azure portal to alter the grant control of the Azure AD conditional access policy.Does the solution meet the goal?",
            answerOptions: [
                { answerText: "Yes", isCorrect: true, isChecked: false },
                { answerText: "No", isCorrect: false, isChecked: false },
            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        }
        ,
        {
            questionText: "You are planning to deploy an Ubuntu Server virtual machine to your company's Azure subscription.You are required to implement a custom deployment that includes adding a particular trusted root certi�cation authority (CA). Which of the following should you use to create the virtual machine",
            answerOptions: [
                { answerText: "The New-AzureRmVm cmdlet.", isCorrect: false, isChecked: false },
                { answerText: "The New-AzVM cmdlet.", isCorrect: false, isChecked: false },
                { answerText: " The Create-AzVM cmdlet.", isCorrect: true, isChecked: false },
                { answerText: ". The az vm create command.", isCorrect: false, isChecked: false },
            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        },
        {
            questionText: "Your company makes use of Multi-Factor Authentication for when users are not in the o�ce. The Per Authentication option has been con�guredas the usage model.After the acquisition of a smaller business and the addition of the new staff to Azure Active Directory (Azure AD) obtains a different company andadding the new employees to Azure Active Directory (Azure AD), you are informed that these employees should also make use of Multi-FactorAuthentication.To achieve this, the Per Enabled User setting must be set for the usage model.Solution: You recon�gure the existing usage model via the Azure portal.",
            answerOptions: [
                { answerText: "Yes.", isCorrect: false, isChecked: false },
                { answerText: "No", isCorrect: true, isChecked: false },

            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        },
        {
            questionText: "Your company makes use of Multi-Factor Authentication for when users are not in the o�ce. The Per Authentication option has been con�guredas the usage model.After the acquisition of a smaller business and the addition of the new staff to Azure Active Directory (Azure AD) obtains a different company andadding the new employees to Azure Active Directory (Azure AD), you are informed that these employees should also make use of Multi-FactorAuthentication.To achieve this, the Per Enabled User setting must be set for the usage model.Solution: You recon�gure the existing usage model via the Azure CLI.",
            answerOptions: [
                { answerText: "Yes.", isCorrect: false, isChecked: false },
                { answerText: "No", isCorrect: true, isChecked: false },

            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        }
        ,
        {
            questionText: "Your company makes use of Multi-Factor Authentication for when users are not in the o�ce. The Per Authentication option has been con�guredas the usage model.After the acquisition of a smaller business and the addition of the new staff to Azure Active Directory (Azure AD) obtains a different company andadding the new employees to Azure Active Directory (Azure AD), you are informed that these employees should also make use of Multi-FactorAuthentication.To achieve this, the Per Enabled User setting must be set for the usage model.Solution: You create a new Multi-Factor Authentication provider with a backup from the existing Multi-Factor Authentication provider data.",
            answerOptions: [
                { answerText: "Yes.", isCorrect: true, isChecked: false },
                { answerText: "No", isCorrect: false, isChecked: false },

            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        }
        ,
        {
            questionText: "Your company makes use of Multi-Factor Authentication for when users are not in the o�ce. The Per Authentication option has been con�guredas the usage model.After the acquisition of a smaller business and the addition of the new staff to Azure Active Directory (Azure AD) obtains a different company andadding the new employees to Azure Active Directory (Azure AD), you are informed that these employees should also make use of Multi-FactorAuthentication.To achieve this, the Per Enabled User setting must be set for the usage model.Solution: You run the Start-ADSyncSyncCycle -PolicyType Initial PowerShell cmdlet.",
            answerOptions: [
                { answerText: "Yes.", isCorrect: false, isChecked: false },
                { answerText: "No", isCorrect: true, isChecked: false },

            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        }
        ,
        {
            questionText: "Your company makes use of Multi-Factor Authentication for when users are not in the o�ce. The Per Authentication option has been con�guredas the usage model.After the acquisition of a smaller business and the addition of the new staff to Azure Active Directory (Azure AD) obtains a different company andadding the new employees to Azure Active Directory (Azure AD), you are informed that these employees should also make use of Multi-FactorAuthentication.To achieve this, the Per Enabled User setting must be set for the usage model.Solution: You use Active Directory Sites and Services to force replication of the Global Catalog on a domain controller.",
            answerOptions: [
                { answerText: "Yes.", isCorrect: false, isChecked: false },
                { answerText: "No", isCorrect: true, isChecked: false },

            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null // Réponse de l'utilisateur pour cette question
        }
        ,
        {
            questionText: "Your company makes use of Multi-Factor Authentication for when users are not in the o�ce. The Per Authentication option has been con�guredas the usage model.After the acquisition of a smaller business and the addition of the new staff to Azure Active Directory (Azure AD) obtains a different company andadding the new employees to Azure Active Directory (Azure AD), you are informed that these employees should also make use of Multi-FactorAuthentication.To achieve this, the Per Enabled User setting must be set for the usage model.Solution: You restart the NetLogon service on a domain controller..",
            answerOptions: [
                { answerText: "Yes.", isCorrect: false, isChecked: false },
                { answerText: "No", isCorrect: true, isChecked: false },

            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
        }
        ,
        {
            questionText: "Your company has a Microsoft Azure subscription.  The company has datacenters in Los Angeles and New York.You are con�guring the two datacenters as geo-clustered sites for site resiliency.You need to recommend an Azure storage redundancy option.  You have the following data storage requirements: ✑ Data must be stored on multiple nodes.✑ Data must be stored on nodes in separate geographic locations. ✑ Data can be read from the secondary location as well as from the primary location.Which of the following Azure stored redundancy options should you recommend?",
            answerOptions: [
                { answerText: " Geo-redundant storage.", isCorrect: false, isChecked: false },
                { answerText: " Read-only geo-redundant storage", isCorrect: true, isChecked: false },
                { answerText: "Zone-redundant storage.", isCorrect: false, isChecked: false },
                { answerText: "Locally redundant storage", isCorrect: false, isChecked: false },


            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
        }
        ,
        {
            questionText: "Your company has an azure subscription that includes a storage account, a resource group, a blob container and a �le share.A colleague named Jon Ross makes use of a solitary Azure Resource Manager (ARM) template to deploy a virtual machine and an additional Azure Storage account.You want to review the ARM template that was used by Jon Ross.Solution: You access the Virtual Machine blade. Does the solution meet the goal?",
            answerOptions: [
                { answerText: "Yes.", isCorrect: false, isChecked: false },
                { answerText: "No", isCorrect: true, isChecked: false },

            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
        }
        ,
        {
            questionText: "Your company has an azure subscription that includes a storage account, a resource group, a blob container and a �le share. A colleague named Jon Ross makes use of a solitary Azure Resource Manager (ARM) template to deploy a virtual machine and an additional Azure Storage account.You want to review the ARM template that was used by Jon Ross. Solution: You access the Resource Group blade.Does the solution meet the goal?",
            answerOptions: [
                { answerText: "Yes.", isCorrect: true, isChecked: false },
                { answerText: "No", isCorrect: false, isChecked: false },

            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
        }
        ,
        {
            questionText: "Your company has an azure subscription that includes a storage account, a resource group, a blob container and a �le share. A colleague named Jon Ross makes use of a solitary Azure Resource Manager (ARM) template to deploy a virtual machine and an additional Azure Storage account.You want to review the ARM template that was used by Jon Ross.Solution: You access the Container blade.",
            answerOptions: [
                { answerText: "Yes.", isCorrect: false, isChecked: false },
                { answerText: "No", isCorrect: true, isChecked: false },

            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
        }
        ,
        {
            questionText: "Your company has three virtual machines (VMs) that are included in an availability set.You try to resize one of the VMs, which returns an allocation failure message. It is imperative that the VM is resized. Which of the following actions should you take?",
            answerOptions: [
                { answerText: "You should only stop one of the VMs.", isCorrect: false, isChecked: false },
                { answerText: "You should stop two of the VMs.", isCorrect: false, isChecked: false },
                { answerText: "You should stop all three VMs..", isCorrect: true, isChecked: false },
                { answerText: "You should remove the necessary VM from the availability set..", isCorrect: true, isChecked: false },


            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
        }
        ,
        {
            questionText: "You have an Azure virtual machine (VM) that has a single data disk. You have been tasked with attaching this data disk to another Azure VM.You need to make sure that your strategy allows for the virtual machines to be o�ine for the least amount of time possible. Which of the following is the action you should take FIRST?",
            answerOptions: [
                { answerText: ". Stop the VM that includes the data disk.", isCorrect: true, isChecked: false },
                { answerText: ". Stop the VM that the data disk must be attached to.", isCorrect: false, isChecked: false },
                { answerText: ". Detach the data disk.", isCorrect: false, isChecked: false },
                { answerText: ". Delete the VM that includes the data disk.", isCorrect: false, isChecked: false },


            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
        }

        ,

        {
            questionText: "You need to deploy a number of Azure virtual machines (VMs) using Azure Resource Manager (ARM) templates. You have been informed that theVMs will be included in a single availability set. You are required to make sure that the ARM template you con�gure allows for as many VMs as possible to remain accessible in the event of fabricfailure or maintenance.Which of the following is the value that you should con�gure for the platformFaultDomainCount property?",
            answerOptions: [
                { answerText: "10", isCorrect: false, isChecked: false },
                { answerText: "30.", isCorrect: false, isChecked: false },
                { answerText: "Min value", isCorrect: false, isChecked: false },
                { answerText: "Max value", isCorrect: true, isChecked: false },


            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
        }
        ,
        {
            questionText: "You need to deploy a number of Azure virtual machines (VMs) using Azure Resource Manager (ARM) templates. You have been informed that the VMs will be included in a single availability s You are required to make sure that the ARM template you con�gure allows for as many VMs as possible to remain accessible in the event of fabricfailure or maintenance. Which of the following is the value that you should con�gure for the platformUpdateDomainCount property?",
            answerOptions: [
                { answerText: "10", isCorrect: false, isChecked: false },
                { answerText: "20.", isCorrect: true, isChecked: false },
                { answerText: "30", isCorrect: false, isChecked: false },
                { answerText: "40", isCorrect: false, isChecked: false },


            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
        }
        ,

        {
            questionText: "Your company has an Azure Active Directory (Azure AD) tenant that is configured for hybrid coexistence with the on-premises Active Directory dom The on-premise virtual environment consists of virtual machines (VMs) running on Windows Server 2012 R2 Hyper-V host servers. You have created some PowerShell scripts to automate the con�guration of newly created VMs. You plan to create several new VMs. You need a solution that ensures the scripts are run on the new VMs.Which of the following is the best solution?",
            answerOptions: [
                { answerText: ". Configure a SetupComplete.cmd batch file in the %windir%\setup\scripts directory.", isCorrect: true, isChecked: false },
                { answerText: " Confifiure a Group Policy Object (GPO) to run the scripts as logon scripts", isCorrect: false, isChecked: false },
                { answerText: " Configure a Group Policy Object (GPO) to run the scripts as startup scripts.", isCorrect: false, isChecked: false },
                { answerText: "lace the scripts in a new virtual hard disk (VHD).", isCorrect: false, isChecked: false },


            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
        }
        ,
        {
            questionText: "Your company has an Azure Active Directory (Azure AD) tenant that is con�gured for hybrid coexistence with the on-premises Active Directory domain.  You plan to deploy several new virtual machines (VMs) in Azure. The VMs will have the same operating system and custom software requirements.You con�gure a reference VM in the on-premise virtual environment. You then generalize the VM to create an image. You need to upload the image to Azure to ensure that it is available for selection when you create the new Azure VMs. Which PowerShell cmdlets should you use?",
            answerOptions: [
                { answerText: "Add-AzVM", isCorrect: false, isChecked: false },
                { answerText: "Add-AzVhd", isCorrect: true, isChecked: false },
                { answerText: "Add-AzImage", isCorrect: false, isChecked: false },
                { answerText: "Add-AzImageDataDisk", isCorrect: false, isChecked: false },


            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
        }
        ,
        {
            questionText: "Your company's Azure subscription includes two Azure networks named VirtualNetworkA and VirtualNetworkB.VirtualNetworkA includes a VPN gateway that is configured to make use of static routing. Also, a site-to-site VPN connection exists between yourcompany's on- premises network and VirtualNetworkA.You have configured a point-to-site VPN connection to VirtualNetworkA from a workstation running Windows 10. After con�guring virtual networkpeering betweenVirtualNetworkA and VirtualNetworkB, you con�rm that you are able to access VirtualNetworkB from the company's on-premises network. However, you �nd that you cannot establish a connection to VirtualNetworkB from the Windows 10 workstation.You have to make sure that a connection to VirtualNetworkB can be established from the Windows 10 workstation.Solution: You choose the Allow gateway transit setting on VirtualNetworkA.Does the solution meet the goal?",
            answerOptions: [
                { answerText: "Yes", isCorrect: false, isChecked: false },
                { answerText: "No", isCorrect: true, isChecked: false },



            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
        }
        ,
        {
            questionText: "Your company's Azure subscription includes two Azure networks named VirtualNetworkA and VirtualNetworkB.VirtualNetworkA includes a VPN gateway that is configured to make use of static routing. Also, a site-to-site VPN connection exists between yourcompany's on- premises network and VirtualNetworkA.You have configured a point-to-site VPN connection to VirtualNetworkA from a workstation running Windows 10. After con�guring virtual networkpeering betweenVirtualNetworkA and VirtualNetworkB, you con�rm that you are able to access VirtualNetworkB from the company's on-premises network. However, you �nd that you cannot establish a connection to VirtualNetworkB from the Windows 10 workstation.You have to make sure that a connection to VirtualNetworkB can be established from the Windows 10 workstation.Solution: You choose the Allow gateway transit setting on VirtualNetworkB.",
            answerOptions: [
                { answerText: "Yes", isCorrect: false, isChecked: false },
                { answerText: "No", isCorrect: true, isChecked: false },



            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
        }
        ,
        {
            questionText: "Your company's Azure subscription includes two Azure networks named VirtualNetworkA and VirtualNetworkB.VirtualNetworkA includes a VPN gateway that is configured to make use of static routing. Also, a site-to-site VPN connection exists between yourcompany's on- premises network and VirtualNetworkA.You have configured a point-to-site VPN connection to VirtualNetworkA from a workstation running Windows 10. After con�guring virtual networkpeering betweenVirtualNetworkA and VirtualNetworkB, you con�rm that you are able to access VirtualNetworkB from the company's on-premises network. However, you �nd that you cannot establish a connection to VirtualNetworkB from the Windows 10 workstation.You have to make sure that a connection to VirtualNetworkB can be established from the Windows 10 workstation.Solution: You download and re-install the VPN client con�guration package on the Windows 10 workstation.",
            answerOptions: [
                { answerText: "Yes", isCorrect: true, isChecked: false },
                { answerText: "No", isCorrect: false, isChecked: false },



            ],
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
        }
        ,
        {
            questionText: "Your company has virtual machines (VMs) hosted in Microsoft Azure. The VMs are located in a single Azure virtual network named VNet1. The company has users that work remotely. The remote workers require access to the VMs on VNet1. You need to provide access for the remote workers. What should you do?",
            answerOptions: [
                { answerText: "Configure a Site-to-Site (S2S) VPN.", isCorrect: false, isChecked: false },
                { answerText: "Configure a VNet-to-VNet VPN.", isCorrect: false, isChecked: false },
                { answerText: "Configure a Point-to-Site (P2S) VPN.", isCorrect: true, isChecked: false },
                { answerText: "Configure DirectAccess on a Windows Server 2012 server VM.", isCorrect: false, isChecked: false },
                { answerText: "Configure a Multi-Site VPN.", "isCorrect": false, "isChecked": false }
            ],
            isMultiSelect: false,
            userAnswer: null
        },
        {
            questionText: "Your company has a Microsoft SQL Server Always On availability group configured on their Azure virtual machines (VMs). You need to configure an Azure internal load balancer as a listener for the availability group. Solution: You create an HTTP health probe on port 1433. Does the solution meet the goal?",
            answerOptions: [
                { answerText: "Yes", isCorrect: false, isChecked: false },
                { answerText: "No", isCorrect: true, isChecked: false }
            ],
            isMultiSelect: false,
            userAnswer: null
        },
        {
            questionText: "Your company has a Microsoft SQL Server Always On availability group configured on their Azure virtual machines (VMs). You need to configure an Azure internal load balancer as a listener for the availability group. Solution: You set Session persistence to Client IP. Does the solution meet the goal?",
            answerOptions: [
                { answerText: "Yes", isCorrect: false, isChecked: false },
                { answerText: "No", isCorrect: true, isChecked: false }
            ],
            isMultiSelect: false,
            userAnswer: null
        },
        {
            questionText: "Your company has a Microsoft SQL Server Always On availability group configured on their Azure virtual machines (VMs). You need to configure an Azure internal load balancer as a listener for the availability group. Solution: You enable Floating IP. Does the solution meet the goal?",
            answerOptions: [
                { answerText: "Yes", isCorrect: true, isChecked: false },
                { answerText: "No", isCorrect: false, isChecked: false }
            ],
            isMultiSelect: false,
            userAnswer: null
        },
        {
            questionText: "Your company has two on-premises servers named SRV01 and SRV02. Developers have created an application that runs on SRV01. The application calls a service on SRV02 by IP address. You plan to migrate the application on Azure virtual machines (VMs). You have configured two VMs on a single subnet in an Azure virtual network. You need to configure the two VMs with static internal IP addresses. What should you do?",
            answerOptions: [
                { answerText: "Run the New-AzureRMVMConfig PowerShell cmdlet.", isCorrect: false, isChecked: false },
                { answerText: "Run the Set-AzureSubnet PowerShell cmdlet.", isCorrect: false, isChecked: false },
                { answerText: "Modify the VM properties in the Azure Management Portal.", isCorrect: false, isChecked: false },
                { answerText: "Modify the IP properties in Windows Network and Sharing Center.", isCorrect: false, isChecked: false },
                { answerText: "Run the Set-AzureStaticVNetIP PowerShell cmdlet.", "isCorrect": true, "isChecked": false }
            ],
            isMultiSelect: false,
            userAnswer: null
        },
        {
            questionText: "Your company has an Azure Active Directory (Azure AD) subscription. You need to deploy five virtual machines (VMs) to your company's virtual network subnet. The VMs will each have both a public and private IP address. Inbound and outbound security rules for all of these virtual machines must be identical. Which of the following is the least amount of network interfaces needed for this configuration?",
            answerOptions: [
                { answerText: "5", isCorrect: true, isChecked: false },
                { "answerText": "10", "isCorrect": false, "isChecked": false },
                { "answerText": "20", "isCorrect": false, "isChecked": false },
                { "answerText": "40", "isCorrect": false, "isChecked": false }
            ],
            isMultiSelect: false,
            userAnswer: null
        },
        {
            questionText: "Your company has an Azure Active Directory (Azure AD) subscription. You need to deploy five virtual machines (VMs) to your company's virtual network subnet. The VMs will each have both a public and private IP address. Inbound and outbound security rules for all of these virtual machines must be identical. Which of the following is the least amount of security groups needed for this configuration?",
            answerOptions: [
                { answerText: "4", isCorrect: false, isChecked: false },
                { answerText: "3", "isCorrect": false, "isChecked": false },
                { answerText: "2", isCorrect: false, isChecked: false },
                { answerText: "1", isCorrect: true, isChecked: false }
            ],
            isMultiSelect: false,
            userAnswer: null
        },
        {
            questionText: "Your company's Azure subscription includes Azure virtual machines (VMs) that run Windows Server 2016. One of the VMs is backed up every day using Azure Backup Instant Restore. When the VM becomes infected with data encrypting ransomware, you decide to recover the VM's files. Which of the following is TRUE in this scenario?",
            answerOptions: [
                { answerText: "You can only recover the files to the infected VM.", isCorrect: true, "isChecked": false },
                { answerText: "You can recover the files to any VM within the company's subscription.", isCorrect: false, isChecked: false },
                { answerText: "You can only recover the files to a new VM.", isCorrect: false, isChecked: false },
                { answerText: "You will not be able to recover the files.", isCorrect: false, isChecked: false }
            ],
            isMultiSelect: false,
            userAnswer: null
        },
        {
            questionText: "Your company's Azure subscription includes Azure virtual machines (VMs) that run Windows Server 2016. One of the VMs is backed up every day using Azure Backup Instant Restore. When the VM becomes infected with data encrypting ransomware, you are required to restore the VM. Which of the following actions should you take?",
            answerOptions: [
                { answerText: "You should restore the VM after deleting the infected VM.", isCorrect: false, "isChecked": false },
                { answerText: "You should restore the VM to any VM within the company's subscription.", isCorrect: true, isChecked: false },
                { answerText: "You should restore the VM to a new Azure VM.", isCorrect: false, isChecked: false },
                { answerText: "You should restore the VM to an on-premise Windows device.", isCorrect: false, isChecked: false }
            ],
            isMultiSelect: false,
            userAnswer: null
        },
        {
            questionText: "You administer a solution in Azure that is currently having performance issues. You need to find the cause of the performance issues pertaining to metrics on the Azure infrastructure. Which of the following is the tool you should use?",
            answerOptions: [
                { answerText: "Azure Traffic Analytics", isCorrect: false, isChecked: false },
                { answerText: "Azure Monitor", isCorrect: true, isChecked: false },
                { answerText: "Azure Activity Log", isCorrect: false, isChecked: false },
                { answerText: "Azure Advisor", isCorrect: false, isChecked: false }
            ],
            isMultiSelect: false,
            userAnswer: null
        },
        {
            questionText: "Your company has an Azure subscription that includes a Recovery Services vault. You want to use Azure Backup to schedule a backup of your company's virtual machines (VMs) to the Recovery Services vault. Which of the following VMs can you back up? Choose all that apply.",
            answerOptions: [
                { answerText: "VMs that run Windows 10.", "isCorrect": true, "isChecked": false },
                { answerText: "VMs that run Windows Server 2012 or higher.", "isCorrect": true, "isChecked": false },
                { answerText: "VMs that have NOT been shut down.", isCorrect: true, isChecked: false },
                { answerText: "VMs that run Debian 8.2+.", isCorrect: true, isChecked: false },
                { answerTex: "VMs that have been shut down.", isCorrect: true, isChecked: false }
            ],
            isMultiSelect: true,
            "userAnswer": null
        },
        {
            questionText: "You have an Azure Active Directory (Azure AD) tenant named contoso.com. You have a CSV file that contains the names and email addresses of 500 external users. You need to create a guest user account in contoso.com for each of the 500 external users. Solution: You create a PowerShell script that runs the New-AzureADUser cmdlet for each user. Does this meet the goal?",
            answerOptions: [
                { answerText: "Yes", isCorrect: false, isChecked: false },
                { answerText: "No", isCorrect: true, isChecked: false }
            ],
            isMultiSelect: false,
            userAnswer: null
        },
        {
            questionText: "You have an Azure Active Directory (Azure AD) tenant named contoso.com. You have a CSV file that contains the names and email addresses of 500 external users. You need to create a guest user account in contoso.com for each of the 500 external users. Solution: From Azure AD in the Azure portal, you use the Bulk create user operation. Does this meet the goal?",
            answerOptions: [
                { answerText: "Yes", isCorrect: false, isChecked: false },
                { answerText: "No", isCorrect: true, isChecked: false }
            ],
            isMultiSelect: false,
            userAnswer: null
        },
        {
            questionText: "You have an Azure Active Directory (Azure AD) tenant named contoso.com. You have a CSV file that contains the names and email addresses of 500 external users. You need to create a guest user account in contoso.com for each of the 500 external users. Solution: You create a PowerShell script that runs the New-AzureADMSInvitation cmdlet for each external user. Does this meet the goal?",
            answerOptions: [
                { answerText: "Yes", isCorrect: true, isChecked: false },
                { answerText: "No", isCorrect: false, isChecked: false }
            ],
            isMultiSelect: false,
            userAnswer: null
        }



    ]);
    return (
        <div>
            {questions.map((question, index) => (
                <div key={index}>
                    <p>{question.questionText}</p>
                    <ul>
                        {question.answerOptions.map((option, optionIndex) => (
                            <li key={optionIndex} style={{ color: option.isCorrect ? 'green' : 'red' }}>
                                {option.answerText}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};


export default Correc1