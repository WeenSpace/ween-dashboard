import { makeStyles } from "@saleor/macaw-ui";

export const useStyles = makeStyles(
  theme => ({
    namePadding: {
      padding: "16px",
    },
    supportText: {
      color: theme.palette.weenspace.main[3],
    },
  }),
  { name: "TaxClassesPage" },
);
