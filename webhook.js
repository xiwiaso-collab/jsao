import { Client } from "@line/bot-sdk";

export const config = {
  api: {
    bodyParser: false
  }
};

const line = require("@line/bot-sdk");
const middleware = line.middleware;

const client = new Client({
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.LINE_CHANNEL_SECRET,
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    await runMiddleware(req, res, middleware({
      channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
      channelSecret: process.env.LINE_CHANNEL_SECRET,
    }));

    Promise
      .all(req.body.events.map(async (event) => {
        if (event.type === "message" && event.message.type === "text") {
          return client.replyMessage(event.replyToken, {
            type: "text",
            text: `คุณพิมพ์ว่า: ${event.message.text}`
          });
        }
      }))
      .then(() => res.status(200).end())
      .catch((err) => {
        console.error(err);
        res.status(500).end();
      });
  } else {
    res.status(405).end();
  }
}
