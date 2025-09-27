Here are some "advanced" settings, for those who wish to customize their nodes further, or turn their nodes into MQTT gateways.

---

# MQTT (Gateway Configuration)

#### Settings

-   **Enable 'MQTT Enabled'** If you wish to become a gateway node and transmit messages from the mesh to other nodes who are outside of the mesh's range.
    -   Your node must have a stable network connection to become a gateway node.
-   **Address:** mqtt.meshtastic.org

-   **Username:** meshdev
-   **Password:** large4cats
-   **Enable 'Encryption Enabled'**
-   **Enable 'JSON Output Enabled'** If your node's firmware supports it (NRF based nodes do not support this option).
-   **Root Topic:** msh/US/IL972 (IMPORTANT)
-   **Map Reporting Interval:** 3600
-   **Enable 'Map Reporting', and 'I Agree'**
    if you wish to transmit your node's configured location over MQTT.
-   **Enable 'Proxy to client enabled'**
    -   This lets the device use the client's (e.g. your phone's) network connection to connect to the MQTT server. If false, it uses the device's network connection which you have to enable via the network settings.

#### Notes

**Ignore 'TLS Enabled'** as it does not work with many devices.

---

# Security

This is where you can regenerate or export your node's private keys.

#### Notes

Make sure to export the generated keys and keep them in a safe place.

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
