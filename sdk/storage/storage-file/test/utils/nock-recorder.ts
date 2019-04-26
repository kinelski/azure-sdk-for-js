import fs from "fs";
import nock from "nock";
import { getUniqueName } from "../utils";
import * as dotenv from "dotenv";
dotenv.config({ path: "../../.env" });

export function record(folderpath: string, filename: string): { [key: string]: any } {
  let fp = folderpath.toLowerCase().replace(/ /g, "_").replace(/\W/g, "") +
    "/recording_" + filename.toLowerCase().replace(/ /g, "_").replace(/\W/g, "") + ".js";
  let importNock = "let nock = require('nock');\n";
  let uniqueTestInfo: any = {};

  if (process.env.TEST_MODE === "record") {
    nock.recorder.rec({
      dont_print: true
    });
  } else if (process.env.TEST_MODE === "playback") {
    uniqueTestInfo = require("../../recordings/" + fp).testInfo;
  }

  return {
    stop: function() {
      if (process.env.TEST_MODE === "record") {
        let fixtures = nock.recorder.play();
        let file = fs.createWriteStream("./recordings/" + fp, { flags: "w" });
        file.on("error", err => console.log(err));
        file.write(importNock + "\n" + "module.exports.testInfo = " + JSON.stringify(uniqueTestInfo) + "\n");
        for (let i = 0; i < fixtures.length; i++) {
          file.write(fixtures[i] + "\n");
        }
        file.end();
        nock.recorder.clear();
        nock.restore();
      }
    },
    getUniqueName: function(prefix: string, recorderId?: string): string {
      let name: string;
      if (!recorderId) {
        recorderId = prefix;
      }
      if (process.env.TEST_MODE === "record") {
        name = getUniqueName(prefix);
        uniqueTestInfo[recorderId] = name;
      }
      else if (process.env.TEST_MODE === "playback") {
        name = uniqueTestInfo[recorderId];
      } else {
        name = getUniqueName(prefix);
      }
      return name;
    },
    newDate: function(recorderId: string): Date {
      let date: Date;
      if (process.env.TEST_MODE === "record") {
        date = new Date();
        uniqueTestInfo[recorderId] = date.toISOString();
      }
      else if (process.env.TEST_MODE === "playback") {
        date = new Date(uniqueTestInfo[recorderId]);
      } else {
        date = new Date();
      }
      return date;
    }
  };
}
