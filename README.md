# tech-debt-action
Github action to create tickets in [tech-debt](corgi.bltz.pw) based on todo's in diff.

# Setup

## Inputs

### tech-debt-token

**Required** the token that allows the github action to communicate with the tech debt platform. If you don't have one yet, you can create one under [dashboard settings](corgi.bltz.pw/dashboard/settings)

## Outputs

### created-tickets

List of URLs to the created tickets in the platform

## Example usage

```
uses: actions/tech-debt-action@v0.0.1
with:
  tech-debt-token: 'xxxxx-yyyyy-zzzzz'
```
