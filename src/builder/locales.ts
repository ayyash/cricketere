import { BuilderContext, BuilderOutput, createBuilder } from '@angular-devkit/architect';
import { JsonObject } from '@angular-devkit/core';
import { promises as fs } from 'fs';

interface Options extends JsonObject {
  source: string;
  destination: string;
}

export default createBuilder(GenerateIndexBuilder);

async function GenerateIndexBuilder(
  options: Options,
  context: BuilderContext,
): Promise<BuilderOutput> {
  try {
    await fs.copyFile(options.source, options.destination);
  } catch (err) {
    context.logger.error('Failed to copy file.');
    return {
      success: false,
      error: err.message,
    };
  }
  context.reportStatus('Done.');
  return { success: true };
}
