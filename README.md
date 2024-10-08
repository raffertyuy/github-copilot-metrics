This repo is a mashup of things relating to GitHub Copilot Usage Metrics.

It currently contains:
1. GitHub's [Copilot Metrics Viewer](https://github.com/github-copilot-resources/copilot-metrics-viewer)
  - Live metrics as returned by the [GitHub Copilot Usage Metrics API](), which only contains the last 28 days of data.
  - The dashboard can only show the metrics for an enterprise or for a single org. Teams metrics and multi-org/team metrics are not supported yet.
2. A GitHub Action to deploy the viewer to Azure Static Web Apps
3. A GitHub Action to [export the usage metrics to CSV](https://github.com/marketplace/actions/github-copilot-usage-metrics-api-export)
  - Exports for a single enterprise, single org and single team.
  - Multi-org/team metrics export is not supported yet.