import { storyIdToMeta } from "../naming-utils.js";

/**
 * @param entryData {import('../../../shared/types.ts').EntryData}
 */
export const getMetaJson = (entryData) => {
  /** @type {string[]} */
  let storyIds = [];
  /** @type {{[key: string]: any}} */
  let storyParams = {};
  /** @type {{[key: string]: any}} */
  let storyMeta = {};

  Object.keys(entryData).forEach((entry) => {
    entryData[entry].stories.forEach(
      ({ storyId, locStart, locEnd, namedExport }) => {
        storyMeta[storyId] = { locStart, locEnd, filePath: entry, namedExport };
        storyIds.push(storyId);
      },
    );
    storyParams = { ...storyParams, ...entryData[entry].storyParams };
  });
  const result = {
    about: {
      homepage: "https://gingersociety.org/ginger-book",
      github: "https://github.com/ginger-society/ginger-book",
      version: 1,
    },
    stories:
      /** @type {{[key: string]: {name: string; levels: string[]; meta: any, locStart: number; locEnd: number;}}} */ ({}),
  };
  storyIds.forEach((storyId) => {
    result.stories[storyId] = {
      ...storyIdToMeta(storyId),
      ...storyMeta[storyId],
      meta: storyParams[storyId] ? storyParams[storyId].meta : {},
    };
  });
  return result;
};

/**
 * @param entryData {import('../../../shared/types.ts').EntryData}
 */
export const getMetaJsonString = (entryData) =>
  JSON.stringify(getMetaJson(entryData), null, "  ");

/**
 * @param entryData {import('../../../shared/types.ts').EntryData}
 */
export const getMetaJsonObject = (entryData) => getMetaJson(entryData);
