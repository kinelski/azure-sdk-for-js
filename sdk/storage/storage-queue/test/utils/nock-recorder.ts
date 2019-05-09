//import fs from "fs";
//import nock from "nock";
import { getUniqueName } from "../utils";
import { Polly } from "@pollyjs/core";
// @ts-ignore
import XHRAdapter from "@pollyjs/adapter-xhr";
import FSPersister from "@pollyjs/persister-fs";
import { MODES } from "@pollyjs/utils";
import * as dotenv from "dotenv";
dotenv.config({ path: "../../.env" });

Polly.register(XHRAdapter);
Polly.register(FSPersister);

export function record(_folderpath: string, _testTitle?: string) {
  const polly = new Polly("super_name", {
    mode: MODES.RECORD,
    adapters: ["xhr"],
    persister: "fs",
    matchRequestsBy: {
      headers: false
    }
  });

  polly.connectTo("xhr");

  return {
    stop: function() {
      polly.disconnectFrom("xhr");
    },

    getUniqueName: function(_: string, __?: string) {
      return getUniqueName(_);
    },

    newDate: function(_: string) {
      return new Date();
    }
  };
}

/**
 * Possible reasons for skipping a test:
 * * Progress: Nock does not record a request if it's aborted in a 'progress' callback
 * * Size: the generated recording file is too big and would considerably increase the size of the package
 * * Tempfile: the request makes use of a random tempfile created locally, and the recorder does not support recording it as unique information
 * * UUID: a UUID is randomly generated within the SDK and used in an HTTP request, resulting in Nock being unable to recognize it
*/
/*
const skip: any = [
];

function formatPath(path: string): string {
  return path
    .toLowerCase()
    .replace(/ /g, "_")
    .replace(/<=/g, "lte")
    .replace(/>=/g, "gte")
    .replace(/</g, "lt")
    .replace(/>/g, "gt")
    .replace(/=/g, "eq")
    .replace(/\W/g, "");
}

export function record(this: any, folderpath: string, testTitle?: string): { [key: string]: any } {
  const filename = "recording_" + (testTitle || this.currentTest.title);
  const fp = formatPath(folderpath) + "/" + formatPath(filename) + ".js";
  const importNock = "let nock = require('nock');\n";
  let uniqueTestInfo: any = {};

  const isRecording = (process.env.TEST_MODE === "record");
  const isPlayingBack = (process.env.TEST_MODE === "playback");

  if (skip.includes(fp) && (isRecording || isPlayingBack)) {
    this.skip();
  }

  if (isRecording) {
    nock.recorder.rec({
      dont_print: true
    });
  } else if (isPlayingBack) {
    uniqueTestInfo = require("../../recordings/" + fp).testInfo;
  }

  return {
    stop: function() {
      if (isRecording) {
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
      if (isRecording) {
        name = getUniqueName(prefix);
        uniqueTestInfo[recorderId] = name;
      }
      else if (isPlayingBack) {
        name = uniqueTestInfo[recorderId];
      } else {
        name = getUniqueName(prefix);
      }
      return name;
    },
    newDate: function(recorderId: string): Date {
      let date: Date;
      if (isRecording) {
        date = new Date();
        uniqueTestInfo[recorderId] = date.toISOString();
      }
      else if (isPlayingBack) {
        date = new Date(uniqueTestInfo[recorderId]);
      } else {
        date = new Date();
      }
      return date;
    }
  };
}
*/