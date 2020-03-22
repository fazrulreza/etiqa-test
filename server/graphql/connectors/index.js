/** Import mysql connectors */
import mysqlConnectors from './mysql';

/**
 * Combine all connectors
 * Note: Adding connectors from other source e.g. mongodb is possible
 */
const connectors = {
  ...mysqlConnectors,
};

export default connectors;
