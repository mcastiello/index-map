import IndexMap from './IndexMap';

/**
 * Extend the Window interface
 */
declare global {
  interface Window {
    IndexMap: Function;
  }
}

if (self) {
  self.IndexMap = IndexMap;
}

export default IndexMap;
