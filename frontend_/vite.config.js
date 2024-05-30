import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 7777,
        // origin: "http://192.168.0.21:7777",
        // host: "0.0.0.0", // Add this line to allow connections from other devices in the network
    },
});
