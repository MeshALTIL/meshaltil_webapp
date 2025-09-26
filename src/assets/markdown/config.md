# User

#### Settings

-   Set up your long name and short name as you see fit.
-   Enable 'Unmessageable' if the node is a repeater and is not used for receiving messages.

---

# Device

#### Settings

-   Role: CLIENT
-   Rebroadcast Mode: ALL
-   POSIX Time Zone: IST-2IDT,M3.4.4/26,M10.5.0

#### Notes

Israel's calender does not directly translate to POSIX time zones, this is an approximation that is good enough.

---

# Channels

Please import our channels from the following [URL](https://meshtastic.org/e/#ChUSAQAaCE9wZW5Db21tKAEwAToCCA4KMxIgApNROuCF0HivXWIfr37NLQotpk5lR4IstaO7s8ZP0gEaC2dlc2hlbWthdmVkKAEwAQoyEiAtb9BaS0k_TtWDrBCmUs7oRUXTw5l63D_ErbA5egua2xoKTWVzaEFsdC1JTCgBMAEKMxIgkX6TnnQ3LSg2y2_GJcK3tmz4xn8-Yl2IBOD71NpVJIoaC0VtcmdDb21tLUlMKAEwARIRCAE4AUADSAFQDFgXaAHABgE)

---

# Position

#### Settings

-   Position Broadcast Interval: 900 (Optional)
-   Position Flags: 811
-   Enable 'GPS Mode' if you wish to forward your node's GPS position to the mesh.
-   Enable 'Use Fixed Position' if your node has no GPS reception, or if you want to set up a fixed position on node maps.

#### Notes

Please set the GPS update Interval to something sensible, between 300 to 900 (seconds).

You can also try the 'Smart Position' option, which optimizes position transmissions to improve battery life.

---

# LoRa

#### Settings

-   Modem Preset: LONG_FAST (IMPORTANT)

-   Region (frequency plan): United States (IMPORTANT)

-   Hop Limit: 7

-   Enable 'TX Enabled' (IMPORTANT).

-   TX Power: 30 (Optional)

-   Frequency Slot: 70 (IMPORTANT)

-   Enable 'SX126X RX Boosted Gain / RX Boosted Gain' if applicable.

-   Override Frequency (Mhz): 919.375 (IMPORTANT)

#### Notes

Enable 'OK to MQTT' if you wish to connect and forward messages to other nodes outside your node's range over MQTT (Recommended).

---

# MQTT

#### Settings

-   Enable 'MQTT Enabled' if you wish to connect to other nodes outside your node's range over MQTT (Recommended).

-   Address: mqtt.meshtastic.org (Meshtastic's default MQTT)

-   Username: meshdev (Leave as is)

-   Password: large4cats (Leave as is)

-   Enable 'Encryption Enabled'.

-   Enable 'JSON Output Enabled' if your node's firmware supports it (NRF based nodes do not support this option).

-   Root Topic: msh/US/IL972 (IMPORTANT)

-   Map Reporting Interval: 3600

#### Notes

Enable 'Map Reporting', and 'I Agree' if you wish to transmit your node's configured location over MQTT.

---

# Security

This is where you can regenerate or export your node's private keys.

#### Notes

Make Sure to export the generated keys and keep them in a safe place.

---

# Network

This is where you can configure your node's Wifi settings, if it supports Wifi and you wish to connect to it.

#### Notes

Please note that this will DISABLE your node's Bluetooth connectivity! If for any reason you can't connect to your node via Wifi after enabling this option, you will have to use a serial connection (via USB) to reconfigure it.

It is recommended to disable 'UDP Config' if you have 2 or more nodes connected to ther same network, users have found it to be unreliable.

---

# Display

This is where you can configure your node's display, if it has one.

#### Notes

If you do not use the display constantly, setting 'Screen on for' / 'Screen timeout' to a shorter interval can optimize battery life and the preserve the display itself.

---

# Telemetry

This is where you can configure your node's telemetry transmissions.

#### Notes

If your node has a battery, we suggest enabling telemetry and setting the transmission interval to around 900 seconds. This will allow you (and others on the mesh) to see your node's battery level from afar.
