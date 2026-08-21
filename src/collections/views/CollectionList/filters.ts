// @ts-strict-ignore
import {
  CollectionFilterKeys,
  type CollectionListFilterOpts,
} from "@dashboard/collections/components/CollectionListPage";
import { type FilterElement, type FilterElementRegular } from "@dashboard/components/Filter/types";
import { type CollectionFilterInput, CollectionPublished } from "@dashboard/graphql";
import { findValueInEnum, maybe } from "@dashboard/misc";
import { type Option } from "@saleor/macaw-ui-next";

import {
  createFilterTabUtils,
  getSingleEnumValueQueryParam,
  getSingleValueQueryParam,
} from "../../../utils/filters";
import { type CollectionListUrlFilters, CollectionListUrlFiltersEnum } from "../../urls";

const COLLECTION_FILTERS_KEY = "collectionFilters";

export function getFilterOpts(
  params: CollectionListUrlFilters,
  channels: Option[],
): CollectionListFilterOpts {
  return {
    currency: {
      active: params?.currency !== undefined,
      choices: channels,
      value: params?.currency,
    },
    status: {
      active: maybe(() => params.status !== undefined, false),
      value: maybe(() => findValueInEnum(status, CollectionPublished)),
    },
  };
}

export function getFilterVariables(params: CollectionListUrlFilters): CollectionFilterInput {
  return {
    published: params.status ? findValueInEnum(params.status, CollectionPublished) : undefined,
    search: params.query,
  };
}

export function getFilterQueryParam(
  filter: FilterElement<CollectionFilterKeys>,
): CollectionListUrlFilters {
  const { name } = filter;

  switch (name) {
    case CollectionFilterKeys.status:
      return getSingleEnumValueQueryParam(
        filter as FilterElementRegular<CollectionFilterKeys.status>,
        CollectionListUrlFiltersEnum.status,
        CollectionPublished,
      );
    case CollectionFilterKeys.currency:
      return getSingleValueQueryParam(filter, CollectionListUrlFiltersEnum.currency);
  }
}

export const storageUtils = createFilterTabUtils<string>(COLLECTION_FILTERS_KEY);
