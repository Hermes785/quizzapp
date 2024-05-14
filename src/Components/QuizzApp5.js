import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

import image1 from "./images/Image57.png"
import image2 from "./images/Image58.png"
import image3 from "./images/Image59.png"
import image4 from "./images/Image60.png"
import image5 from "./images/Image61.png"
import image6 from "./images/Image62.png"
import image7 from "./images/Image63.png"
import image8 from "./images/Image64.png"
import image9 from "./images/Image65.png"
import image10 from "./images/Image66.png"
import image11 from "./images/Image67.png"
import image12 from "./images/Image68.png"
import image13 from "./images/Image69.png"
import image14 from "./images/Image70.png"
import image15 from "./images/Image71.png"
import image16 from "./images/Image72.png"
import image17 from "./images/Image73.png"
import image18 from "./images/Image74.png"
import image19 from "./images/Image75.png"
import image20 from "./images/Image76.png"
import image21 from "./images/Image77.png"
import image22 from "./images/Image78.png"
import image23 from "./images/Image79.png"
import image24 from "./images/Image81.png"
import image25 from "./images/Image82.png"
import image26 from "./images/Image83.png"
import image27 from "./images/Image84.png"
import image28 from "./images/Image85.png"
import image29 from "./images/Image86.png"
import image30 from "./images/Image87.png"
import image31 from "./images/Image19.png"
import image32 from "./images/Image89.png"
import image33 from "./images/Image90.png"
import image34 from "./images/Image91.png"
import image35 from "./images/Image92.png"
import image36 from "./images/Image93.png"
import image37 from "./images/Image94.png"
import image38 from "./images/Image95.png"
import image39 from "./images/Image96.png"
import image40 from "./images/Image97.png"
import image41 from "./images/Image100.png"


const QuizzApp5 = () => {
    // Définition des questions avec useState
    const [questions, setQuestions] = useState([

        {
            "questionText": "Your company has three o􀀂ces. The o􀀂ces are located in Miami, Los Angeles, and New York. Each o􀀂ce contains datacenter. You have an Azure subscription that contains resources in the East US and West US Azure regions. Each region contains a virtual network. The virtual networks are peered. You need to connect the datacenters to the subscription. The solution must minimize network latency between the datacenters. What should you create?",
            "answerOptions": [
                { "answerText": "A. three Azure Application Gateways and one On-premises data gateway", "isCorrect": false, "isChecked": false },
                { "answerText": "B. three virtual hubs and one virtual WAN", "isCorrect": false, "isChecked": false },
                { "answerText": "C. three virtual WANs and one virtual hub", "isCorrect": true, "isChecked": false },
                { "answerText": "D. three On-premises data gateways and one Azure Application Gateway", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        , {
            questionText: "You have an Azure subscription that contains the resources shown in the following table.",
            answerOptions: [
                { answerText: "A. frontend IP address", isCorrect: true, isChecked: false },
                { answerText: "B. load balancing rule", isCorrect: false, isChecked: false },
                { answerText: "C. a health probe", isCorrect: false, isChecked: false },
                { answerText: "D. a backend pool", isCorrect: false, isChecked: false },


            ],
            text: "LB1 is con􀀁gured as shown in the following table.",
            texteAFter: "You plan to create new inbound NAT rules that meet the following requirements:✑ Provide Remote Desktop access to VM1 from the internet by using port 3389. ✑ Provide Remote Desktop access to VM2 from the internet by using port 3389. What should you create on LB1 before you can create the new inbound NAT rules?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image1,
            images: image2,
        },
        {
            questionText: "You have the Azure virtual networks shown in the following table.",
            answerOptions: [
                { "answerText": "A. VNet2 andVNet3 only", "isCorrect": false, "isChecked": false },
                { "answerText": "B. VNet2 only", "isCorrect": false, "isChecked": false },
                { "answerText": "C. VNet3 and VNet4 only", "isCorrect": true, "isChecked": false },
                { "answerText": "D. VNet2, VNet3, and VNet4  ", "isCorrect": false, "isChecked": false },
            ],
            texteAFter: "To which virtual networks can you establish a peering connection from VNet1?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image3
        },
        {
            "questionText": "You have an Azure subscription that contains a virtual network named VNet1. VNet1 contains four subnets named Gateway, Perimeter, NVA, and Production. The NVA subnet contains two network virtual appliances (NVAs) that will perform network tra􀀂c inspection between the Perimeter subnet and the Production subnet. You need to implement an Azure load balancer for the NVAs. The solution must meet the following requirements: ✑ The NVAs must run in an active-active con􀀁guration that uses automatic failover. ✑ The load balancer must load balance tra􀀂c to two services on the Production subnet. The services have different IP addresses. Which three actions should you perform? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.",
            "answerOptions": [
                { "answerText": "A. Deploy a basic load balancer", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Deploy a standard load balancer", "isCorrect": true, "isChecked": false },
                { "answerText": "C. Add two load balancing rules that have HA Ports and Floating IP enabled", "isCorrect": true, "isChecked": false },
                { "answerText": "D. Add two load balancing rules that have HA Ports enabled and Floating IP disabled", "isCorrect": false, "isChecked": false },
                { "answerText": "E. Add a frontend IP con􀀁guration, a backend pool, and a health probe", "isCorrect": false, "isChecked": false },
                { "answerText": "F. Add a frontend IP con􀀁guration, two backend pools, and a health probe", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": true,
            "userAnswer": null
        }, {
            "questionText": "You have an Azure subscription named Subscription1 that contains two Azure virtual networks named VNet1 and VNet2. VNet1 contains a VPN gateway named VPNGW1 that uses static routing. There is a site-to-site VPN connection between your on-premises network and VNet1. On a computer named Client1 that runs Windows 10, you con􀀁gure a point-to-site VPN connection to VNet1. You con􀀁gure virtual network peering between VNet1 and VNet2. You verify that you can connect to VNet2 from the on-premises network. Client1 is unable to connect to VNet2. You need to ensure that you can connect Client1 to VNet2. What should you do?",
            "answerOptions": [
                { "answerText": "A. Download and re-install the VPN client con􀀁guration package on Client1.", "isCorrect": true, "isChecked": false },
                { "answerText": "B. Select Allow gateway transit on VNet1.", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Select Allow gateway transit on VNet2.", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Enable BGP on VPNGW1", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }, {
            questionText: "You have an Azure subscription that contains the resources in the following table.",
            answerOptions: [
                { "answerText": "A. the subnets on VNet1 only", "isCorrect": false, "isChecked": false },
                { "answerText": "B. the subnets on VNet2 and VNet3 only", "isCorrect": false, "isChecked": false },
                { "answerText": "C. the subnets on VNet2 only", "isCorrect": false, "isChecked": false },
                { "answerText": "D. the subnets on VNet3 only  ", "isCorrect": true, "isChecked": false },
                { "answerText": "E. subnets on VNet1, VNet2, and VNet3  ", "isCorrect": false, "isChecked": false },
            ],
            texteAFter: "To which subnets can you apply NSG1?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image4
        },

        {
            "questionText": "You have an Azure web app named webapp1. You have a virtual network named VNET1 and an Azure virtual machine named VM1 that hosts a MySQL database. VM1 connects to VNET1. You need to ensure that webapp1 can access the data hosted on VM1. What should you do?",
            "answerOptions": [
                { "answerText": "A. Deploy an internal load balancer", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Peer VNET1 to another virtual network", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Connect webapp1 to VNET1", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Deploy an Azure Application Gateway", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        , {
            questionText: "You create an Azure VM named VM1 that runs Windows Server 2019.VM1 is con􀀁gured as shown in the exhibit. (Click the Exhibit tab.)",
            answerOptions: [
                { "answerText": "A. Connect to VM1.", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Start VM1.", "isCorrect": true, "isChecked": false },
                { "answerText": "C. Capture a snapshot of VM1.", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Con􀀁gure a DNS name for VM1.  ", "isCorrect": false, "isChecked": false },

            ],
            texteAFter: "You need to enable Desired State Con􀀁guration for VM1.What should you do 􀀁rst?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image5
        }, {
            "questionText": "You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you configure?",
            "answerOptions": [
                { "answerText": "A. Floating IP (direct server return) to Disabled", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Session persistence to None", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Floating IP (direct server return) to Enabled", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Session persistence to Client IP", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        , {
            "questionText": "You need to be able to establish Remote Desktop connections from the internet to VM1. Solution: You add an inbound security rule to NSG-Subnet1 that allows connections from the Any source to the *destination for port range 3389 and uses the TCP protocol. You remove NSG-VM1 from the network interface of VM1. Does this meet the goal?",
            "answerOptions": [
                { "answerText": "A. Yes", "isCorrect": false, "isChecked": false },
                { "answerText": "B. No", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        , {
            "questionText": "You need to be able to establish Remote Desktop connections from the internet to VM1. Solution: You add an inbound security rule to NSG-Subnet1 that allows connections from the internet source to the VirtualNetwork destination for port range 3389 and uses the UDP protocol. Does this meet the goal?",
            "answerOptions": [
                { "answerText": "A. Yes", "isCorrect": false, "isChecked": false },
                { "answerText": "B. No", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }, {
            "questionText": "You need to be able to establish Remote Desktop connections from the internet to VM1. Solution: You add an inbound security rule to NSG-Subnet1 and NSG-VM1 that allows connections from the internet source to the VirtualNetwork destination for port range 3389 and uses the TCP protocol. Does this meet the goal?",
            "answerOptions": [
                { "answerText": "A. Yes", "isCorrect": true, "isChecked": false },
                { "answerText": "B. No", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }, {
            questionText: "You have an Azure subscription that contains a virtual network named VNET1. VNET1 contains the subnets shown in the following table.",
            answerOptions: [
                { "answerText": "A. 1", "isCorrect": false, "isChecked": false },
                { "answerText": "B. 3", "isCorrect": false, "isChecked": false },
                { "answerText": "C. 4", "isCorrect": true, "isChecked": false },
                { "answerText": "D. 12  ", "isCorrect": false, "isChecked": false },

            ],
            texteAFter: "Each virtual machine uses a static IP address.You need to create network security groups (NSGs) to meet following requirements: ✑ Allow web requests from the internet to VM3, VM4, VM5, and VM6. ✑ Allow all connections between VM1 and VM2.✑ Allow Remote Desktop connections to VM1 ✑ Prevent all other network tra􀀂c to VNET1 What is the minimum number of NSGs you should create?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image6
        }, {
            questionText: "You have an Azure subscription that contains the resources shown in the following table.",
            answerOptions: [
                { "answerText": "A. Remove Microsoft.Compute/virtualMachines from the policy.", "isCorrect": true, "isChecked": false },
                { "answerText": "B. Create an Azure Resource Manager template.", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Add a subnet to VNET1.", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Remove Microsoft.Network/virtualNetworks from the policy. ", "isCorrect": false, "isChecked": false },

            ],
            texteAFter: "The Not allowed resource types Azure policy that has policy enforcement enabled is assigned to RG1 and uses the following parameters:Microsoft.Network/virtualNetworksMicrosoft.Compute/virtualMachinesIn RG1, you need to create a new virtual machine named VM2, and then connect VM2 to VNET1.What should you do 􀀁rst?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image7
        }, {
            "questionText": "You need to move the adatum.com zone to an Azure DNS zone in Subscription1. The solution must minimize administrative effort. What should you use?",
            "answerOptions": [
                { "answerText": "A. Azure CLI", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Azure PowerShell", "isCorrect": true, "isChecked": false },
                { "answerText": "C. the Azure portal", "isCorrect": false, "isChecked": false },
                { "answerText": "D. the DNS Manager console", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }, {
            "questionText": "You need to direct all the Remote Desktop Protocol (RDP) connections to VM3 only. What should you configure?",
            "answerOptions": [
                { "answerText": "A. an inbound NAT rule", "isCorrect": true, "isChecked": false },
                { "answerText": "B. a new public load balancer for VM3", "isCorrect": false, "isChecked": false },
                { "answerText": "C. a frontend IP configuration", "isCorrect": false, "isChecked": false },
                { "answerText": "D. a load balancing rule", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }, {
            questionText: "You have an Azure subscription that contains the resources in the following table.",
            answerOptions: [
                { answerText: "A. Disassociate the NSG from a network interface", isCorrect: false, isChecked: false },
                { answerText: "B. Change the Port_80 inbound security rule.", isCorrect: false, isChecked: false },
                { answerText: "C. Associate the NSG to Subnet1.", isCorrect: true, isChecked: false },
                { answerText: "D. Change the DenyWebSites outbound security rule.", isCorrect: false, isChecked: false },


            ],
            text: "VM1 and VM2 are deployed from the same template and host line-of-business applications.You con􀀁gure the network security group (NSG) shown in the exhibit. (Click the Exhibit tab.)",
            texteAFter: "You need to prevent users of VM1 and VM2 from accessing websites on the Internet over TCP port 80.What should you do?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image8,
            images: image9,
        },

        {
            "questionText": "You need to connect VNet1 to VNet2. What should you do first?",
            "answerOptions": [
                { "answerText": "A. Move VM1 to Subscription2.", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Move VNet1 to Subscription2.", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Modify the IP address space of VNet2.", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Provision virtual network gateways.", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        , {
            questionText: "You plan to create an Azure virtual machine named VM1 that will be con􀀁gured as shown in the following exhibit.",
            answerOptions: [
                { answerText: "A. Use managed disks", isCorrect: true, isChecked: false },
                { answerText: "B. OS disk type", isCorrect: false, isChecked: false },
                { answerText: "C. Availability options", isCorrect: true, isChecked: false },
                { answerText: "D. Size", isCorrect: false, isChecked: false },
                { answerText: "E. mage", isCorrect: false, isChecked: false },

            ],
            text: "The planned disk con􀀁gurations for VM1 are shown in the following exhibit.",
            texteAFter: "You need to ensure that VM1 can be created in an Availability Zone.Which two settings should you modify? Each correct answer presents part of the solution.NOTE: Each correct selection is worth one point.",
            isMultiSelect: true, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image10,
            images: image11,
        }, {
            "questionText": "You need to ensure that you can establish a point-to-site VPN connection to VNet1 from Computer2. Solution: You modify the Azure Active Directory (Azure AD) authentication policies. Does this meet the goal?",
            "answerOptions": [
                { "answerText": "A. Yes", "isCorrect": false, "isChecked": false },
                { "answerText": "B. No", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        ,
        {
            "questionText": "You need to ensure that when an NSG is created, it automatically blocks TCP port 8080 between the virtual networks. Solution: You create a resource lock, and then you assign the lock to the subscription. Does this meet the goal?",
            "answerOptions": [
                { "answerText": "A. Yes", "isCorrect": false, "isChecked": false },
                { "answerText": "B. No", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }, {
            questionText: "You have an Azure subscription named Subscription1. Subscription1 contains a virtual machine named VM1.You have a computer named Computer1 that runs Windows 10. Computer1 is connected to the Internet.You add a network interface named vm1173 to VM1 as shown in the exhibit. (Click the Exhibit tab.)",
            answerOptions: [
                { "answerText": "A. Change the priority of the RDP rule.", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Attach a network interface", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Delete the DenyAllInBound rule", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Start VM1 ", "isCorrect": true, "isChecked": false },

            ],
            texteAFter: "From Computer1, you attempt to connect to VM1 by using Remote Desktop, but the connection fails.You need to establish a Remote Desktop connection to VM1.What should you do 􀀁rst?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image12

        }
        , {
            questionText: "You have the Azure virtual machines shown in the following table.",
            answerOptions: [
                { answerText: "A. Con􀀁gure a conditional forwarder on VM1", isCorrect: false, isChecked: false },
                { answerText: "B. Add service endpoints on VNET1", isCorrect: false, isChecked: false },
                { answerText: "C. Add service endpoints on VNET2 and VNET3", isCorrect: false, isChecked: false },
                { answerText: "D. Add service endpoints on VNET2 and VNET3", isCorrect: false, isChecked: false },
                { answerText: "E. Con􀀁gure peering between VNET1, VNET2, and VNET3", isCorrect: true, isChecked: false },

            ],
            text: "A DNS service is installed on VM1.You con􀀁gure the DNS servers settings for each virtual network as shown in the following exhibit.",
            texteAFter: "You need to ensure that all the virtual machines can resolve DNS names by using the DNS service on VM1.What should you do?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image13,
            images: image14,
        },
        {
            "questionText": "You need to prevent RDP access to the virtual machines from the Internet, unless the RDP connection is established from the on-premises network. The solution must ensure that all the applications can still be accessed by the Internet users. What should you do?",
            "answerOptions": [
                { "answerText": "A. Modify the address space of the local network gateway", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Create a deny rule in a network security group (NSG) that is linked to Subnet1", "isCorrect": true, "isChecked": false },
                { "answerText": "C. Remove the public IP addresses from the virtual machines", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Modify the address space of Subnet1", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        },
        {
            "questionText": "You have an Azure subscription that contains the resources in the following table.",
            answerOptions: [
                { "answerText": "A. Associate NIC1 to ASG1", "isCorrect": true, "isChecked": false },
                { "answerText": "B. Modify the properties of ASG1", "isCorrect": false, "isChecked": false },
                { "answerText": "C.Modify the properties of NSG1", "isCorrect": false, "isChecked": false },


            ],
            texteAFter: "Subnet1 is associated to VNet1. NIC1 attaches VM1 to Subnet1.You need to apply ASG1 to VM1. What should you do?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image15

        }, {
            "questionText": "You need to connect VNet1 to the on-premises network by using a site-to-site VPN. The solution must minimize cost. Which three actions should you perform? Each correct answer presents part of the solution.",
            "answerOptions": [
                { "answerText": "A. Create a connection", "isCorrect": true, "isChecked": false },
                { "answerText": "B. Create a local site VPN gateway", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Create a VPN gateway that uses the VpnGw1 SKU", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Create a gateway subnet", "isCorrect": true, "isChecked": false },
                { "answerText": "E. Create a VPN gateway that uses the Basic SKU", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": true,
            "userAnswer": null
        },
        {
            "questionText": "You have an Azure subscription that contains the resources shown in the following table.",
            answerOptions: [
                { "answerText": "A. East US and North Europe only", "isCorrect": false, "isChecked": false },
                { "answerText": "B. East US only", "isCorrect": true, "isChecked": false },
                { "answerText": "C. East US, West Europe, and North Europe", "isCorrect": false, "isChecked": false },
                { "answerText": "D. East US and West Europe only", "isCorrect": false, "isChecked": false },
            ],
            texteAFter: "You need to create a network interface named NIC1.In which location can you create NIC1?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image16

        }, {
            questionText: "You have Azure virtual machines that run Windows Server 2019 and are con􀀁gured as shown in the following table.",
            answerOptions: [
                { answerText: "A. Update the DNS su􀀂x on VM1 to be adatum.com", isCorrect: true, isChecked: false },
                { answerText: "B. Con􀀁gure the name servers for adatum.com at the domain registrar", isCorrect: false, isChecked: false },
                { answerText: "C. Create an SRV record in the contoso.com zone", isCorrect: false, isChecked: false },
                { answerText: "D. Modify the Access control (IAM) settings for link1", isCorrect: false, isChecked: false },


            ],
            text: "You create a public Azure DNS zone named adatum.com and a private Azure DNS zone named contoso.com.For controso.com, you create a virtual network link named link1 as shown in the exhibit. (Click the Exhibit tab.)",
            texteAFter: "You discover that VM1 can resolve names in contoso.com but cannot resolve names in adatum.com. VM1 can resolve other hosts on the Internet.You need to ensure that VM1 can resolve host names in adatum.com.What should you do?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image17,
            images: image18,
        },
        {
            questionText: "You have an Azure subscription that contains the virtual machines shown in the following table",
            answerOptions: [
                { "answerText": "A. Yes", "isCorrect": false, "isChecked": false },
                { "answerText": "B. No", "isCorrect": true, "isChecked": false },


            ],
            texteAFter: "You deploy a load balancer that has the following con􀀁gurations:✑ Name: LB1✑ Type: Internal ✑ SKU: Standard✑ Virtual network: VNET1You need to ensure that you can add VM1 and VM2 to the backend pool of LB1.Solution: You create a Basic SKU public IP address, associate the address to the network interface of VM1, and then start VM1.Does this meet the goal?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image19

        },
        {
            questionText: "You have an Azure subscription that contains the virtual machines shown in the following table",
            answerOptions: [
                { "answerText": "A. Yes", "isCorrect": false, "isChecked": false },
                { "answerText": "B. No", "isCorrect": true, "isChecked": false },


            ],
            texteAFter: "You deploy a load balancer that has the following con􀀁gurations: ✑ Name: LB1✑ Type: Internal ✑ SKU: Standard✑ Virtual network: VNET1You need to ensure that you can add VM1 and VM2 to the backend pool of LB1.Solution: You create a Basic SKU public IP address, associate the address to the network interface of VM1, and then start VM1.Does this meet the goal?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image19

        },
        {
            questionText: "You have an Azure subscription that contains the virtual machines shown in the following table",
            answerOptions: [
                { "answerText": "A. Yes", "isCorrect": true, "isChecked": false },
                { "answerText": "B. No", "isCorrect": false, "isChecked": false },


            ],
            texteAFter: "You deploy a load balancer that has the following con􀀁gurations: ✑ Name: LB1✑ Type: Internal✑ SKU: Standard✑ Virtual network: VNET1 You need to ensure that you can add VM1 and VM2 to the backend pool of LB1.Solution: You create two Standard SKU public IP addresses and associate a Standard SKU public IP address to the network interface of eachvirtual machine.Does this meet the goal?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image19

        },
        {
            "questionText": "You need to ensure that you can establish a point-to-site VPN connection to VNet1 from Computer2. Solution: You export the client certificate from Computer1 and install the certificate on Computer2. Does this meet the goal?",
            "answerOptions": [
                { "answerText": "A. Yes", "isCorrect": true, "isChecked": false },
                { "answerText": "B. No", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        },

        {
            questionText: "You have an Azure virtual machine named VM1.The network interface for VM1 is con􀀁gured as shown in the exhibit. (Click the Exhibit tab.)",
            answerOptions: [
                { "answerText": "A. Modify the protocol of Rule4", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Delete Rule1", "isCorrect": false, "isChecked": false },
                { "answerText": "C. For Rule5, change the Action to Allow and change the priority to 401", "isCorrect": true, "isChecked": false },
                { "answerText": "D. Create a new inbound rule that allows TCP protocol 443 and con􀀁gure the rule to have a priority of 501.", "isCorrect": false, "isChecked": false },
            ],
            texteAFter: "You deploy a web server on VM1, and then create a secure website that is accessible by using the HTTPS protocol. VM1 is used as a web serveronly.You need to ensure that users can connect to the website from the Internet. What should you do?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image20

        }, {
            "questionText": "You need to ensure that when an NSG is created, it automatically blocks TCP port 8080 between the virtual networks. Solution: From the Resource providers blade, you unregister the Microsoft.ClassicNetwork provider. Does this meet the goal?",
            "answerOptions": [
                { "answerText": "A. Yes", "isCorrect": false, "isChecked": false },
                { "answerText": "B. No", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }, {
            questionText: "You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using anAzure LoadBalancer.The effective network security con􀀁gurations for VM2 are shown in the following exhibit.",
            answerOptions: [
                { "answerText": "A. Yes", "isCorrect": false, "isChecked": false },
                { "answerText": "B. No", "isCorrect": true, "isChecked": false },

            ],
            texteAFter: "You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail.You verify that the Load Balancer rules are con􀀁gured correctly.You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443.Solution: You create an inbound security rule that denies all tra􀀂c from the 131.107.100.50 source and has a cost of 64999.Does this meet the goal?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image21

        },
        {
            questionText: "You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using anAzure LoadBalancer.The effective network security con􀀁gurations for VM2 are shown in the following exhibit.",
            answerOptions: [
                { "answerText": "A. Yes", "isCorrect": false, "isChecked": false },
                { "answerText": "B. No", "isCorrect": true, "isChecked": false },

            ],
            texteAFter: "You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail.You verify that the Load Balancer rules are con􀀁gured correctly.You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443.Solution: You delete the BlockAllOther443 inbound security rule.Does this meet the goal?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image21

        },

        {
            questionText: "You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail.You verify that the Load Balancer rules are con􀀁gured correctly.You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443. Solution: You modify the priority of the Allow_131.107.100.50 inbound security rule. Does this meet the goal?",
            answerOptions: [
                { "answerText": "A. Yes", "isCorrect": false, "isChecked": false },
                { "answerText": "B. No", "isCorrect": true, "isChecked": false },

            ],
            texteAFter: "You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail.You verify that the Load Balancer rules are con􀀁gured correctly.You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443.Solution: You delete the BlockAllOther443 inbound security rule.Does this meet the goal?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image21

        }, {
            "questionText": "You need to ensure that when an NSG is created, it automatically blocks TCP port 8080 between the virtual networks. Solution: You assign a built-in policy definition to the subscription. Does this meet the goal?",
            "answerOptions": [
                { "answerText": "A. Yes", "isCorrect": false, "isChecked": false },
                { "answerText": "B. No", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        },
        {
            "questionText": "You plan to deploy an Azure Kubernetes Service (AKS) cluster to support an app named App1. On-premises clients connect to App1 by using the IP address of the pod. For the AKS cluster, you need to choose a network type that will support App1. What should you choose?",
            "answerOptions": [
                { "answerText": "A. kubenet", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Azure Container Networking Interface (CNI)", "isCorrect": true, "isChecked": false },
                { "answerText": "C. Hybrid Connection endpoints", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Azure Private Link", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        },
        {
            questionText: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution thatmight meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.After you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.You have an Azure subscription that contains the virtual machines shown in the following table.",
            answerOptions: [
                { "answerText": "A. Yes", "isCorrect": false, "isChecked": false },
                { "answerText": "B. B", "isCorrect": true, "isChecked": false },

            ],
            texteAFter: "You deploy a load balancer that has the following con􀀁gurations:✑ Name: LB1✑ Type: Internal✑ SKU: Standard ✑ Virtual network: VNET1You need to ensure that you can add VM1 and VM2 to the backend pool of LB1.Solution: You disassociate the public IP address from the network interface of VM2.Does this meet the goal?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image22

        },
        {
            "questionText": "You have an Azure subscription that contains 10 virtual networks. The virtual networks are hosted in separate resource groups. Another administrator plans to create several network security groups (NSGs) in the subscription. You need to ensure that when an NSG is created, it automatically blocks TCP port 8080 between the virtual networks. Solution: You configure a custom policy definition, and then you assign the policy to the subscription. Does this meet the goal?",
            "answerOptions": [
                { "answerText": "A. Yes", "isCorrect": true, "isChecked": false },
                { "answerText": "B. No", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }, {
            "questionText": "You have two Azure virtual networks named VNet1 and VNet2. VNet1 contains an Azure virtual machine named VM1. VNet2 contains an Azure virtual machine named VM2. VM1 hosts a frontend application that connects to VM2 to retrieve data. Users report that the frontend application is slower than usual. You need to view the average round-trip time (RTT) of the packets from VM1 to VM2. Which Azure Network Watcher feature should you use?",
            "answerOptions": [
                { "answerText": "A. IP flow verify", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Connection troubleshoot", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Connection monitor", "isCorrect": true, "isChecked": false },
                { "answerText": "D. NSG flow logs", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        ,
        {
            questionText: "You have an Azure subscription that contains two virtual machines as shown in the following table.",
            answerOptions: [
                { "answerText": "A. vm1.core.windows.net", "isCorrect": false, "isChecked": false },
                { "answerText": "B. vm1.azure.com", "isCorrect": true, "isChecked": false },
                { "answerText": "C. vm1.westeurope.cloudapp.azure.com", "isCorrect": false, "isChecked": false },
                { "answerText": "D. vm1.internal.cloudapp.net", "isCorrect": false, "isChecked": false }

            ],
            texteAFter: "You perform a reverse DNS lookup for 10.0.0.4 from VM2. Which FQDN will be returned?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image23

        },

        {
            questionText: "You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using anAzure LoadBalancer. The effective network security con􀀁gurations for VM2 are shown in the following exhibit.",
            answerOptions: [
                { "answerText": "A. Yes", "isCorrect": true, "isChecked": false },
                { "answerText": "B. No", "isCorrect": false, "isChecked": false },

            ],
            texteAFter: "You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail. You verify that the Load Balancer rules are con􀀁gured correctly. You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443.Solution: You create an inbound security rule that allows any tra􀀂c from the AzureLoadBalancer source and has a cost of 150.Does this meet the goal?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image24

        },
        {
            "questionText": "You have an Azure subscription that contains a policy-based virtual network gateway named GW1 and a virtual network named VNet1. You need to ensure that you can configure a point-to-site connection from an on-premises computer to VNet1. Which two actions should you perform? Each correct answer presents part of the solution.",
            "answerOptions": [
                { "answerText": "A. Add a service endpoint to VNet1", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Reset GW1", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Create a route-based virtual network gateway", "isCorrect": true, "isChecked": false },
                { "answerText": "D. Add a connection to GW1", "isCorrect": false, "isChecked": false },
                { "answerText": "E. Delete GW1", "isCorrect": false, "isChecked": false },
                { "answerText": "F. Add a public IP address space to VNet1", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": true,
            "userAnswer": null
        },
        {
            "questionText": "You manage a virtual network named VNet1 that is hosted in the West US Azure region. VNet1 hosts two virtual machines named VM1 and VM2 that run Windows Server. You need to inspect all the network traffic from VM1 to VM2 for a period of three hours. Solution: From Azure Network Watcher, you create a packet capture. Does this meet the goal?",
            "answerOptions": [
                { "answerText": "A. Yes", "isCorrect": true, "isChecked": false },
                { "answerText": "B. No", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        , {
            "questionText": "You manage a virtual network named VNet1 that is hosted in the West US Azure region. VNet1 hosts two virtual machines named VM1 and VM2 that run Windows Server. You need to inspect all the network traffic from VM1 to VM2 for a period of three hours. Solution: From Azure Network Watcher, you create a connection monitor. Does this meet the goal?",
            "answerOptions": [
                { "answerText": "A. Yes", "isCorrect": true, "isChecked": false },
                { "answerText": "B. No", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        },
        {
            "questionText": "You manage a virtual network named VNet1 that is hosted in the West US Azure region. VNet1 hosts two virtual machines named VM1 and VM2 that run Windows Server. You need to inspect all the network traffic from VM1 to VM2 for a period of three hours. Solution: From Performance Monitor, you create a Data Collector Set (DCS). Does this meet the goal?",
            "answerOptions": [
                { "answerText": "A. Yes", "isCorrect": false, "isChecked": false },
                { "answerText": "B. No", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        , {
            "questionText": "You manage a virtual network named VNet1 that is hosted in the West US Azure region. VNet1 hosts two virtual machines named VM1 and VM2 that run Windows Server. You need to inspect all the network traffic from VM1 to VM2 for a period of three hours. Solution: From Azure Monitor, you create a metric on Network In and Network Out. Does this meet the goal?",
            "answerOptions": [
                { "answerText": "A. Yes", "isCorrect": false, "isChecked": false },
                { "answerText": "B. No", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        ,

        {
            questionText: "You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using anAzure LoadBalancer.The effective network security con􀀁gurations for VM2 are shown in the following exhibit."
            , answerOptions: [
                { "answerText": "A. Yes", "isCorrect": false, "isChecked": false },
                { "answerText": "B. No", "isCorrect": true, "isChecked": false },

            ],
            texteAFter: "You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail. You verify that the Load Balancer rules are con􀀁gured correctly. You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443.Solution: You create an inbound security rule that allows any tra􀀂c from the AzureLoadBalancer source and has a cost of 150.Does this meet the goal?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image25

        },


        {
            questionText: "You have a virtual network named VNet1 as shown in the exhibit. (Click the Exhibit tab.)"
            , answerOptions: [
                { "answerText": "A. Modify the address space of VNet1.", "isCorrect": true, "isChecked": false },
                { "answerText": "B. Add a gateway subnet to VNet1.", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Create a subnet on VNet1 and VNet2.", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Con􀀁gure a service endpoint on VNet2.", "isCorrect": false, "isChecked": false },

            ],
            texteAFter: "No devices are connected to VNet1.You plan to peer VNet1 to another virtual network named VNet2. VNet2 has an address space of 10.2.0.0/16.You need to create the peering.What should you do 􀀁rst?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image26

        }, {
            questionText: "You have the Azure virtual machines shown in the following table.",
            answerOptions: [
                { answerText: "A. comp2.contoso.com and comp4.contoso.com only", isCorrect: false, isChecked: false },
                { answerText: "B. comp1.contoso.com, comp2.contoso.com, comp3.contoso.com, and comp4.contoso.com", isCorrect: true, isChecked: false },
                { answerText: "C. comp2.contoso.com only", isCorrect: false, isChecked: false },
                { answerText: "D. comp1.contoso.com and comp2.contoso.com only", isCorrect: false, isChecked: false },
                { answerText: "E. comp1.contoso.com, comp2.contoso.com, and comp4.contoso.com only", isCorrect: false, isChecked: false },

            ],
            text: "VNET1 is linked to a private DNS zone named contoso.com that contains the records shown in the following table.",
            texteAFter: "You need to ping VM2 from VM1. Which DNS names can you use to ping VM2?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image27,
            images: image28,
        },


        {
            "questionText": "You have a computer named Computer1 that has a point-to-site VPN connection to an Azure virtual network named VNet1. The point-to-site connection uses a self-signed certificate. From Azure, you download and install the VPN client configuration package on a computer named Computer2. You need to ensure that you can establish a point-to-site VPN connection to VNet1 from Computer2. Solution: On Computer2, you set the Startup type for the IPSec Policy Agent service to Automatic. Does this meet the goal?",
            "answerOptions": [
                { "answerText": "A. Yes", "isCorrect": false, "isChecked": false },
                { "answerText": "B. No", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }

        , {
            "questionText": "You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you configure?",
            "answerOptions": [
                { "answerText": "A. Session persistence to Client IP and protocol", "isCorrect": true, "isChecked": false },
                { "answerText": "B. Protocol to UDP ", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Session persistence to None", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Floating IP (direct server return) to Enabled", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        },


        {
            questionText: "You have an Azure subscription that uses the public IP addresses shown in the following table."
            , answerOptions: [
                { "answerText": "A. IP1, IP2, and IP3.", "isCorrect": false, "isChecked": false },
                { "answerText": "B. IP2 only", "isCorrect": false, "isChecked": false },
                { "answerText": "C. IP3 only.", "isCorrect": true, "isChecked": false },
                { "answerText": "D. IP1 and IP3 only", "isCorrect": false, "isChecked": false },

            ],
            texteAFter: "You need to create a public Azure Standard Load Balancer.Which public IP addresses can you use?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image29

        },
        {
            "questionText": "You have an Azure subscription. You are deploying an Azure Kubernetes Service (AKS) cluster that will contain multiple pods. The pods will use Kubernetes networking. You need to restrict network traffic between the pods. What should you configure on the AKS cluster?",
            "answerOptions": [
                { "answerText": "A. the Azure network policy", "isCorrect": false, "isChecked": false },
                { "answerText": "B. the Calico network policy", "isCorrect": true, "isChecked": false },
                { "answerText": "C. pod security policies", "isCorrect": false, "isChecked": false },
                { "answerText": "D. an application security group", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        , {
            "questionText": "You have five Azure virtual machines that run Windows Server 2016. The virtual machines are configured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you configure?",
            "answerOptions": [
                { "answerText": "A. Floating IP (direct server return) to Enabled", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Floating IP (direct server return) to Disabled", "isCorrect": false, "isChecked": false },
                { "answerText": "C. a health probe", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Session persistence to Client IP and Protocol", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        },

        {
            "questionText": "You have an Azure subscription that contains two virtual machines named VM1 and VM2. You create an Azure load balancer. You plan to create a load balancing rule that will load balance HTTPS traffic between VM1 and VM2. Which two additional load balancer resources should you create before you can create the load balancing rule? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.",
            "answerOptions": [
                { "answerText": "A. a frontend IP address", "isCorrect": false, "isChecked": false },
                { "answerText": "B. an inbound NAT rule", "isCorrect": false, "isChecked": false },
                { "answerText": "C. a virtual network", "isCorrect": false, "isChecked": false },
                { "answerText": "D. a backend pool", "isCorrect": true, "isChecked": false },
                { "answerText": "E. a health probe", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": true,
            "userAnswer": null
        }
        ,
        {
            "questionText": "You have an on-premises network that contains a database server named dbserver1. You have an Azure subscription. You plan to deploy three Azure virtual machines. Each virtual machine will be deployed to a separate availability zone. You need to configure an Azure VPN gateway for a site-to-site VPN. The solution must ensure that the virtual machines can connect to dbserver1. Which type of public IP address SKU and assignment should you use for the gateway?",
            "answerOptions": [
                { "answerText": "A. a basic SKU and a static IP address assignment", "isCorrect": false, "isChecked": false },
                { "answerText": "B. a standard SKU and a static IP address assignment", "isCorrect": false, "isChecked": false },
                { "answerText": "C. a basic SKU and a dynamic IP address assignment", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        },

        {
            "questionText": "You have an on-premises datacenter and an Azure subscription. You plan to connect the datacenter to Azure by using ExpressRoute. You need to deploy an ExpressRoute gateway. The solution must meet the following requirements: ✑ Support up to 10 Gbps of traffic. ✑ Support availability zones. ✑ Support FastPath. ✑ Minimize costs. Which SKU should you deploy?",
            "answerOptions": [
                { "answerText": "A. ERGw1AZ", "isCorrect": false, "isChecked": false },
                { "answerText": "B. ERGw2", "isCorrect": false, "isChecked": false },
                { "answerText": "C. ERGw3", "isCorrect": false, "isChecked": false },
                { "answerText": "D. ERGw3AZ", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }

        , {
            "questionText": "Your on-premises network contains an SMB share named Share1. You have an Azure subscription that contains the following resources: ✑ A web app named webapp1 ✑ A virtual network named VNET1 You need to ensure that webapp1 can connect to Share1. What should you deploy?",
            "answerOptions": [
                { "answerText": "A. an Azure Application Gateway", "isCorrect": false, "isChecked": false },
                { "answerText": "B. an Azure Active Directory (Azure AD) Application Proxy", "isCorrect": false, "isChecked": false },
                { "answerText": "C. an Azure Virtual Network Gateway", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }, {
            "questionText": "You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource Manager template. You need to ensure that NGINX is available on all the virtual machines after they are deployed. What should you use?",
            "answerOptions": [
                { "answerText": "A. the Publish-AzVMDscConfiguration cmdlet", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Azure Application Insights", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Azure Custom Script Extension", "isCorrect": true, "isChecked": false },
                { "answerText": "D. the New-AzCon􀀁gurationAssignement cmdlet", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }

        ,
        {
            questionText: "Your on-premises network contains a VPN gateway You have an Azure subscription that contains the resources shown in the following table."
            , answerOptions: [
                { "answerText": "A. a network security group (NSG)", "isCorrect": true, "isChecked": false },
                { "answerText": "B. service endpoints.", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Azure Peering Service", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Azure Firewall", "isCorrect": false, "isChecked": false },

            ],
            texteAFter: "You need to create a public Azure Standard Load Balancer.Which public IP addresses can you use?You need to ensure that all the tra􀀂c from VM1 to storage1 travels across the Microsoft backbone network.What should you con􀀁gure?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image30

        },

        {
            "questionText": "You plan to deploy route-based Site-to-Site VPN connections between several on-premises locations and an Azure virtual network. Which tunneling protocol should you use?",
            "answerOptions": [
                { "answerText": "A. IKEv1", "isCorrect": false, "isChecked": false },
                { "answerText": "B. PPTP", "isCorrect": false, "isChecked": false },
                { "answerText": "C. IKEv2", "isCorrect": true, "isChecked": false },
                { "answerText": "D. L2TP", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        },
        {
            questionText: "You have an Azure subscription that contains the resources shown in the following table."
            , answerOptions: [
                { "answerText": "A. TestSubnet1", "isCorrect": true, "isChecked": false },
                { "answerText": "B. DemoSubnet1", "isCorrect": false, "isChecked": false },
                { "answerText": "C. RecoverySubnetA", "isCorrect": false, "isChecked": false },
                { "answerText": "D. RecoverySubnetB", "isCorrect": false, "isChecked": false },

            ],
            texteAFter: "You con􀀁gure Azure Site Recovery to replicate VM1 between the US East and West US regions.You perform a test failover of VM1 and specify VNET2 as the target virtual network.When the test version of VM1 is created, to which subnet will the virtual machine be connected?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image31

        },

        {
            "questionText": "You have 􀀁ve Azure virtual machines that run Windows Server 2016. The virtual machines are con􀀁gured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you con􀀁gure?",
            "answerOptions": [
                { "answerText": "A. Protocol to UDP", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Session persistence to None", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Floating IP (direct server return) to Disabled", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Session persistence to Client IP", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        },
        {
            "questionText": "You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource Manager template. You need to ensure that NGINX is available on all the virtual machines after they are deployed. What should you use?",
            "answerOptions": [
                { "answerText": "A. the Publish-AzVMDscCon􀀁guration cmdlet", "isCorrect": false, "isChecked": false },
                { "answerText": "B. a Microsoft Endpoint Manager device con􀀁guration pro􀀁le", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Deployment Center in Azure App Service", "isCorrect": false, "isChecked": false },
                { "answerText": "D. a Desired State Con􀀁guration (DSC) extension", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        },
        {
            "questionText": "You have 􀀁ve Azure virtual machines that run Windows Server 2016. The virtual machines are con􀀁gured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you con􀀁gure?",
            "answerOptions": [
                { "answerText": "A. Floating IP (direct server return) to Disabled", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Session persistence to Client IP", "isCorrect": true, "isChecked": false },
                { "answerText": "C. Protocol to UDP", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Idle Time-out (minutes) to 20", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        },
        {
            "questionText": "You have an Azure subscription that contains 20 virtual machines, a network security group (NSG) named NSG1, and two virtual networks named VNET1 and VNET2 that are peered. You plan to deploy an Azure Bastion Basic SKU host named Bastion1 to VNET1. You need to con􀀁gure NSG1 to allow inbound access to the virtual machines via Bastion1. Which port should you con􀀁gure for the inbound security rule?",
            "answerOptions": [
                { "answerText": "A. 22", "isCorrect": false, "isChecked": false },
                { "answerText": "B. 443", "isCorrect": true, "isChecked": false },
                { "answerText": "C. 389", "isCorrect": false, "isChecked": false },
                { "answerText": "D. 8080", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }, {
            "questionText": "You have 􀀁ve Azure virtual machines that run Windows Server 2016. The virtual machines are con􀀁gured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you con􀀁gure?",
            "answerOptions": [
                { "answerText": "A. Session persistence to None", "isCorrect": false, "isChecked": false },
                { "answerText": "B. a health probe", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Session persistence to Client IP", "isCorrect": true, "isChecked": false },
                { "answerText": "D. Idle Time-out (minutes) to 20", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        ,
        {
            questionText: "You have an Azure subscription that contains the virtual networks shown in the following table."
            , answerOptions: [
                { "answerText": "A. VNET1, VNET2, VNET3, and VNET4", "isCorrect": false, "isChecked": false },
                { "answerText": "B. VNET1 and VNET2 only", "isCorrect": false, "isChecked": false },
                { "answerText": "C. VNET1 only", "isCorrect": true, "isChecked": false },
                { "answerText": "D. VNET1, VNET2, and VNET4 only", "isCorrect": false, "isChecked": false },
                { "answerText": "E. VNET1 and VNET4 only", "isCorrect": false, "isChecked": false },
            ],
            texteAFter: "You need to deploy an Azure 􀀁rewall named AF1 to RG1 in the West US Azure region.To which virtual networks can you deploy AF1?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image32

        },


        {
            questionText: "You have an on-premises network.You have an Azure subscription that contains three virtual networks named VNET1. VNET2. and VNET3. The virtual networks are peered and connected to the on-premises network. The subscription contains the virtual machines shown in the following table."
            , answerOptions: [
                { "answerText": "A. 1", "isCorrect": false, "isChecked": false },
                { "answerText": "B. 2", "isCorrect": true, "isChecked": false },
                { "answerText": "C. 3", "isCorrect": false, "isChecked": false },
                { "answerText": "D. 3", "isCorrect": false, "isChecked": false },
                { "answerText": "E. 4", "isCorrect": false, "isChecked": false },
            ],
            texteAFter: "You need to monitor connectivity between the virtual machines and the on-premises network by using Connection Monitor.What is the minimum number of connection monitors you should deploy?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image33

        }
        ,
        {
            "questionText": "You have an Azure subscription that contains a storage account. The account stores website data. You need to ensure that inbound user tra􀀂c uses the Microsoft point-of-presence (POP) closest to the user's location. What should you con􀀁gure?",
            "answerOptions": [
                { "answerText": "A. private endpoints", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Azure Firewall rules", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Routing preference", "isCorrect": true, "isChecked": false },
                { "answerText": "D. load balancing", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        ,

        {
            "questionText": "You have two Azure virtual machines named VM1 and VM2 that run Windows Server. The virtual machines are in a subnet named Subnet1. Subnet1 is in a virtual network named VNet1. You need to prevent VM1 from accessing VM2 on port 3389. What should you do?",
            "answerOptions": [
                { "answerText": "A. Create a network security group (NSG) that has an outbound security rule to deny destination port 3389 and apply the NSG to the network interface of VM1.", "isCorrect": true, "isChecked": false },
                { "answerText": "B. Con􀀁gure Azure Bastion in VNet1.", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Create a network security group (NSG) that has an outbound security rule to deny source port 3389 and apply the NSG to Subnet1.", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Create a network security group (NSG) that has an inbound security rule to deny source port 3389 and apply the NSG to Subnet1.", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        },


        {
            questionText: "You have an Azure subscription that contains the resources shown in the following table."
            , answerOptions: [
                { "answerText": "A. Con􀀁gure the Hybrid Connection Manager.", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Upgrade ASP1 to the Premium SKU", "isCorrect": false, "isChecked": false },
                { "answerText": "Create a route table. 3", "isCorrect": true, "isChecked": false },
                { "answerText": "D. Create an Azure Network Watcher.", "isCorrect": false, "isChecked": false },

            ],
            texteAFter: "You need to manage outbound tra􀀂c from VNET1 by using Firewall1.What should you do 􀀁rst?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image34

        }, {
            questionText: "You have an Azure subscription that contains the resources shown in the following table."
            , answerOptions: [
                { "answerText": "A. VM1 only", "isCorrect": true, "isChecked": false },
                { "answerText": "B. contoso.com only", "isCorrect": false, "isChecked": false },
                { "answerText": "C. App1 and contoso.com only", "isCorrect": false, "isChecked": false },
                { "answerText": "D. VM1 and contoso.com only.", "isCorrect": false, "isChecked": false },
                { "answerText": "E. VM1, App1, and contoso.com", "isCorrect": false, "isChecked": false },


            ],
            texteAFter: "All the resources connect to a virtual network named VNet1.You plan to deploy an Azure Bastion host named Bastion1 to VNet1. Which resources can be protected by using Bastion1?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image34

        },
        {
            "questionText": "You have 􀀁ve Azure virtual machines that run Windows Server 2016. The virtual machines are con􀀁gured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you con􀀁gure?",
            "answerOptions": [
                { "answerText": "A. Session persistence to None", "isCorrect": false, "isChecked": false },
                { "answerText": "B. a health probe", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Session persistence to Client IP and protocol", "isCorrect": true, "isChecked": false },
                { "answerText": "D. Idle Time-out (minutes) to 20", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        , {
            "questionText": "You have 􀀁ve Azure virtual machines that run Windows Server 2016. The virtual machines are con􀀁gured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you con􀀁gure?",
            "answerOptions": [
                { "answerText": "A. a health probe", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Floating IP (direct server return) to Enabled", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Session persistence to Client IP and protocol", "isCorrect": true, "isChecked": false },
                { "answerText": "D. Protocol to UDP", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }, {

            questionText: "You have an Azure subscription that contains 10 virtual machines and the resources shown in the following table."
            , answerOptions: [
                { "answerText": "A. Resize the subnet of Bastion1", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Con􀀁gure host scaling.", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Create a network security group (NSG)", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Upgrade Bastion1 to the Standard SKU.", "isCorrect": true, "isChecked": false },



            ],
            texteAFter: "You need to ensure that Bastion1 can support 100 concurrent SSH users. The solution must minimize administrative effort.What should you do first?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image35

        },
        {
            "questionText": "You have five Azure virtual machines that run Windows Server 2016. The virtual machines are con􀀁gured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you con􀀁gure?",
            "answerOptions": [
                { "answerText": "A. Session persistence to Client IP and protocol", "isCorrect": true, "isChecked": false },
                { "answerText": "B. Protocol to UDP", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Session persistence to None", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Floating IP (direct server return) to Disabled", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        , {
            "questionText": "You have 􀀁ve Azure virtual machines that run Windows Server 2016. The virtual machines are con􀀁gured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you con􀀁gure?",
            "answerOptions": [
                { "answerText": "A. Floating IP (direct server return) to Enabled", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Session persistence to Client IP", "isCorrect": true, "isChecked": false },
                { "answerText": "C. Protocol to UDP", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Idle Time-out (minutes) to 20", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }, {

            questionText: "You have an Azure subscription that has the public IP addresses shown in the following table."
            , answerOptions: [
                { "answerText": "A. IP1 only", "isCorrect": false, "isChecked": false },
                { "answerText": "B. IP1 and IP2 only.", "isCorrect": true, "isChecked": false },
                { "answerText": "C. IP3, IP4, and IP5 only", "isCorrect": false, "isChecked": false },
                { "answerText": "D. IP1, IP2, IP4, and IP5 only", "isCorrect": false, "isChecked": false },
                { "answerText": "E. IP1, IP2, IP3, IP4, and IP5", "isCorrect": false, "isChecked": false },


            ],
            texteAFter: "You plan to deploy an Azure Bastion Basic SKU host named Bastion1.Which IP addresses can you use?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image36

        },
        {
            "questionText": "You have 􀀁ve Azure virtual machines that run Windows Server 2016. The virtual machines are con􀀁gured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you con􀀁gure?",
            "answerOptions": [
                { "answerText": "A. Floating IP (direct server return) to Disabled", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Floating IP (direct server return) to Enabled", "isCorrect": false, "isChecked": false },
                { "answerText": "C. a health probe", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Session persistence to Client IP", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        , {
            "questionText": "You have 􀀁ve Azure virtual machines that run Windows Server 2016. The virtual machines are con􀀁gured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you con􀀁gure?",
            "answerOptions": [
                { "answerText": "A. Floating IP (direct server return) to Enabled", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Idle Time-out (minutes) to 20", "isCorrect": false, "isChecked": false },
                { "answerText": "C. a health probe", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Session persistence to Client IP", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }

        , {

            questionText: "  You have two Azure subscriptions named Sub1 and Sub2.Sub1 contains a virtual machine named VM1 and a storage account named storage1.VM1 is associated to the resources shown in the following table."
            , answerOptions: [
                { "answerText": "A. VM1, Disk1, and NetInt1 only", "isCorrect": false, "isChecked": false },
                { "answerText": "B. VM1, Disk1, and VNet1 only", "isCorrect": false, "isChecked": false },
                { "answerText": "C. VM1, Disk1, and storage1 only", "isCorrect": false, "isChecked": false },
                { "answerText": "D. VM1, Disk1, NetInt1, and VNet1", "isCorrect": true, "isChecked": false },



            ],
            texteAFter: "You need to move VM1 to Sub2.Which resources should you move to Sub2?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image37

        }
        , {
            "questionText": "You have 􀀁ve Azure virtual machines that run Windows Server 2016. The virtual machines are con􀀁gured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you con􀀁gure?",
            "answerOptions": [
                { "answerText": "A. Session persistence to Client IP and protocol", "isCorrect": true, "isChecked": false },
                { "answerText": "B. Idle Time-out (minutes) to 20", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Session persistence to None", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Floating IP (direct server return) to Enabled", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        , {
            "questionText": "You have 􀀁ve Azure virtual machines that run Windows Server 2016. The virtual machines are con􀀁gured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you con􀀁gure?",
            "answerOptions": [
                { "answerText": "A. Floating IP (direct server return) to Disabled", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Idle Time-out (minutes) to 20", "isCorrect": false, "isChecked": false },
                { "answerText": "C. a health probe", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Session persistence to Client IP", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        , {
            "questionText": "You have 􀀁ve Azure virtual machines that run Windows Server 2016. The virtual machines are con􀀁gured as web servers. You have an Azure load balancer named LB1 that provides load balancing services for the virtual machines. You need to ensure that visitors are serviced by the same web server for each request. What should you con􀀁gure?",
            "answerOptions": [
                { "answerText": "A. Session persistence to Client IP", "isCorrect": true, "isChecked": false },
                { "answerText": "B. Idle Time-out (minutes) to 20", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Session persistence to None", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Protocol to UDP", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }

        , {
            "questionText": "You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource Manager template. You need to ensure that NGINX is available on all the virtual machines after they are deployed. What should you use?",
            "answerOptions": [
                { "answerText": "A. the Publish-AzVMDscCon􀀁guration cmdlet", "isCorrect": false, "isChecked": false },
                { "answerText": "B. a Microsoft Endpoint Manager device con􀀁guration pro􀀁le", "isCorrect": false, "isChecked": false },
                { "answerText": "C. Azure Application Insights", "isCorrect": false, "isChecked": false },
                { "answerText": "D. a Desired State Con􀀁guration (DSC) extension", "isCorrect": true, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        },
        {
            "questionText": "You plan to deploy several Azure virtual machines that will run Windows Server 2019 in a virtual machine scale set by using an Azure Resource Manager template. You need to ensure that NGINX is available on all the virtual machines after they are deployed. What should you use?",
            "answerOptions": [
                { "answerText": "A. Azure Custom Script Extension", "isCorrect": true, "isChecked": false },
                { "answerText": "B. Deployment Center in Azure App Service", "isCorrect": false, "isChecked": false },
                { "answerText": "C. the New-AzCon􀀁gurationAssignment cmdlet", "isCorrect": false, "isChecked": false },
                { "answerText": "D. a Microsoft Endpoint Manager device con􀀁guration pro􀀁le", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        }
        , {
            "questionText": "You have an Azure subscription that contains a Recovery Services vault named Vault1. You need to enable multi-user authorization (MAU) for Vault1. Which resource should you create 􀀁rst?",
            "answerOptions": [
                { "answerText": "A. an administrative unit", "isCorrect": false, "isChecked": false },
                { "answerText": "B. a managed identity", "isCorrect": false, "isChecked": false },
                { "answerText": "C. a resource guard", "isCorrect": true, "isChecked": false },
                { "answerText": "D. a custom Azure role", "isCorrect": false, "isChecked": false }
            ],
            "isMultiSelect": false,
            "userAnswer": null
        },
        {

            questionText: " You have an app named App1 that is installed on two Azure virtual machines named VM1 and VM2. Connections to App1 are managed by using anAzure Load Balancer."
            , answerOptions: [

                { "answerText": "A. VM1, Disk1, and storage1 only", "isCorrect": true, "isChecked": false },
                { "answerText": "B. VM1, Disk1, NetInt1, and VNet1", "isCorrect": false, "isChecked": false },



            ],
            texteAFter: "You discover that connections to App1 from 131.107.100.50 over TCP port 443 fail.You verify that the Load Balancer rules are con􀀁gured correctly.You need to ensure that connections to App1 can be established successfully from 131.107.100.50 over TCP port 443.Solution: You create an inbound security rule that allows any tra􀀂c from the AzureLoadBalancer source and has a priority of 150.",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image38
        }, {

            questionText: "Your on-premises network contains a VPN gateway. You have an Azure subscription that contains the resources shown in the following table."
            , answerOptions: [
                { "answerText": "A. Azure Application Gateway", "isCorrect": false, "isChecked": false },
                { "answerText": "B. service endpoints", "isCorrect": true, "isChecked": false },
                { "answerText": "C. Azure AD Application Proxy", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Azure Virtual WAN", "isCorrect": false, "isChecked": false },



            ],
            texteAFter: "You need to ensure that all the tra􀀂c from VM1 to storage1 travels across the Microsoft backbone network.What should you con􀀁gure?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image39

        }
        , {

            questionText: "You need to enable Desired State Con􀀁guration for VM1.What should you do first?"
            , answerOptions: [
                { "answerText": "A. Connect to VM1.", "isCorrect": false, "isChecked": false },
                { "answerText": "B. Start VM1.", "isCorrect": true, "isChecked": false },
                { "answerText": "C. Capture a snapshot of VM1.", "isCorrect": false, "isChecked": false },
                { "answerText": "D. Con􀀁gure a DNS name for VM1.", "isCorrect": false, "isChecked": false },



            ],
            texteAFter: "You need to ensure that all the tra􀀂c from VM1 to storage1 travels across the Microsoft backbone network.What should you con􀀁gure?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image40

        }, {

            questionText: "All the virtual networks are peered. Each virtual network contains nine virtual machines.You need to con􀀁gure secure RDP connections to the virtual machines by using Azure Bastion. What is the minimum number of Bastion hosts required?"
            , answerOptions: [
                { "answerText": "A. 1", "isCorrect": false, "isChecked": false },
                { "answerText": "B. 3", "isCorrect": true, "isChecked": false },
                { "answerText": "C. 9.", "isCorrect": false, "isChecked": false },
                { "answerText": "D. 10", "isCorrect": false, "isChecked": false },



            ],
            texteAFter: "You need to ensure that all the tra􀀂c from VM1 to storage1 travels across the Microsoft backbone network.What should you con􀀁gure?",
            isMultiSelect: false, // Indique si plusieurs options peuvent être sélectionnées
            userAnswer: null, // Réponse de l'utilisateur pour cette question
            image: image41

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
            <h4 className="text-danger">Topic 5 :Select the correct answer</h4> <br />
            <h5 className="text-warning"> Attention  questions 1,3,5,6,10,12,13,20,25,26,27,31,32,38,42,43,44,47,48,49,56,65,66,70.71,72,76,79,80,83,88,90,93,94,96,97,107,111,120,135,137 of topic 5 of the pdf   are missing from this MCQ</h5> <br />
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
                    {score < 80 ? "💀" : " 🔥"}
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

export default QuizzApp5;
