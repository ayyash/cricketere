import { BuilderOutput } from '@angular-devkit/architect';
import { json } from '@angular-devkit/core';
import { Schema } from './schema';

export type PrerenderBuilderOptions = Schema & json.JsonObject;

export type PrerenderBuilderOutput = BuilderOutput;
