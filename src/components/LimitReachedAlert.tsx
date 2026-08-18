import { Alert, type AlertProps } from "@saleor/macaw-ui";
import { sprinkles } from "@saleor/macaw-ui-next";
import clsx from "clsx";

type LimitReachedAlertProps = Omit<AlertProps, "variant" | "close">;

const LimitReachedAlert = (props: LimitReachedAlertProps) => (
  // Uses the legacy macaw-ui Alert; not yet migrated to the new one.
  <Alert
    variant="warning"
    close
    className={clsx(
      sprinkles({
        gridColumn: "8",
        marginBottom: 2,
      }),
      "remove-icon-background",
    )}
    {...props}
  />
);

LimitReachedAlert.displayName = "LimitReachedAlert";
export default LimitReachedAlert;
