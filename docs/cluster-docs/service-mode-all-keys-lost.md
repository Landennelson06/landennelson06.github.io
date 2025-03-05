---
title: Service mode and All keys lost
description: Information and instructions on VW service mode and how to handle an "all keys lost" situation
permalink: /cluster-docs/service-mode-all-keys-lost/
---

In some situations (Lost all your keys, or programming a used cluster), the cluster will lock itself down. Here's how to fix that so you can program and read the EEPROM.

## Option 1: POGO PIN

This option is the easiest, if you can find where to place it. The GOdiag dash harness I recommend  comes with a jumper lead. \
You can find pictures of where to jump [HERE](https://spvg-wiki.com/en/pogo-pins-all-keys-lost/)

The process is:
1. Disassemble the cluster as shown in (identify your cluster)[/cluster-docs/identify-cluster/]
2. Plug the cluster in, but DO NOT TURN ON THE POWER
3. Locate the jumper ⚠ WARNING! DOING THIS WRONG CAN PERMANENTLY DAMAGE YOUR CLUSTER ⚠
4. Press the jumper down
5. Turn on the power to the cluster
6. Hold the jumper in place for 10 seconds, then release

You are now able to follow instructions on programming or reading immo data

## Option 2: Make cluster "Virgin"

This option can ONLY be used on clusters you're swapping in.

 * Q: What is a Virgin cluster?
 * A: A Virgin cluster is a cluster that does not have Immo or key data. This means that when it boots, it does not go into SAFE mode. 

To make a cluster virgin, first make sure it's documented below.

| Cluster identification info | Immo area | 
|-------|-------|
| MicroNAS 24c32 | _____ - ____ |


Using the information above, start by following the instructions of [Backing up your encrypted EEPROM](/cluster-docs/backing-up-your-cluster)
Once you have that data backed up and saved, we're actually going to modify the EEPROM. 
Using Iprog, in the same window you used to back up the EEPROM, highlight from the range in the table.

Right click, and select "Fill" \
Type "FF" into the box \
Ensure "as HEX" is selected, and then press OK 

With your now immo-cleared EEPROM, press the Red arrow (Write)
Follow up with a Blue check (Verify)
Now, it should boot with no messages!