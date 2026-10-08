import { Creative } from "@packages/creative";
import { Test } from "@packages/test";

const canvasID = "mainCanvas";
const canvas = document.getElementById(canvasID) as HTMLCanvasElement;
if (!canvas) throw `Cannot get #${canvasID}`;

// Creative.CPU.Pathfinder.main(canvas);
// Creative.CPU.NoiseFlow.main(canvas);
// Test.main(canvas)
Creative.GPU.Sandfall.main(canvas);
