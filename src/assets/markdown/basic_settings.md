Here are the basic settings for every node in our mesh.

Follow each category and set up your node to match the following settings and you should be good to go.

---

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

Please import our channels from the following [URL](https://meshtastic.org/e/#ChESAQAaCE9wZW5Db21tOgIIEAovEiACk1E64IXQeK9dYh-vfs0tCi2mTmVHgiy1o7uzxk_SARoLZ2VzaGVta2F2ZWQKLhIgLW_QWktJP07Vg6wQplLO6EVF08OZetw_xK2wOXoLmtsaCk1lc2hBbHQtSUwKLxIgkX6TnnQ3LSg2y2_GJcK3tmz4xn8-Yl2IBOD71NpVJIoaC0VtcmdDb21tLUlMEhEIATgBQAdIAVAeWEZoAcgGAQ
)

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

-   **Enable 'OK to MQTT' and Disable 'Ignore MQTT'** (IMPORTANT)

---

# Network

This is where you can configure your node's Wifi settings, if it supports Wifi and you wish to connect to it.

#### Notes

Please note that this will DISABLE your node's Bluetooth connectivity! If for any reason you can't connect to your node via Wifi after enabling this option, you will have to use a serial connection (via USB) to reconfigure it.

It is recommended to disable 'UDP Config' if you have 2 or more nodes connected to ther same network, users have found it to be unreliable.
