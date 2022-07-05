import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
  ok: boolean;
  result: any;
  [key: string]: any;
}

function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
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
}

export default handler;
