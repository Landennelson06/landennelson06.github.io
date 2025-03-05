---
title: Backing up your cluster
description: How to back up your current cluster
permalink: /cluster-docs/backing-up-your-cluster
---
 > WARNING: The information in these docs can cause major damage to your car, causing no-starts and other issues. I am NOT responsible for any damage done by this guide. \
 > ⚠NONE OF THIS HAS BEEN TESTED YET!⚠


1. __Remove the cluster__
    * Start by following the VERY IMPORTANT STEPS in 
        * [Removing your cluster](/cluster-docs/removing-your-cluster)
2. __Identify your cluster__
     * Follow the following guide:
         * [Identify your cluster](/cluster-docs/identify-cluster)
3. Take the cluster apart
    * Follow the dissassembly steps in [Identify your cluster](/cluster-docs/identify-cluster)

---

## Back up your Encrypted EEPROM
* Q: Why?
* A: This will allow you to have a restore point in case you mess anything up. Without this, you're screwed. 

Start by grabbing your Iprog dongle, installing the EEPROM tool. Pop the SOP8 clip onto the EEPROM board, and enter Iprog software. \
In the Iprog software, find the sidebar, and navigate to `SmartEEPROM`. \
Select your chip from the list. \
__ENSURE VCC IS SET TO 5V BEFORE PLUGGING INTO EEPROM__ \
Plug the SOP8 clip onto the EEPROM chip, aligning pin 1 on each. \
Press the Green arrow (Read) \
Press the Blue check (Verify) \
Press <kbd>CTRL</kbd> + <kbd>S</kbd> \
__KEEP THIS FILE SAFE, AND NAME IT SOMETHING ALONG THE LINES OF "OLD CLUSTER ENCRYPTED BACKUP"__

## Gather immo data from cluster

⚠ This guide assumes that you have a working key for your cluster. If not, see [PREPARE SERVICE MODE](/cluster-docs/service-mode-all-keys-lost/)

Once the cluster is out, start by plugging your VAG Dash harness into your dash, and then plug in your Iprog too into the OBD port. 

Load up the Iprog software!

Once the Iprog software is loaded, go ahead and set your key in the antenna (or [prepare service mode](/cluster-docs/service-mode-all-keys-lost/)), and then turn the power on. \
__IF THE CLUSTER SAYS "KEY NOT FOUND" OR SIMILAR, CHECK CONNECTIONS OR SEE PREPARE SERVICE MODE__
1. Go into the Iprog sidebar.
2. Navigate to `DASHBOARD > VW`
3. Find the correct calculator for your cluster, using your identification data.
4. __IMPORTANT__: Press the "Service MODE" button before doing anything!
5. Now, Press the read IMMO DATA (Or similar) button. 
6. Write down your PIN,CS,MAC, VIN, ALL key slots (even if empty).
7. Press the READ KM (or similar) button, and write down the data.
8. __IMPORTANT__: MAKE SURE TO SAVE your EEPROM read!
9. Name your EEPROM data something like "Old Cluster decrypted EEPROM"

You've now extracted all data you need from your old cluster. It is safe to remove power off the cluster, unplug Iprog, and reinstall this cluster into the car for the time being.

Continue on to [Programming your new cluster](/cluster-docs/program-new-cluster)
