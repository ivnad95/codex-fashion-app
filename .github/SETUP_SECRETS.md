# Required GitHub Secrets Setup

To enable the automated issue fixing and branch merging workflow, you need to configure the following secrets in your repository settings:

## Required Secrets

### 1. ANTHROPIC_API_KEY
- **Purpose**: Used for Claude AI to automatically fix code issues
- **How to get**: 
  1. Go to https://console.anthropic.com/
  2. Create an account or sign in
  3. Navigate to API Keys section
  4. Generate a new API key
- **Add to GitHub**: 
  1. Go to Settings → Secrets and variables → Actions
  2. Click "New repository secret"
  3. Name: `ANTHROPIC_API_KEY`
  4. Value: Your Claude API key

### 2. OPENAI_API_KEY
- **Purpose**: Used for Codex as a fallback AI to fix code issues
- **How to get**:
  1. Go to https://platform.openai.com/
  2. Create an account or sign in
  3. Navigate to API Keys section
  4. Generate a new API key
- **Add to GitHub**:
  1. Go to Settings → Secrets and variables → Actions
  2. Click "New repository secret"
  3. Name: `OPENAI_API_KEY`
  4. Value: Your OpenAI API key

## Workflow Permissions

Ensure your GitHub Actions have the correct permissions:

1. Go to Settings → Actions → General
2. Under "Workflow permissions", select:
   - ✅ Read and write permissions
   - ✅ Allow GitHub Actions to create and approve pull requests

## Testing the Setup

Once configured, you can test the automation:

1. **Manual trigger**:
   - Go to Actions tab
   - Select "Auto Fix Issues and Merge to Main"
   - Click "Run workflow"
   - Optionally specify a branch or leave empty for all branches

2. **Automatic trigger**:
   - Push changes to any branch (except main)
   - The workflow will automatically run

3. **Scheduled runs**:
   - The workflow runs daily at 2 AM UTC
   - Processes all branches automatically

## Monitoring

- Check the Actions tab for workflow runs
- Review created PRs with the "auto-merge" label
- Check Issues for stale branch notifications

## Troubleshooting

If the workflow fails:

1. **API Key Issues**:
   - Verify secrets are correctly set
   - Check API key validity and quotas

2. **Permission Issues**:
   - Ensure workflow has write permissions
   - Check branch protection rules

3. **Fix Failures**:
   - Review workflow logs in Actions tab
   - Some complex issues may require manual intervention

## Cost Considerations

- Claude API: Charges per token processed
- OpenAI API: Charges per token processed
- GitHub Actions: Free tier includes 2,000 minutes/month for private repos

Monitor your API usage to control costs.