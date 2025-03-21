/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Span } from '@opentelemetry/api';
import { InstrumentationConfig } from '@opentelemetry/instrumentation';
import type * as redisTypes from 'redis';

// exported from
// https://github.com/NodeRedis/node_redis/blob/master/lib/command.js
export interface RedisCommand {
  command: string;
  args: string[];
  buffer_args: boolean;
  callback: redisTypes.Callback<unknown>;
  call_on_write: boolean;
}

/**
 * Function that can be used to serialize db.statement tag
 * @param cmdName - The name of the command (eg. set, get, mset)
 * @param cmdArgs - Array of arguments passed to the command
 *
 * @returns serialized string that will be used as the db.statement attribute.
 */
export type DbStatementSerializer = (
  cmdName: RedisCommand['command'],
  cmdArgs: RedisCommand['args']
) => string;

/**
 * Function that can be used to add custom attributes to span on response from redis server
 * @param span - The span created for the redis command, on which attributes can be set
 * @param cmdName - The name of the command (eg. set, get, mset)
 * @param cmdArgs - Array of arguments passed to the command
 * @param response - The response object which is returned to the user who called this command.
 *  Can be used to set custom attributes on the span.
 *  The type of the response varies depending on the specific command.
 */
export interface RedisResponseCustomAttributeFunction {
  (
    span: Span,
    cmdName: RedisCommand['command'],
    cmdArgs: RedisCommand['args'],
    response: unknown
  ): void;
}

export interface RedisInstrumentationConfig extends InstrumentationConfig {
  /** Custom serializer function for the db.statement tag */
  dbStatementSerializer?: DbStatementSerializer;

  /** Function for adding custom attributes on db response */
  responseHook?: RedisResponseCustomAttributeFunction;

  /** Require parent to create redis span, default when unset is false */
  requireParentSpan?: boolean;
}


export class Arex {
  public async sendCmdRecord(span: Span, cmd: RedisCommand, args: any, reply: any) {
    console.log(span.spanContext().spanId, JSON.stringify(cmd), JSON.stringify(reply));
  }
  public async mockSendCmd(cmd: RedisCommand) {
    if (cmd.command === 'get') {
      cmd.callback(null, '12345678');
    } else if (cmd.command === 'set') {
      cmd.callback(null, 'OK');
    }
  }
}