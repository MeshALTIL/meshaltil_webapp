# User

-   Set up your long name and short name as you see fit.

-   Enable 'Unmessageable' if the node is a repeater and not used for receiving messages.

---

# Channels

Please import our channels from the following [URL](https://meshtastic.org/e/#ChUSAQAaCE9wZW5Db21tKAEwAToCCA4KMxIgApNROuCF0HivXWIfr37NLQotpk5lR4IstaO7s8ZP0gEaC2dlc2hlbWthdmVkKAEwAQoyEiAtb9BaS0k_TtWDrBCmUs7oRUXTw5l63D_ErbA5egua2xoKTWVzaEFsdC1JTCgBMAEKMxIgkX6TnnQ3LSg2y2_GJcK3tmz4xn8-Yl2IBOD71NpVJIoaC0VtcmdDb21tLUlMKAEwARIRCAE4AUADSAFQDFgXaAHABgE)

---

# Position

-   Position Broadcast Interval: 900 (Optional)

-   Enable 'GPS Mode' if you wish to forward your node's GPS position to the mesh.
-   Set Update Interval to something sensible, like 300 (seconds).
-   You can also play with Smart Position if desired.
-   Position Flags should be set to 811.

-   Enable 'Use Fixed Position' if your node has no GPS reception, or if you want to set up a fixed position on node maps.

---

# LoRa

-   Modem Preset: LONG_FAST (IMPORTANT)

-   Region (frequency plan): United States (IMPORTANT)

-   Hop Limit: 7

-   Enable 'TX Enabled'.

-   TX Power: 30 (Optional)

-   Frequency Slot: 70 (IMPORTANT)

-   Enable 'SX126X RX Boosted Gain / RX Boosted Gain' if applicable.

-   Override Frequency (Mhz): Should be 919.375

-   Enable 'OK to MQTT' if you wish to connect and forward messages to other nodes outside your node's range over MQTT (Recommended).

---

# MQTT

-   Enable 'MQTT Enabled' if you wish to connect to other nodes outside your node's range over MQTT (Recommended).

-   Address: mqtt.meshtastic.org (Meshtastic's default MQTT)

-   Username: meshdev (Leave as is)

-   Password: large4cats (Leave as is)

-   Enable 'Encryption Enabled'.

-   Enable 'JSON Output Enabled' if your node's firmware supports it. NRF based nodes do not support this.

-   Root Topic: msh/US/Israel

-   Enable 'Map Reporting', and 'I Agree' if you wish to transmit your node's configured location over MQTT.

-   Map Reporting Interval: 3600
---

# Security

-  Make Sure to export the generated keys and keep them in a safe place.
---

# Network

-  Here you can set your wifi settings, if your node supports it and you wish to connect to your wifi. Please note that this will DISABLE Bluetooth and if you can't connect to your node via wifi, you will have to use a serial connection to your phone (via USB-C) to reconfigure it.
-  I suggest to disable UDP Config if you have 2 nodes connected to ther same network, as I found it to be unreliable.
---

# Display

-  If your node has a display, you can configure some settings here.
-  If you do not use the display constantly, setting "screen on for" to a shoret interval can save you some battery life and the display life itself.
---

# Telemetry
-  If your device has a battery, I suggest enabling sending of telemetry, and setting the interval to 900 seconds. this will allow you to see the battery level from any node that can see your node.
