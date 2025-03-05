---
title: Program your new cluster
description: Instructions for your new cluster
permalink: /cluster-docs/program-new-cluster
---

Start by taking the cluster apart 
* Follow the dissassembly steps in [Identify your cluster](/cluster-docs/identify-cluster)

---

## Back up your Encrypted EEPROM (For the new cluster)

Start by grabbing your Iprog dongle, installing the EEPROM tool. Pop the SOP8 clip onto the EEPROM board, and enter Iprog software. \
In the Iprog software, find the sidebar, and navigate to `SmartEEPROM`. \
Select your chip from the list. \
__ENSURE VCC IS SET TO 5V BEFORE PLUGGING INTO EEPROM__ \
Plug the SOP8 clip onto the EEPROM chip, aligning pin 1 on each. \
Press the Green arrow (Read) \
Press the Blue check (Verify) \
Press <kbd>CTRL</kbd> + <kbd>S</kbd> \
__KEEP THIS FILE SAFE, AND NAME IT SOMETHING ALONG THE LINES OF "NEW CLUSTER ENCRYPTED BACKUP"__

## Identify "All Keys lost"
* For many people, they'll have a used cluster that has keys and immo programmed. This means that the cluster will NOT allow reprogramming. 
    * If this is you, continue onto [All keys lost](/cluster-docs/service-mode-all-keys-lost/)
    * Otherwise, continue on this page

## Reprogram your cluster

Load up the Iprog software!

Once the Iprog software is loaded, Turn the power on.
__IF THE CLUSTER SAYS "KEY NOT FOUND" OR SIMILAR, CHECK CONNECTIONS OR SEE PREPARE SERVICE MODE__
1. Go into the Iprog sidebar.
2. Navigate to `DASHBOARD > VW`
3. Find the correct calculator for your cluster, using your identification data.
4. __IMPORTANT__: Press the "Service MODE" button before doing anything!
5. Now, Go to `File > Open file` Or press <kbd>CTRL</kbd> + <kbd>O</kbd>
6. Select your Old cluster decrypt file
7. Confirm all the data populates in the above area (PIN,CS,MAC,VIN,Mileage, and all key info)
8. Press the write buttons

You've now programmed your cluster! Continue onto [Installing new cluster and next steps]()
