---
title: Identifying a cluster
description: How to identify a cluster 
permalink: /cluster-docs/identify-cluster/
---
 > WARNING: The information in these docs can cause major damage to your car, causing no-starts and other issues. I am NOT responsible for any damage done by this guide. \
 > ⚠ NONE OF THIS HAS BEEN TESTED YET!⚠

## How to identify my cluster?
See the table below:

| Part Number | Supported by Iprog? | ID Info | Swappable P/Ns | Notes |
|-------|--------|---------|---------|---------|
| 1k0-_____ | ✅ | NEC 24c32 |1k0-_____ | N/A |


## Part number not in the list? Let's check manually. 

### For Mk5 style clusters:
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

### Want to be awesome?
Email me your clusters part number, car it came out of, and pictures of the cluster! 
Be sure to include a picture of the gauge faces, EEPROM chip, and processor.