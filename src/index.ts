import PngDecoder from "./PngDecoder.ts";
import PngEncoder from "./PngEncoder.ts";
import type {
  DecoderInputType,
  PngDecoderOptions,
  DecodedPng,
  ImageData,
  PngEncoderOptions,
} from "./types.ts";

export { hasPngSignature } from "./helpers/signature.ts";
export * from "./types.ts";

function decodePng(
  data: DecoderInputType,
  options?: PngDecoderOptions,
): DecodedPng {
  const decoder = new PngDecoder(data, options);
  return decoder.decode();
}

function encodePng(png: ImageData, options?: PngEncoderOptions): Uint8Array {
  const encoder = new PngEncoder(png, options);
  return encoder.encode();
}

export { decodePng as decode, encodePng as encode };
