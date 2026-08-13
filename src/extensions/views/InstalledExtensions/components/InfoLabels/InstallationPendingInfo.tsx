import { WeenSpaceThrobber } from "@dashboard/components/Throbber";
import { infoMessages } from "@dashboard/extensions/messages";
import { FormattedMessage } from "react-intl";

import { InfoLabelsContainer } from "../InfoLabels/InfoLabelsContainer";

export const InstallationPendingInfo = () => {
  return (
    <InfoLabelsContainer
      icon={<WeenSpaceThrobber size={10} />}
      message={<FormattedMessage {...infoMessages.installationPending} />}
    />
  );
};
