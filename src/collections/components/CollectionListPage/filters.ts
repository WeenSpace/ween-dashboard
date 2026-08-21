import { type IFilter } from "@dashboard/components/Filter/types";
import { CollectionPublished } from "@dashboard/graphql";
import { commonMessages } from "@dashboard/intl";
import { type FilterOpts } from "@dashboard/types";
import { createOptionsField } from "@dashboard/utils/filters/fields";
import { type Option } from "@saleor/macaw-ui-next";
import { defineMessages, type IntlShape } from "react-intl";

export interface CollectionListFilterOpts {
  status: FilterOpts<CollectionPublished>;
  currency: FilterOpts<string> & { choices: Option[] };
}

export enum CollectionFilterKeys {
  status = "status",
  currency = "currency",
}

const messages = defineMessages({
  hidden: {
    id: "9eC0MZ",
    defaultMessage: "Hidden",
    description: "collection",
  },
  published: {
    id: "lL3YJO",
    defaultMessage: "Published",
    description: "collection",
  },
});

export function createFilterStructure(
  intl: IntlShape,
  opts: CollectionListFilterOpts,
): IFilter<CollectionFilterKeys> {
  return [
    {
      ...createOptionsField(
        CollectionFilterKeys.status,
        intl.formatMessage(commonMessages.status),
        [opts.status.value],
        false,
        [
          {
            label: intl.formatMessage(messages.published),
            value: CollectionPublished.PUBLISHED,
          },
          {
            label: intl.formatMessage(messages.hidden),
            value: CollectionPublished.HIDDEN,
          },
        ],
      ),
      active: opts.status.active,
      dependencies: [CollectionFilterKeys.currency],
    },
    {
      ...createOptionsField(
        CollectionFilterKeys.currency,
        intl.formatMessage(commonMessages.channel),
        [opts.currency?.value],
        false,
        opts.currency?.choices,
      ),
      active: opts.currency?.active,
    },
  ];
}
