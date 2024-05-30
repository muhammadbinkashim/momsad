import express from "express";
import { getPayloadClient } from "./get-payload";
import { nextApp, nextHandler } from "./next-utils";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

interface ExtendedInitOptions {
  express?: express.Express;
  mongoURL?: string;
  onInit?: (cms: any) => void;
}

const start = async () => {
  const initOptions: ExtendedInitOptions = {
    express: app,
    mongoURL: process.env.MONGODB_URI,
    onInit: async (cms) => {
      cms.logger.info(`Admin URL: ${cms.getAdminURL()}`);
    },
  };

  const payload = await getPayloadClient({ initOptions });
  app.use((req, res) => nextHandler(req, res));

  nextApp.prepare().then(() => {
    app.listen(PORT, async () => {
      console.log(`Server started on port ${PORT}`);
    });
  });
};

start().catch(err => {
  console.error('Failed to start the server:', err);
});
