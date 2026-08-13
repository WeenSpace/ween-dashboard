<img width="1920" height="1080" alt="WeenSpace Dashboard 25/26" src="https://github.com/user-attachments/assets/c9705611-2729-4e65-ae35-22081f03c569" />

<div align="center">
  <h1>WeenSpace Dashboard</h1>
</div>

<div align="center">
  <p>A GraphQL-powered, single-page dashboard application for <a href="https://github.com/WeenSpace/weenspace">WeenSpace</a>.</p>
</div>

<div align="center">
 Get to know WeenSpace: <br>
  <a href="https://weenspace.com/cloud/talk-to-us?utm_source=github&utm_medium=readme&utm_campaign=repo_dashboard">Talk to a human</a>
  <span> | </span>
  <a href="https://cloud.weenspace.com/signup?utm_source=github&utm_medium=readme&utm_campaign=repo_dashboard">Talk to the API</a>
</div>

<br>

<div align="center">
  <a href="https://weenspace.com/">🏠 Website</a>
  <span> • </span>
  <a href="https://docs.weenspace.com/">📚 Docs</a>
  <span> • </span>
  <a href="https://weenspace.com/blog/">📰 Blog</a>
  <span> • </span>
  <a href="https://twitter.com/getweenspace">🐦 Twitter</a>
  <span> • </span>
  <a href="https://weenspace.com/discord">💬 Discord</a>
</div>

<div align="center">
   <span> • </span>
  <a href="https://githubbox.com/weenspace/weenspace-dashboard">🔎 Explore Code</a>
</div>

## Prerequisites

- Node.js v22 (recommended)
- A running instance of [WeenSpace](https://github.com/WeenSpace/weenspace/)
- PNPM package manager - preferably installed via [corepack](https://pnpm.io/installation#using-corepack)

> [!NOTE]
> Currently both Node v22, v20 are supported. We recommend using Node v22, since support for older versions will be dropped.

## Development

1. Clone the repository:

```bash
git clone https://github.com/WeenSpace/weenspace-dashboard.git
```

2. Enter the project directory:

```bash
cd weenspace-dashboard
```

3. Install the dependencies:

```bash
pnpm install
```

4. Configure the env vars as described in [docs/configuration.md](docs/configuration.md).

5. Start the development server with:

```bash
pnpm run dev
```

> Note:
> If you see CORS errors, check [CORS configuration](https://docs.weenspace.com/setup/configuration#allowed_client_hosts) of your WeenSpace instance or CORS settings in the Cloud Console.

## Docs

- [Configuration ⚙️](docs/configuration.md)
- [Error tracking ⚠️](docs/error-tracking.md)
- [Running tests 🏁](docs/running-tests.md)
- [Usage with Docker 🐳](docs/docker.md)
- [Sentry adapter 🗼](docs/sentry-adapter.md)
- [Deployment 🌐](docs/deployment.md)
- [Developing with stable and staging WeenSpace graphql.schema](docs/multi-schema.md)
