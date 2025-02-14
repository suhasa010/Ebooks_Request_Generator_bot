export interface Resolver {
  /**
   * Resolve the request from the website
   * @param url Url to resolve
   */
  resolve(url: string): Promise<string>;
}
