This repo is a mashup of things relating to GitHub Copilot Usage Metrics.

As this repo copies from the various sources, the code may not be updated to the latest version.
Please see the following references for the latest code from the original sources.
It currently contains:
1. GitHub's [Copilot Metrics Viewer](https://github.com/github-copilot-resources/copilot-metrics-viewer)
  - Live metrics as returned by the [GitHub Copilot Usage Metrics API](), which only contains the last 28 days of data.
  - The dashboard can only show the metrics for a single enterprise, organization or team.
  - Multi-org/team metrics export is not supported yet.
2. A GitHub Action to deploy the viewer to Azure Static Web Apps
  - Uses actions variables and secrets to set the SWA environment settings
  - Uses actions secrets to set the Entra ID authentication settings
3. A GitHub Action to [export the usage metrics to CSV](https://github.com/marketplace/actions/github-copilot-usage-metrics-api-export)
  - Exports for a single enterprise, single org and single team.
  - Multi-org/team metrics export is not supported yet.

## GitHub Copilot Usage Metrics Viewer
To run locally
1. Create a `.env` file according to `.env.example`
2. Install dependencies with `npm install`
3. Run with `npm run serve`
  - alternatively, you may run using Static Web Apps CLI with `swa build` and `swa start`