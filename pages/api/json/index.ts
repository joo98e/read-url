import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs"

interface IResponseType {
  ok: boolean;
  result?: any;
  [key: string]: any;
}

function handler(req: NextApiRequest, res: NextApiResponse<IResponseType>) {
  if (req.method === "GET") {
    const result = {
      data: [],
      message: "good",
    };

    setTimeout(() => {
      res.status(200).json({
        ok: true,
        result,
      });
    }, 1000);
  } else if (req.method === "POST") {
    // 포스트
    console.log(req.body);
    const baseUrl = "\\\\192.168.0.180\\web"
    const readDirSync = fs.readdirSync(baseUrl)
    console.log(readDirSync)

    res.status(200).json({
      ok: true,
      readDirSync
    })
  }
}

export default handler;
