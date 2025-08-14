export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const events = req.body.events;

  for (const event of events) {
    if (event.type === "message" && event.message.type === "text") {
      const flexMessage = {
        type: "flex",
        altText: "168miami แจกฟรี 100 บาท",
        contents: {
          type: "bubble",
          hero: {
            type: "image",
            url: "https://<your-project>.vercel.app/banner.gif",
            size: "full",
            aspectRatio: "1:1",
            aspectMode: "cover"
          },
          body: {
            type: "box",
            layout: "vertical",
            contents: [
              {
                type: "text",
                text: "168miami แจกฟรี 100 บาท",
                weight: "bold",
                size: "xl",
                align: "center"
              },
              {
                type: "button",
                style: "primary",
                color: "#00C300",
                action: {
                  type: "uri",
                  label: "รับฟรี 100 คลิ๊ก!!!",
                  uri: "https://t.ly/wOTp9"
                }
              },
              {
                type: "button",
                style: "secondary",
                action: {
                  type: "uri",
                  label: "สมัครสมาชิก",
                  uri: "https://t.ly/kP8BK"
                }
              },
              {
                type: "button",
                style: "secondary",
                action: {
                  type: "uri",
                  label: "แชร์ให้เพื่อน",
                  uri: "https://liff.line.me/2007906078-Vpg3OP6o"
                }
              }
            ]
          }
        }
      };

      await fetch("https://api.line.me/v2/bot/message/reply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.LINE_CHANNEL_ACCESS_TOKEN}`
        },
        body: JSON.stringify({
          replyToken: event.replyToken,
          messages: [flexMessage]
        })
      });
    }
  }

  res.status(200).send("OK");
}
