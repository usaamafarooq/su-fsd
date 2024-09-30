import { NextResponse } from "next/server";
import { promises as fs } from "fs";

import csvToJson from "convert-csv-to-json";

export async function GET(req: Request) {
  try {
    const file = await fs.readFile(process.cwd() + "/src/app/data.csv", "utf8");
    console.log("data file", file);
    let result = [];
    let json = csvToJson.getJsonFromCsv(process.cwd() + "/src/app/data.csv");
    for (let i = 0; i < json.length; i++) {
      console.log(json[i]);
      result.push({
        createdAt: json[i]["2023-06-2511:00"],
        fileName: json[i]["1abc.txt"],
      });
    }

    return NextResponse.json(result, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: `Error Occured, ${error}`,
      },
      { status: 500 }
    );
  }
}
