import { BuilderContext, BuilderOutput, createBuilder } from '@angular-devkit/architect';
interface Options {
  name: string;
}



export default createBuilder(NothingDo);


export async function NothingDo(
  options: Options,
  context: BuilderContext,
): Promise<BuilderOutput> {


  // const  { prefix } = await context.getProjectMetadata(context.target.project);
  const name = options.name;

  try {
    // create destination  folder if not found
    context.logger.info('Nothing is' + __dirname);
  } catch (err) {
    context.logger.error('Failed to generate locales.');
    return {
      success: false,
      error: err.message,
    };
  }
  context.reportStatus('Done.');

  return { success: true };
}
