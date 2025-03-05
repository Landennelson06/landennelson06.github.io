---
title: Backing up your cluster
description: How to back up your current cluster
permalink: /backing-up-your-cluster
---
 > WARNING: The information in these docs can cause major damage to your car, causing no-starts and other issues. I am NOT responsible for any damage done by this guide. \
 > ⚠NONE OF THIS HAS BEEN TESTED YET!⚠

## Remove the cluster
Start by following the VERY IMPORTANT STEPS in 
[Removing your cluster](/removing-your-cluster)

## Identify your cluster
Follow the following guide:
[Identify your cluster](/identify-cluster)

---
## How to back up your cluster

⚠ This guide assumes that you have a working key for your cluster. If not, see __PREPARE SERVICE MODE__ (TODO)

Once the cluster is out, start by plugging your VAG Dash harness into your dash, and then plug in your Iprog too into the OBD port. 

Load up the Iprog software!

Once the Iprog software is loaded, go ahead and set your key in the antenna (or prepare service mode), and then turn the power on. 
1. Go into the Iprog sidebar.
2. Navigate to `DASHBOARD > VW`
3. Find the correct calculator for your cluster, using your identification data.
4. __IMPORTANT__: Press the "Service MODE" button before doing anything!
5. Now, Press the read IMMO DATA (Or similar) button. 
6. Write down your PIN,CS,MAC, VIN, ALL key slots (even if empty).
7. Press the READ KM (or similar) button, and write down the data.
8. __IMPORTANT__: MAKE SURE TO SAVE your EEPROM read!

You've now extracted all data you need from your old cluster. It is safe to remove power off the cluster, unplug Iprog, and reinstall this cluster into the car for the time being.

Continue on to __TODO__
