import debugPkg from "debug";

/**
 * Will console log prefixed message with timestamp, controlled via env
 * Eg. DEBUG=weenspace-dashboard:* - enable all
 *     DEUBG=weenspace-dashboard:apps:* - enable apps debugger
 */
export const createDebug = (namespace: string) => debugPkg.debug(`weenspace-dashboard:${namespace}`);
