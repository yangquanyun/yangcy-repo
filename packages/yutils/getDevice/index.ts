/**
 * 是否为wx浏览器环境
 * @returns boolean
 */
export const isWx = () => /micromessenger/i.test(navigator.userAgent);

/**
 * 是否为企业微信浏览器环境
 * @returns boolean
 */
export const isQw = () => /wxwork/i.test(navigator.userAgent);

/**
 * 是否为移动端
 * @returns boolean
 */
export const isMobile = () => /(iPhone|iPod|iPad|Android|ios|SymbianOS|Mobile)/i.test(navigator.userAgent);

/**
 * 检查当前用户是否为苹果设备
 * @returns boolean
 */
export const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);