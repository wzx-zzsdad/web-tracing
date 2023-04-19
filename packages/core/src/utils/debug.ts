import { options } from '../lib/options'

/**
 * 控制台输出信息
 * @param args 输出信息
 */
export function debug(...args: any[]) {
  if (options.debug) console.log('@web-tracing: ', ...args)
}

/**
 * 控制台输出错误信息
 * @param args 错误信息
 */
export function logError(...args: any[]) {
  console.error('@web-tracing: ', ...args)
}
