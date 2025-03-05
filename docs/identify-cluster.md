---
title: Identifying a cluster
description: How to identify a cluster 
permalink: /identify-cluster/
---
 > WARNING: The information in these docs can cause major damage to your car, causing no-starts and other issues. I am NOT responsible for any damage done by this guide. \
 > ⚠ NONE OF THIS HAS BEEN TESTED YET!⚠

## How to identify my cluster?
TO BE ADDED: PART NUMBER LOOKUP

## Part number not in the list? Let's check manually. 

### For Mk5 style CLUSTERS:
1. Start by pulling at the tabs around the edge. They're tricky, be gentle!
2. Remove the front glass. 
3. Find the two T-7 (❓) on the back, and loosen them until approx 3-4 threads are left
4. Push on the bolts to pop the daughterboard off of the motherboard. 
5. Remove the bolts completely
6. Pull the daughterboard all the way off.
7. Identify the MCU on the motherboard. Typically, it will be a NEC or MicroNAS.
8. Look around for a small 8-pin EEPROM chip. This chip will have a name on it, typically 24c32 or 24c64. 
9. There you go! Those two pieces are your identification


### For Mk6 style clusters
1. Start by removing the four T-7 (❓) of of the rear. 
2. Pull the tabs around the edge. 
3. Rotate the board to the back. Identify the MCU, (Usually Motorola, Siemens, or Bosch)
4. Identify the small 8-pin EEPROM chip. This can be hidden underneath the screen on some models. This chip will typically be a 24c32,24c64 or 24c128. 
5. There you go! There's your identification. 

## Not required, but recommended.
* If you have your cluster open, you should really go ahead and read the EEPROM using a SOP clip. This way of backing up can restore nearly any breaking issue.
* Go into Iprog software, and select `SmartEEPROM > Your chip` 
* MAKE SURE YOUR VCC IS SET TO 5v  
* Grab your Iprog, attach the EEPROM board, pop on the SOP clip, and then attach the clip to the chip.
* Use the green upwards arrow (Read), followed by the blue checkmark (Verify).
* SAVE THIS FILE AND KEEP IT SAFE

### Want to be awesome?
Send me your EEPROM dump along with a part number, chip information, and what car it came out of! I'll remove the sensitive data-bits for you, and you can help others if they forget to back-up or lost it!