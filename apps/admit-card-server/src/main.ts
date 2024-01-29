import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { configure as serverlessExpress } from '@vendia/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';

import { AppModule } from './app/app.module';
const nodeEnv = process.env["NODE_ENV"];
let server: Handler;
async function bootstrap() {
  Logger.log(nodeEnv);
  const app = await NestFactory.create(AppModule);
  const globalPrefix = '';
  app.setGlobalPrefix(globalPrefix);
  app.enableCors();
  if(nodeEnv === 'local'){
    const port = process.env.PORT || 3000;
    await app.listen(port);
    Logger.log(
      `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
    );
  }
  else{
    app.init();
    const expressApp = app.getHttpAdapter().getInstance();
    return serverlessExpress({app: expressApp});
  }
  
}

if(nodeEnv === 'local') bootstrap();

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback
) =>{
  server = server ?? (await bootstrap());
  return server(event, context, callback);
}