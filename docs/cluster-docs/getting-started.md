---
title: Getting Started with your cluster swap
description: Getting started with your mk5 or mk6 cluster swap!
permalink: /cluster-docs/getting-started
---
 > WARNING: The information in these docs can cause major damage to your car, causing no-starts and other issues. I am NOT responsible for any damage done by this guide. 

## What do I need to know?
* A very solid understanding of circuts, processors, EEPROM,etc
* A careful attitude. Doing anything wrong can permanently damage your car!
* Some information for the purposes of this swap:
    * The Clusters's EEPROM is encrypted. What does that mean?
        * We're going to pull the EEPROM physically, only to be safe.
    * What is Service mode?
        * Service mode is a mode on a VW cluster. It allows us to read and write immo and key data, even without a key. 

## __Sound too daunting?__
* __Email me!__
* I'd be more than happy to program your cluster.

## Sourcing your cluster
Now, before we start, we must understand what the types of VW clusters and IMMO.
For the purposes of this explanation, this post on [Mk5GolfGTI](https://www.mk5golfgti.co.uk/forum/index.php?topic=91363.0) works great.

NOTE: There can be exceptions! Follow the part numbers in the post. \
A VCDS cable or [⚠️removing your cluster⚠️](/cluster-docs/removing-your-cluster) should work to find your current cluster.

### More information is available at [Identifying your cluster](/cluster-docs/identify-cluster)

## What tools should i get?

You'll need the following
1. Some sort of OBD module
    * For this guide, we'll use __Iprog v89__
    * Some other systems that work are:
        * AVDI and clones, such as FVDI
        * CarProg ❓
2. A VAG dash bench tool.
    * This is important as the car's CAN Gateway will block certain commands we need, so we need to "skip" the car.
    * Some good tools for this are the:
        * GoDiag GT112 (mk4 era ❓)
        * GoDiag GT111 (Mk5 era Pre 2010)
        * GoDiag GT110 (2010 and on)
    * NOTE: These bench tools also require a 12v DC jack power "brick". Don't forget!
3.  __A SOP8 clip__.
    * This isn't __needed__, but will save your ass if you corrupt something. It's cheap, play it safe!

And that's it. 

Continue on to __[Backing up your current cluster](/cluster-docs/backing-up-your-cluster)__