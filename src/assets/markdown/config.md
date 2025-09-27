# User

#### Settings

-   Set up a memorable long name and short name as you see fit.
-   Short name is limited to 4 letters.
-   Enable 'Unmessageable' if the node is a repeater and is not used for receiving messages.

---

# Device

#### Settings

-   **Role:** CLIENT
-   **Rebroadcast Mode:** ALL
-   **POSIX Time Zone:** IST-2IDT,M3.4.4/26,M10.5.0

#### Notes

Israel's calender does not directly translate to POSIX time zones, this is an approximation that is good enough.

---

# Channels

#### Settings

Please import our channels from the following [URL](https://meshtastic.org/e/#ChUSAQAaCE9wZW5Db21tKAEwAToCCA4KMxIgApNROuCF0HivXWIfr37NLQotpk5lR4IstaO7s8ZP0gEaC2dlc2hlbWthdmVkKAEwAQoyEiAtb9BaS0k_TtWDrBCmUs7oRUXTw5l63D_ErbA5egua2xoKTWVzaEFsdC1JTCgBMAEKMxIgkX6TnnQ3LSg2y2_GJcK3tmz4xn8-Yl2IBOD71NpVJIoaC0VtcmdDb21tLUlMKAEwARIRCAE4AUADSAFQDFgXaAHABgE)

#### Notes

If you are using our dedicated MQTT server, disable both uplink and downlink for every channel--unless your node cannot connect directly to other nodes in the mesh. This reduces load on our server and ensures that only nodes that truly need MQTT use it.

---

# Position

#### Settings

-   **Position Broadcast Interval:** 900 (Optional)
-   **Position Flags:** 811
-   **Enable 'GPS Mode'** if you wish to forward your node's GPS position to the mesh.
-   **Enable 'Smart Broadcast'**

    -   Smart broadcast will send out your position at an increased frequency only if your location has changed enough for a position update to be useful.

-   **Smart Broadcast Minimum Distance:** 100 meters (Default)

    -   The minimum distance in meters traveled (since the last send) before we can send a position to the mesh if smart broadcast is enabled.

-   **Smart Broadcast Minimum Interval:** 30 seconds (Default)

    -   The minimum number of seconds (since the last send) before we can send a position to the mesh if smart broadcast is enabled.

-   **Broadcast Interval:** 15 minutes (Default)

    -   If smart broadcast is off we should send our position this often.

-   **Enable 'Use Fixed Position'**
    If your node has no GPS reception, or if you want to set up a fixed position on node maps.

    -   If set, the device will generate GPS updates at the regular GPS update interval.

#### Notes

Please set the GPS update Interval to something sensible, between 300 to 900 (seconds).

---

# LoRa

#### Settings

-   **Modem Preset:** LONG_FAST (IMPORTANT)
-   **Region (frequency plan):** US [United States] (IMPORTANT)
-   **Hop Limit:** 7

    -   Depending on the size of the mesh network. Minimum should be no less than 3.

-   **Enable 'TX Enabled' (IMPORTANT)**
-   **TX Power:** 30 (Optional)

    -   Depending on the specs of your specific device, each device type has different TX power limits.

-   **Frequency Slot:** 70 (IMPORTANT)
-   **Enable 'SX126X RX Boosted Gain / RX Boosted Gain'** if applicable.
-   **Override Frequency (Mhz):** 919.375 (Optional)

    -   The frequency Slot [70] chooses the correct MHz frequency.
        To override the slot setting, you can choose the frequency manually.

-   **Enable 'OK to MQTT'** If you wish to connect and forward messages to other nodes outside your node's range over MQTT (Recommended).
-   **Disable 'Ignore MQTT'** (Optional)

    -   Disable to allow device to receieve messages via MQTT. Enable to ignore messages from MQTT users.

---

# MQTT (Module Configuration)

#### Settings

-   **Enable 'MQTT Enabled'** If you wish to connect to other nodes outside your node's range over MQTT.
-   **Address:** mesh.theldti.com (Dedicated MQTT server)

    -   Only enable uplink and downlink for a channel (in the 'Channels' settings) if your node cannot connect directly to other nodes in the mesh.

-   **Username:** mesh

-   **Password:** mesh123
-   **Enable 'Encryption Enabled'**
-   **Enable 'JSON Output Enabled'**
    -   If your node's firmware supports it (NRF based nodes do not support this option).
-   **Root Topic:** msh/US/IL972 (IMPORTANT)
-   **Map Reporting Interval:** 3600
-   **Enable 'Map Reporting', and 'I Agree'**
    if you wish to transmit your node's configured location over MQTT.
-   **Enable 'Proxy to client enabled'**
    -   This lets the device use the client's (e.g. your phone's) network connection to connect to the MQTT server. If false, it uses the device's network connection which you have to enable via the network settings.

#### Notes

**Ignore 'TLS Enabled'** as it does not work with many devices.

Due to Meshtastic's MQTT zero-hop policy, we have moved on to our own dedicated MQTT server.

---

# Security

This is where you can regenerate or export your node's private keys.

#### Notes

Make sure to export the generated keys and keep them in a safe place.

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
