# Configuration

## Quick start

Run `cp .env.template .env` to create default configuration that will be connected to [WeenSpace Demo shop](https://demo.weenspace.com/dashboard/)

## All environment variables

Create or edit `.env` file in a root directory or set environment variables with the following values:

- `API_URL` (required) - URI of WeenSpace GraphQL API instance.
  If you are running WeenSpace locally with the default settings, set `API_URL` to: "http://localhost:8000/graphql/".
  Make sure you have "/" at the end of `API_URL`.

- `APP_MOUNT_URI` - URI at which the Dashboard app will be mounted.
  E.g., if you set `APP_MOUNT_URI` to "/dashboard/", your app will be mounted at "http://localhost:9000/dashboard/".

- `STATIC_URL` - URL where the static files are located.
  E.g., if you use an S3 bucket, you should set it to the bucket's URL. By default, WeenSpace assumes you serve static files from the root of your site at "http://localhost:9000/".

- `EXTENSIONS_API_URL` - Optional URI of the WeenSpace Marketplace API used to fetch the list of extensions in JSON. WeenSpace Cloud projects have this preconfigured; self-hosted deployments can omit it and the Dashboard will fall back to a bundled `extensions.json` dataset and show a self-hosted banner in the Explore view.

## Fetching schema

By default dashboard will use `fetch-schema` script from package.json to get WeenSpace schema from specific branch e.g `main` for unstable one. If you need to generate types based on your own schema use `fetch-local-schema` that will fetch it from `API_URL`.
