import { type IFilter } from "@dashboard/components/Filter/types";
import { DiscountStatusEnum, VoucherDiscountType } from "@dashboard/graphql";
import { type FilterOpts, type MinMax } from "@dashboard/types";
import {
  createDateField,
  createNumberField,
  createOptionsField,
} from "@dashboard/utils/filters/fields";
import { type Option } from "@saleor/macaw-ui-next";
import { defineMessages, type IntlShape } from "react-intl";

export enum VoucherFilterKeys {
  saleType = "saleType",
  started = "started",
  status = "status",
  timesUsed = "timesUsed",
  currency = "currency",
}

export interface VoucherListFilterOpts {
  saleType: FilterOpts<VoucherDiscountType[]>;
  started: FilterOpts<MinMax>;
  status: FilterOpts<DiscountStatusEnum[]>;
  timesUsed: FilterOpts<MinMax>;
  currency: FilterOpts<string> & { choices: Option[] };
}

const messages = defineMessages({
  active: {
    id: "amQg6f",
    defaultMessage: "Active",
    description: "voucher status",
  },
  currency: {
    id: "hLGgfN",
    defaultMessage: "Currency",
    description: "voucher currency",
  },
  expired: {
    id: "t7UwLY",
    defaultMessage: "Expired",
    description: "voucher status",
  },
  fixed: {
    id: "XDBeA+",
    defaultMessage: "Fixed amount",
    description: "discount type",
  },
  percentage: {
    id: "s17U7u",
    defaultMessage: "Percentage",
    description: "discount type",
  },
  scheduled: {
    id: "Jj0de8",
    defaultMessage: "Scheduled",
    description: "voucher status",
  },
  started: {
    id: "ujFo4A",
    defaultMessage: "Started",
    description: "voucher start date",
  },
  status: {
    id: "uy+tB8",
    defaultMessage: "Status",
    description: "voucher status",
  },
  timesUsed: {
    id: "h75GAF",
    defaultMessage: "Times used",
    description: "voucher",
  },
  type: {
    id: "KHZlmi",
    defaultMessage: "Discount Type",
  },
});

export function createFilterStructure(
  intl: IntlShape,
  opts: VoucherListFilterOpts,
): IFilter<VoucherFilterKeys> {
  return [
    {
      ...createOptionsField(
        VoucherFilterKeys.currency,
        intl.formatMessage(messages.currency),
        [opts.currency.value],
        false,
        opts.currency.choices,
      ),
      active: opts.currency.active,
    },
    {
      ...createDateField(
        VoucherFilterKeys.started,
        intl.formatMessage(messages.started),
        opts.started.value,
      ),
      active: opts.started.active,
    },
    {
      ...createNumberField(
        VoucherFilterKeys.timesUsed,
        intl.formatMessage(messages.timesUsed),
        opts.timesUsed.value,
      ),
      active: opts.timesUsed.active,
    },
    {
      ...createOptionsField(
        VoucherFilterKeys.status,
        intl.formatMessage(messages.status),
        opts.status.value,
        true,
        [
          {
            label: intl.formatMessage(messages.active),
            value: DiscountStatusEnum.ACTIVE,
          },
          {
            label: intl.formatMessage(messages.expired),
            value: DiscountStatusEnum.EXPIRED,
          },
          {
            label: intl.formatMessage(messages.scheduled),
            value: DiscountStatusEnum.SCHEDULED,
          },
        ],
      ),
      active: opts.status.active,
    },
    {
      ...createOptionsField(
        VoucherFilterKeys.saleType,
        intl.formatMessage(messages.type),
        opts.saleType.value,
        false,
        [
          {
            label: intl.formatMessage(messages.fixed),
            value: VoucherDiscountType.FIXED,
          },
          {
            label: intl.formatMessage(messages.percentage),
            value: VoucherDiscountType.PERCENTAGE,
          },
          {
            label: intl.formatMessage(messages.percentage),
            value: VoucherDiscountType.SHIPPING,
          },
        ],
      ),
      active: opts.saleType.active,
    },
  ];
}
