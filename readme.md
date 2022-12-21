# Elevento

Elevento is a simple site to host personal links.

The settings are stored in the `package.json` file.

```json
{
  ...
  "handle": "social-handle", // Your handle or name
  "email": "me@email.com", // The email for your gravatar
  "author": "My Name", // Your name
  // Links to show
  "links": {
    "github": "https://github.com/user",
    "link": "http://link.com/"
  },
  ...
}
```

## Redirects

This site will also create redirect pages, in case you need to link to something that needs to be redirected.

In the example above, there will be 2 redirect pages for `github` and `link`.

- https://user.github.io/elevento/github will redirect to https://github.com/user
- https://user.github.io/elevento/link will redirect to http://link.com/

## GitHub Pages

This template is designed to be set up on GitHub pages. It has an action to build and deploy the pages.

To allow the action to publish, in `Settings -> Pages -> Build and deployment` change the `Source` to `GitHub Actions`
