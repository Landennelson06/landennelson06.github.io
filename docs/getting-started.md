---
title: Getting Started with your cluster swap
description: Getting started with your mk5 or mk6 cluster swap!
permalink: /getting-started/
---
 > WARNING: The information in these docs can cause major damage to your car, causing no-starts and other issues. I am NOT responsible for any damage done by this guide. 

Now, before we start, we must understand what the types of VW clusters and IMMO.
For the purposes of this explanation, this post on [Mk5GolfGTI](https://www.mk5golfgti.co.uk/forum/index.php?topic=91363.0) works great.

To simplify that post
1. 2006: Great! This is the easiest. If you see a post talking about VAG K+can, it should work. (Docs eventually for this type)
2. 2007+, you're gonna need to follow these guides.

NOTE: There can be exceptions! Follow the part numbers in the post. \
A VCDS cable or [⚠️removing your cluster⚠️](/removing-your-cluster) should work to find your current cluster.

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
3. Optional but highly reccomended: __A SOP8 clip__.
    * This isn't needed on many clusters, but will save your ass if you corrupt something. It's cheap, play it safe!

And that's it. 

Continue on to __[Backing up your current cluster](/backing-up-your-cluster)__