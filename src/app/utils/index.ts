/**
 * Retrieves the value of an attribute by its label from a collection of attributes.
 *
 * @param {Record<string, Attribute>} attributes - The collection of attributes, where each key is an attribute ID and each value is an Attribute object.
 * @param {string} [label=""] - The label of the attribute to search for.
 * @returns {string | null} - The value of the attribute with the specified label, or null if not found.
 */
export const getItemAttributesByLabel = (
  attributes: Record<string, Attribute> = {},
  label: string = ""
): object | string | null => {
  for (const [_, attribute] of Object.entries(attributes)) {
    if (attribute.label === label) {
      return attribute.value;
    }
  }
  return null;
};

/**
 * Counts the occurrences of each status in the provided array.
 *
 * @param {string[]} items - The array of strings to be counted.
 * @returns {Record<string, number>} An object with the string values as keys and their counts as values.
 */
export const countStatusOccurrences = (
  items: string[]
): Record<string, number> => {
  return items.reduce((acc: Record<string, number>, item: string) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
};
