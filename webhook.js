import { Client } from '@line/bot-sdk';

const client = new Client({
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const events = req.body.events;

    for (const event of events) {
      if (event.type === 'message' && event.message.type === 'text') {
        await client.replyMessage(event.replyToken, {
          type: 'text',
          text: `คุณพิมพ์ว่า: ${event.message.text}`
        });
      }
    }

    res.status(200).end();
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}

export const config = {
  api: {
    bodyParser: false
  }
};
