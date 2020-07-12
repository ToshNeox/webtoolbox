# The Web Toolbox
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FToshNeox%2Fwebtoolbox.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FToshNeox%2Fwebtoolbox?ref=badge_shield)

_A collection of handy, free-to-use tools for web developers, programmers and designers alike._

Inspired by _thetoolbox.cc_ that went offline some time ago.

## Adding new tools or making fixes
Please see [contributing.md](https://github.com/ToshNeox/webtoolbox/blob/master/CONTRIBUTING.md).

## Developing locally
The application is developed and built for production using the amazing [Parcel bundler](https://github.com/parcel-bundler/parcel).

Just clone the project locally, install dependencies with `npm i` and run `npm run serve`.

Parcel will build the project and create a local development server at `http://localhost:1234` (if that port is available.)

### Updating the online site
The site is hosted using GitHub pages, serving content from the `gh-pages` branch.

This branch is a sub-tree of the master branch, using files from the `dist` folder on master.

To update the branch:

- Build the project using `npm run build`
- Commit the new site contents
- Update the branch using `npm run updatepages`

The site should update as soon as GitHub Pages deploys from the new code.


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FToshNeox%2Fwebtoolbox.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FToshNeox%2Fwebtoolbox?ref=badge_large)