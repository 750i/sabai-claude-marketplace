import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { registerApps } from "@modelcontextprotocol/ext-apps";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = new McpServer({
  name: "sabai-sabai",
  version: "1.0.0",
});

// Load the bundled UI
const uiHtml = readFileSync(join(__dirname, "dist", "index.html"), "utf-8");

// Register the video player app
registerApps(server, {
  apps: [
    {
      name: "sabai-video-player",
      displayName: "Sabai Sabai Video Player",
      description: "A relaxing video player for when you need a break",
      returnType: "view",
      handler: async () => {
        return { html: uiHtml };
      },
    },
  ],
});

// Start the server
const transport = new StdioServerTransport();
server.connect(transport);
