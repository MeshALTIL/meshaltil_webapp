# User

-   Set up your long name and short name as you see fit.

-   Enable 'Unmessageable' if the node is a repeater.

---

# Channels

Please import our channels from the following [URL](https://meshtastic.org/e/#ChUSAQAaCE9wZW5Db21tKAEwAToCCA4KMxIgApNROuCF0HivXWIfr37NLQotpk5lR4IstaO7s8ZP0gEaC2dlc2hlbWthdmVkKAEwAQoyEiAtb9BaS0k_TtWDrBCmUs7oRUXTw5l63D_ErbA5egua2xoKTWVzaEFsdC1JTCgBMAEKMxIgkX6TnnQ3LSg2y2_GJcK3tmz4xn8-Yl2IBOD71NpVJIoaC0VtcmdDb21tLUlMKAEwARIRCAE4AUADSAFQDFgXaAHABgE)

---

# Position

-   Position Broadcast Interval: 900 (Optional)

-   Enable 'GPS Mode' if you wish to forward your node's GPS position to the mesh.

-   Enable 'Use Fixed Position' if your node has no GPS reception, or if you want to set up a fixed position on node maps.

---

# LoRa

-   Modem Preset: LONG FAST

-   Region (frequency plan): United States

-   Hop Limit: 7

-   Enable 'TX Enabled'.

-   TX Power: 30 (Optional)

-   Frequency Slot: 70

-   Enable 'SX126X RX Boosted Gain' if applicable.

-   Override Frequency (Mhz): 919.375

-   Enable 'OK to MQTT' if you wish to connect and forward messages to other nodes outside your node's range over MQTT (Recommended).

---

# MQTT

-   Enable 'MQTT Enabled' if you wish to connect to other nodes outside your node's range over MQTT (Recommended).

-   Address: mqtt.meshtastic.org (Meshtastic's default MQTT)

-   Username: meshdev (Leave as is)

-   Password: large4cats (Leave as is)

-   Enable 'Encryption Enabled'.

-   Enable 'JSON Output Enabled' if your node's firmware supports it.

-   Root Topic: msh/US/Israel

-   Enable 'Map Reporting', and 'I Agree' if you wish to transmit your node's configured location over MQTT.

-   Map Reporting Interval: 3600
